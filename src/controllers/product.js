import ProductModel from '../models/product';

export async function list(req, res, next) {
  try {
    const products = await ProductModel.find();
    res.render('list', {
      title: 'product list for BidHub',
      products,
    });
  } catch (err) {
    // 这里捕捉到错误 `error`
    next(err);
  }
}

export default {
  list,
};
