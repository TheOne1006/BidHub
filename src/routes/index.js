import { home } from '../controllers/home';
import * as productCtrl from '../controllers/product';
import * as mock from '../controllers/mock';
import * as userCtrl from '../controllers/user';

export default (app) => {
  app.get('/', home);
  app.get('/list', productCtrl.list);
  app.get('/product/:id', productCtrl.info);
  app.post('/bid', productCtrl.tender);

  // pubish
  app.get('/publish/:id', productCtrl.publishView);
  app.post('/publish', productCtrl.publish);

  // mock
  app.get('/mockRestData', mock.resetData);
  /**
   * 用户信息
   */
  app.get('/login', userCtrl.loginView);
  app.post('/login', userCtrl.loginAction);
  app.get('/logout', userCtrl.logout);
  app.get('/user/:id', userCtrl.info);
};
