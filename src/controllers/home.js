export async function home(req, res) {
  res.render('index', {
    title: '首页',
  });
}

export default {
  home,
};
