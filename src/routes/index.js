import { list as articleList } from '../controllers/article';
import * as productCtrl from '../controllers/product';
import mock from '../controllers/mock';

export default (app) => {
  app.get('/', articleList);
  app.get('/list', productCtrl.list);
  app.get('/mockRestData', mock.resetData);
};
