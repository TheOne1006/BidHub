import userModel from '../models/user';
import productModel from '../models/product';

const mockUsers = [{
  username: '小明',
  walet: 2.11,
}, {
  username: '李雷',
  walet: 33333.11,
}, {
  username: '韩梅梅',
  walet: 2999.11,
}];

const mockProducts = [{
  name: '战国帛书',
  sold: 0,
  listPrice: 10.00,
  bidPrice: 0,
}, {
  name: '青铜鱼',
  sold: 0,
  listPrice: 100.00,
  bidPrice: 0,
}, {
  name: '兰亭序真迹',
  sold: 0,
  listPrice: 1000.00,
  bidPrice: 0,
}];

export async function resetData(req, res, next) {
  try {
    // 清除相关 collections
    await userModel.remove({});
    await productModel.remove({});

    const users = await userModel.insertMany(mockUsers);
    const products = await productModel.insertMany(mockProducts);

    res.render('reset', {
      title: '重置 BidHub - Node.js',
      users,
      products,
    });
  } catch (err) {
    // 这里捕捉到错误 `error`
    next(err);
  }
}

export default {
  resetData,
};
