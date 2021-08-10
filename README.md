# uniapp-template

### 介绍
uni-app项目基础模版，会持续更新。。。

### 安装教程

1.  git clone
2.  cd uniapp-template
3.  npm install // npm失败时尝试使用cnpm install

### 项目结构

``` bash
├── common                              // 常量、公共函数
│   ├── config.js                           // 配置
│   ├── consts.js                           // 常量
│   ├── reuni.js                            // 重写uni-app api
│   ├── tools.js                            // 公共函数
│   └── utils.js                            // 项目函数
├── components                          // 公共组件
│   └── demo.vue                            // 组件模版
├── libs                                // 项目用到的插件
├── mixins                              // 存放全局mixin
├── pages                               // 项目页面
│   ├── mainPack                            // 主包
│   ├── subPackA                            // 分包A
│   └── demo.vue                            // 页面模版
├── service                             // 网络服务
│   ├── api                                 // 存放项目api
│   ├── └── index.js                        // 引入api
│   └── request.js                          // uni.request封装
├── static                              // 公共资源
│   ├── images                              // 图片 
├── store                               // vuex
│   ├── modules                             // vuex分类
│   │   ├── systemInfo.js                   // 当前平台及系统信息数据管理
│   │   ├── theme.js                        // 项目主题风格及全局配置数据管理
│   │   └── user.js                         // 用户数据管理
│   └── index.js                            // vuex方法集合
├── style                               // 存放样式文件
│   ├── base.scss                           // 公共样式
│   ├── mixin.scss                          // 字体图标样式
│   └── mixin.scss                          // 样式mixin配置
├── unpackage                           // 项目编译后的文件
├── .eslintrc                           // eslint规则配置
├── App.vue                             // 项目主界面
├── main.js                             // 程序入口文件，加载各种公共组件
├── manifest.json                       // uni-app项目类型及环境配置
├── pages.json                          // 项目路由及项目界面配置
├── README.md                           // 项目介绍文件
└── uni.scss                            // uni-app内置的常用样式变量
```

[根据这位大佬模板修改，保存起来自己用的方便](https://gitee.com/aimengmei/uniapp-template)

### End