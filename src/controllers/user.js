import UserModel from '../models/user';

/**
 * 渲染 login 页面
 */
export async function loginView(req, res) {
  const users = await UserModel.find({ });
  res.render('login', {
    title: '登录',
    users,
  });
}


export async function info(req, res) {
  const { id } = req.params;
  const user = await UserModel.findOne({ _id: id });
  res.render('user-info', {
    title: `用户详情-${user.username}`,
    user,
  });
}
/**
 * 登录操作
 * 写入 cookie
 */
export async function loginAction(req, res, next) {
  const { username } = req.body;
  let loginSuccess = false;
  let userId = '';

  if (username) {
    try {
      const user = await UserModel.findOne({ username });
      userId = user._id; // eslint-disable-line
      if (user) {
        loginSuccess = true;
      } else {
        const error = new Error('username is non existent');
        next(error);
      }
    } catch (err) {
      next(err);
    }
  }

  if (loginSuccess) {
    res.cookie('username', username, { maxAge: 1000 * 60 * 60, httpOnly: true });
    res.cookie('userId', userId, { maxAge: 1000 * 60 * 60, httpOnly: true });
    res.redirect('/');
  }
}

export async function logout(req, res) {
  res.clearCookie('username');
  res.redirect('/');
}

export default {
  loginView,
  loginAction,
  logout,
};
