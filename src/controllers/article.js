import ArticleModel from '../models/article';

export async function list(req, res, next) {
  try {
    const articles = await ArticleModel.find();
    res.render('index', {
      title: 'Generator-Express MVC',
      articles,
    });
  } catch (err) {
    // 这里捕捉到错误 `error`
    next(err);
  }
}

export default {
  list,
};
