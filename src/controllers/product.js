import moment from 'moment';
import ProductModel from '../models/product';
import UserModel from '../models/user';
import { create as createCron } from '../utils/cronUtil';

/**
 * 私有方法 结束投标
 */
async function finishBid(productId) {
  try {
    /**
     * 验证逻辑
     * 1. 验证 product 相关字段,是否有 tenderList
     * 2. 验证每个用户的资金是否充足
     * 3. 在合法的用户中执行相关扣除金额的操作
     */
    const product = await ProductModel.findOne({ _id: productId });

    if (!product || product.sold === 1 || !product.tenderList || product.tenderList.length === 0) {
      return new Error('状态错误, 无法继续交易');
    }

    /**
     * FIXME:
     * 1. 逻辑问题, 如果第一名的资金突然不足,该如何处理?
     * 这里暂时不处理,解决方案很多
     */
    let realPrice = product.listPrice; // 成交价格
    let purchaserUserId = ''; // 购买用户 id

    if (product.tenderList.length > 1) {
      const tenderSortByPrice = product.tenderList.sort((a, b) => (b.price - a.price));
      realPrice = tenderSortByPrice[1].price;
      purchaserUserId = tenderSortByPrice[0].userId;
    } else {
      realPrice = product.tenderList[0].price;
      purchaserUserId = product.tenderList[0].userId;
    }

    // console.log(`realPrice :${realPrice}`);
    // console.log(`purchaserUserId :${purchaserUserId}`);

    // 扣除用户金额,并修改 product 相关状态
    await UserModel.update(
      { _id: purchaserUserId, walet: { $gt: realPrice } },
      { $inc: { walet: realPrice * -1 } });

    // 更新状态
    product.bidPrice = realPrice;
    product.sold = 1;
    return product.save();
  } catch (error) {
    // XXX:log 日志 ,异常处理
    console.log(error);
    throw error;
  }
}


/**
 * 信息列表
 */
export async function list(req, res, next) {
  try {
    const products = await ProductModel.find();
    res.render('list', {
      title: 'product list for BidHub',
      products,
    });
  } catch (err) {
    next(err);
  }
}

/**
 * 产品详情
 */
export async function info(req, res, next) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findOne({ _id: id });
    if (!product) {
      const error = new Error(' id is error');
      next(error);
    } else {
      res.render('product-info', {
        title: product.title,
        product,
      });
    }
  } catch (err) {
    // 这里捕捉到错误 `error`
    next(err);
  }
}

/**
 * 投标 ctrl
 */
export async function tender(req, res, next) {
  const { userId, productId, price } = req.body;
  let allowBid = true; // 是否允许校验
  let error = ''; // 报错 Error

  if (!userId || !productId || !price) {
    allowBid = false;
    error = new Error('userId or productId or price is Empty');
    return next(error);
  }

  /**
   * 校验用户信息
   * 正常情况, 在此之前已经校验, 兼容 要求格式
   * 同时需要满足条件
   * 1. 判断资金是否充足
   */
  const userInfo = await UserModel.findOne({ _id: userId });
  /**
   * 获取相关 product 信息
   * 并判断是否可交易
   * 1. 字段状态
   */
  const product = await ProductModel.findOne({ _id: productId });

  /**
   * 校验数据有效性
   */
  if (!userInfo || !product) {
    allowBid = false;
    error = new Error('user or product is not existent');
  }

  // 用户资金不足
  if (allowBid && userInfo.walet < price) {
    allowBid = false;
    error = new Error('user Insufficient funds');
  }

  // 出价太低
  if (allowBid && product.listPrice > price) {
    allowBid = false;
    error = new Error('Bid too low');
  }

  // 状态不对
  if (allowBid && product.sold === 1) {
    allowBid = false;
    error = new Error('end of auction');
  }

  // deadline 校验
  if (allowBid) {
    const now = moment().format('x');

    if (now > product.deadline) {
      allowBid = false;
      error = new Error('tender closed');
    }
  }

  if (allowBid) {
    await ProductModel.findByIdAndUpdate(
        productId,
        { $push: { tenderList: { userId, price } } },
        { safe: true, upsert: true, new: true },
    );

    res.send({
      ok: 1,
      price,
    });
    return next();
  }

  return next(error);
}


/**
 * 产品详情发布
 */
export async function publishView(req, res, next) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findOne({ _id: id });
    if (!product) {
      const error = new Error(' id is error');
      next(error);
    } else {
      res.render('publish', {
        title: product.title,
        product,
      });
    }
  } catch (err) {
    // 这里捕捉到错误 `error`
    next(err);
  }
}

/**
 * 发布 标的截止时间
 */
export async function publish(req, res, next) {
  const { deadlineDate, productId } = req.body;
  try {
    if (!deadlineDate || !productId) {
      next(new Error('argument is error'));
    } else {
      const product = await ProductModel.findOne({ _id: productId });
      if (product.sold !== 0) {
        next(new Error('product is solded'));
      } else {
        const deadlineDateTimer = moment(deadlineDate);
        // console.log(`moment(): ${moment(deadlineDate)}`);
        const deadlineDateNum = deadlineDateTimer.format('x') - 0;
        // console.log(moment(deadlineDate).format('YYYY-MM-DD HH:mm:ss'));
        product.deadline = deadlineDateNum;
        await product.save();

        // 专业的事情还是要交给专业的去做, 比如 Chronos
        createCron(productId, deadlineDateTimer.toDate(), () => {
          // 投标结果计算
          finishBid(productId);
        });

        res.send({
          ...product.toJSON(),
        });
      }
    }
  } catch (error) {
    next(error);
  }
}

export default {
  list,
  info,
  tender,
  publishView,
  publish,
};
