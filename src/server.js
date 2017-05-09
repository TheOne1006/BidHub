import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';

import moment from 'moment';
// import glob from 'glob';
import Promise from 'bluebird';
import routers from './routes';
import { db } from './config';

// Use bluebird
mongoose.Promise = Promise;
mongoose.connect(db);

const dbConn = mongoose.connection;
dbConn.on('error', () => {
  throw new Error(`unable to connect to database at: ${db}`);
});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));

app.use((req, res, next) => {
  res.locals.isLogin = false;
  res.locals.username = '';
  res.locals.userId = '';
  res.locals.moment = moment;
  const { username, userId } = req.cookies;
  if (username && userId) {
    res.locals.isLogin = true;
    res.locals.username = username;
    res.locals.userId = userId;
  }
  next();
});

routers(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error',
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error',
  });
});

export default app;
