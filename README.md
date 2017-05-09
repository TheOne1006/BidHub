## BidHub

clone by<https://github.com/TheOne1006/es6-express> 基于个人 扩展的 express kit

heroku地址: <https://bid-hub.herokuapp.com/>
使用 [mlab.com](https://mlab.com) 免费 mongo 数据库

docker-compose 启动时,使用的是 本地的 mongo

### 启动开始

```bash
# 构建 build
yarn run build -- --release
# docker 启动
docker-compose up -d
# 浏览器打开 http://localhost:3000/

# 访问 http://localhost:3000/mockRestData 重置所有测试数据
# http://localhost:3000/list 访问连接
# 通过 "开始竞标" 按钮 介入竞标, 填写竞价
# 通过 "修改竞标信息>>" 按钮, 可以设置结束之间, 结束之后,
# 可以通过 顶部进入用户个人信息界面
```

注意:
1. mockRestData 重置数据后,需要退出重新登录.(暂未设置严格限制, 以及容错处理)
2. tick 以分钟为节点, 交给 node-cron 处理
3. 欢迎吐槽,交流

### 调试启动

```bash
yarn start
# 浏览器打开 http://localhost:3001/

# 打包
yarn run build -- --release
```

#### homework 说明



#### 要求

  * Docker/docker-compose(本地 Mongodb 数据库时使用)
  * Mac OS X, Windows, or Linux
  * Yarn package + Node.js v6.5 +

#### 布局目录

  开始之前, 花一点时间了解文件结构:

```shell
.
├── /build/                     # 编译输出的文件夹
├── /docs/                      # 项目文档文件
├── /node_modules/              # 第三方库和工具
├── /public/                    # 静态文件,将会复制到 /build/public 目录
├── /src/                       # 应用源码
│   ├── /models/                # express Model
│   ├── /controllers/           # express Controllers
│   ├── /routes/                # express Rroutes
│   ├── /views/                 # 模板文件 可能是 ejs, jade
│   ├── /config.js              # 全局应用程序设置
│   └── /server.js              # 服务器端脚本启动
├── /test/                      # 单元测试 以及 点对点测试
├── /tools/                     # 构建自动化脚本和实用程序
│   ├── /lib/                   # 实用程序片段的库
│   ├── /build.js               # 从源文件到输出（build）目录 构建项目
│   ├── /bundle.js              # 通过Webpack将Web资源捆绑到软件包中
│   ├── /clean.js               # 清空输出（build）目录
│   ├── /copy.js                # 将静态文件复制到输出（build）目录
│   ├── /deploy.js              # 部署 Web 应用
│   ├── /run.js                 # 自动构建任务 的 Helper 方法
│   ├── /runServer.js           # 启动（或重新启动）Node.js服务器
│   ├── /start.js               # 启动开发Web服务器 with "live reload"
│   └── /webpack.config.js      # 客户端和服务器端软件包的配置
└── package.json                # 第三方 库和 utilities
```

#### 快速开始

##### 1. 获取项目

```shell
$ git clone https://github.com/TheOne1006/BidHub.git MyApp
$ cd MyApp
```

##### 2. Run `yarn install`

这条命令将会安装所有 [package.json](../package.json) 中的项目依赖和开发工具列表.

##### 3. Run `yarn start`

这条命令将 通过 (`/src`) 里的所有源文件构建 应用 到 (`/build`)  目录.
一旦初始构建完成,
它将启动 Node.js 服务(`node build/server.js`) 以及
[Browsersync](https://browsersync.io/)
通过 [HMR](https://webpack.github.io/docs/hot-module-replacement).

> [http://localhost:3000/](http://localhost:3000/) — Node.js 服务 (`build/server.js`)<br>
> [http://localhost:3001/](http://localhost:3001/) — BrowserSync proxy<br>
> [http://localhost:3002/](http://localhost:3002/) — BrowserSync control panel (UI)

> 注意! `yarn start` 命令在应用中是 `development` 模式,

在这种情况下不会优化和最小化编译的输出文件.
你可以使用 `--release` 命令参数 让 你的应用 使用 `production` 模式:

```shell
$ yarn start -- --release
```

*NOTE: double dashes are required*

#### 如何构建，测试，部署

如果你只需要构建应用程序（没有运行dev服务器），只需运行：

```shell
$ yarn run build
```

或者, 构建一个 production 应用:

```shell
$ yarn run build -- --release
```

或者创建一个 docker 应用:

```shell
$ yarn run build -- --release --docker
```
