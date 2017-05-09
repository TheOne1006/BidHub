require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose_float__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose_float__);



// 题目要求 float 类型, 保留小数点后3位,精确到分
// XXX: 但是我更希望是 Int 类型, 从 "分" 开始.
const Float = __WEBPACK_IMPORTED_MODULE_1_mongoose_float___default.a.loadType(__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a, 3);

const UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
  username: { type: String, required: true, unique: true },
  walet: { type: Float, min: 0, defualt: 0 }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const port = process.env.PORT || 3000;
/* harmony export (immutable) */ __webpack_exports__["a"] = port;

const db = process.env.db || 'mongodb://bidHubAdmin:bidHubAdmin@ds133251.mlab.com:33251/bidhub';
/* harmony export (immutable) */ __webpack_exports__["b"] = db;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose_float__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose_float__);



// 题目要求 float 类型, 保留小数点后3位,精确到分
// XXX: 但是我更希望是 Int 类型, 从 "分" 开始.
const Float = __WEBPACK_IMPORTED_MODULE_1_mongoose_float___default.a.loadType(__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a, 3);

const ProductSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
  name: { type: String, required: true, unique: true },
  sold: { type: Number, enum: [0, 1], default: 0 }, // <0|1  1表明已经被卖出>
  listPrice: { type: Float, min: 0, required: true },
  bidPrice: { type: Float, min: 0 },
  ts: { type: Number, default: Date.now, timestamps: true },
  tenderList: [{
    userId: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  deadline: { type: Number, timestamps: true }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Product', ProductSchema));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose-float");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);



__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */].listen(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* port */], () => {
  console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_1__config__["a" /* port */]}/`); // eslint-disable-line
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return home; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let home = (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    res.render('index', {
      title: '首页'
    });
  });

  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

/* unused harmony default export */ var _unused_webpack_default_export = ({
  home
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetData; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const mockUsers = [{
  username: '小明',
  walet: 22.11
}, {
  username: '李雷',
  walet: 33333.11
}, {
  username: '韩梅梅',
  walet: 2999.11
}];

const mockProducts = [{
  name: '战国帛书',
  sold: 0,
  listPrice: 10.00,
  bidPrice: 0
}, {
  name: '青铜鱼',
  sold: 0,
  listPrice: 100.00,
  bidPrice: 0
}, {
  name: '兰亭序真迹',
  sold: 0,
  listPrice: 1000.00,
  bidPrice: 0
}];

let resetData = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      // 清除相关 collections
      yield __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].remove({});
      yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].remove({});

      const users = yield __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].insertMany(mockUsers);
      const products = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].insertMany(mockProducts);

      res.render('reset', {
        title: '重置 BidHub - Node.js',
        users,
        products
      });
    } catch (err) {
      // 这里捕捉到错误 `error`
      next(err);
    }
  });

  return function resetData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

/* unused harmony default export */ var _unused_webpack_default_export = ({
  resetData
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_cronUtil__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return publishView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return publish; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 私有方法 结束投标
 */
let finishBid = (() => {
  var _ref = _asyncToGenerator(function* (productId) {
    try {
      /**
       * 验证逻辑
       * 1. 验证 product 相关字段,是否有 tenderList
       * 2. 验证每个用户的资金是否充足
       * 3. 在合法的用户中执行相关扣除金额的操作
       */
      const product = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].findOne({ _id: productId });

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
        const tenderSortByPrice = product.tenderList.sort(function (a, b) {
          return b.price - a.price;
        });
        realPrice = tenderSortByPrice[1].price;
        purchaserUserId = tenderSortByPrice[0].userId;
      } else {
        realPrice = product.tenderList[0].price;
        purchaserUserId = product.tenderList[0].userId;
      }

      // console.log(`realPrice :${realPrice}`);
      // console.log(`purchaserUserId :${purchaserUserId}`);

      // 扣除用户金额,并修改 product 相关状态
      yield __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].update({ _id: purchaserUserId, walet: { $gt: realPrice } }, { $inc: { walet: realPrice * -1 } });

      // 更新状态
      product.bidPrice = realPrice;
      product.sold = 1;
      return product.save();
    } catch (error) {
      // XXX:log 日志 ,异常处理
      console.log(error);
      throw error;
    }
  });

  return function finishBid(_x) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * 信息列表
 */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let list = (() => {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    try {
      const products = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].find();
      res.render('list', {
        title: 'product list for BidHub',
        products
      });
    } catch (err) {
      next(err);
    }
  });

  return function list(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();

/**
 * 产品详情
 */
let info = (() => {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    const { id } = req.params;
    try {
      const product = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].findOne({ _id: id });
      if (!product) {
        const error = new Error(' id is error');
        next(error);
      } else {
        res.render('product-info', {
          title: product.title,
          product
        });
      }
    } catch (err) {
      // 这里捕捉到错误 `error`
      next(err);
    }
  });

  return function info(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
})();

/**
 * 投标 ctrl
 */
let tender = (() => {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
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
    const userInfo = yield __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].findOne({ _id: userId });
    /**
     * 获取相关 product 信息
     * 并判断是否可交易
     * 1. 字段状态
     */
    const product = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].findOne({ _id: productId });

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
      const now = __WEBPACK_IMPORTED_MODULE_0_moment___default()().format('x');

      if (now > product.deadline) {
        allowBid = false;
        error = new Error('tender closed');
      }
    }

    if (allowBid) {
      yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].findByIdAndUpdate(productId, { $push: { tenderList: { userId, price } } }, { safe: true, upsert: true, new: true });

      res.send({
        ok: 1,
        price
      });
      return next();
    }

    return next(error);
  });

  return function tender(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
})();

/**
 * 产品详情发布
 */
let publishView = (() => {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    const { id } = req.params;
    try {
      const product = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].findOne({ _id: id });
      if (!product) {
        const error = new Error(' id is error');
        next(error);
      } else {
        res.render('publish', {
          title: product.title,
          product
        });
      }
    } catch (err) {
      // 这里捕捉到错误 `error`
      next(err);
    }
  });

  return function publishView(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
})();

/**
 * 发布 标的截止时间
 */
let publish = (() => {
  var _ref6 = _asyncToGenerator(function* (req, res, next) {
    const { deadlineDate, productId } = req.body;
    try {
      if (!deadlineDate || !productId) {
        next(new Error('argument is error'));
      } else {
        const product = yield __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* default */].findOne({ _id: productId });
        if (product.sold !== 0) {
          next(new Error('product is solded'));
        } else {
          const deadlineDateTimer = __WEBPACK_IMPORTED_MODULE_0_moment___default()(deadlineDate);
          // console.log(`moment(): ${moment(deadlineDate)}`);
          const deadlineDateNum = deadlineDateTimer.format('x') - 0;
          // console.log(moment(deadlineDate).format('YYYY-MM-DD HH:mm:ss'));
          product.deadline = deadlineDateNum;
          yield product.save();

          // 专业的事情还是要交给专业的去做, 比如 Chronos
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_cronUtil__["a" /* create */])(productId, deadlineDateTimer.toDate(), function () {
            // 投标结果计算
            finishBid(productId);
          });

          res.send(_extends({}, product.toJSON()));
        }
      }
    } catch (error) {
      next(error);
    }
  });

  return function publish(_x14, _x15, _x16) {
    return _ref6.apply(this, arguments);
  };
})();

/* unused harmony default export */ var _unused_webpack_default_export = ({
  list,
  info,
  tender,
  publishView,
  publish
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 渲染 login 页面
 */
let loginView = (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const users = yield __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].find({});
    res.render('login', {
      title: '登录',
      users
    });
  });

  return function loginView(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

let info = (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    const { id } = req.params;
    const user = yield __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].findOne({ _id: id });
    res.render('user-info', {
      title: `用户详情-${user.username}`,
      user
    });
  });

  return function info(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();
/**
 * 登录操作
 * 写入 cookie
 */
let loginAction = (() => {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    const { username } = req.body;
    let loginSuccess = false;
    let userId = '';

    if (username) {
      try {
        const user = yield __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].findOne({ username });
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
  });

  return function loginAction(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
})();

let logout = (() => {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    res.clearCookie('username');
    res.redirect('/');
  });

  return function logout(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
})();

/* unused harmony default export */ var _unused_webpack_default_export = ({
  loginView,
  loginAction,
  logout
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_product__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_mock__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_user__ = __webpack_require__(11);





/* harmony default export */ __webpack_exports__["a"] = (app => {
  app.get('/', __WEBPACK_IMPORTED_MODULE_0__controllers_home__["a" /* home */]);
  app.get('/list', __WEBPACK_IMPORTED_MODULE_1__controllers_product__["a" /* list */]);
  app.get('/product/:id', __WEBPACK_IMPORTED_MODULE_1__controllers_product__["b" /* info */]);
  app.post('/bid', __WEBPACK_IMPORTED_MODULE_1__controllers_product__["c" /* tender */]);

  // pubish
  app.get('/publish/:id', __WEBPACK_IMPORTED_MODULE_1__controllers_product__["d" /* publishView */]);
  app.post('/publish', __WEBPACK_IMPORTED_MODULE_1__controllers_product__["e" /* publish */]);

  // mock
  app.get('/mockRestData', __WEBPACK_IMPORTED_MODULE_2__controllers_mock__["a" /* resetData */]);
  /**
   * 用户信息
   */
  app.get('/login', __WEBPACK_IMPORTED_MODULE_3__controllers_user__["a" /* loginView */]);
  app.post('/login', __WEBPACK_IMPORTED_MODULE_3__controllers_user__["b" /* loginAction */]);
  app.get('/logout', __WEBPACK_IMPORTED_MODULE_3__controllers_user__["c" /* logout */]);
  app.get('/user/:id', __WEBPACK_IMPORTED_MODULE_3__controllers_user__["d" /* info */]);
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_morgan__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bluebird__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(2);








// import glob from 'glob';




// Use bluebird
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = __WEBPACK_IMPORTED_MODULE_7_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_9__config__["b" /* db */]);

const dbConn = __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connection;
dbConn.on('error', () => {
  throw new Error(`unable to connect to database at: ${__WEBPACK_IMPORTED_MODULE_9__config__["b" /* db */]}`);
});

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.set('views', __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(__WEBPACK_IMPORTED_MODULE_5_morgan___default()('dev'));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static('./public'));

app.use((req, res, next) => {
  res.locals.isLogin = false;
  res.locals.username = '';
  res.locals.userId = '';
  res.locals.moment = __WEBPACK_IMPORTED_MODULE_6_moment___default.a;
  const { username, userId } = req.cookies;
  if (username && userId) {
    res.locals.isLogin = true;
    res.locals.username = username;
    res.locals.userId = userId;
  }
  next();
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */])(app);

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
      title: 'error'
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cron__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cron__);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;


const DataSource = {};
function create(id, time, func) {
  const job = new __WEBPACK_IMPORTED_MODULE_0_cron__["CronJob"]({
    cronTime: time,
    onTick: () => {
      func();
    },
    start: true,
    timeZone: 'Asia/Shanghai'
  });

  // if (DataSource[id]) {
  //   const curJob = DataSource[id];
  //   curJob.stop();
  // }

  DataSource[id] = job;
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  create
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cron");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map