# vue-project-template

## 环境

node v8.11.0+

推荐安装 [nvm-windows](./docs/nvm.md) 

`npm install --registry=https://registry.npm.taobao.org`


## 项目文件结构


```sh
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        
│   ├── api                    # 请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 公用组件
│   ├── icons                  # svg图标
│   ├── layout                 # layout
│   ├── router                 # 路由
│   ├── store                  # 全局状态管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法,请求封装,过滤器 
│   ├── views                  # 页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 项目如露
│   └── permission.js          # 权限管理 
├── tests                      # 测试
├── .editorconfig              # 不同编辑器编码一致
├── .env.***                   # 环境变量配置
├── .babel.config.js           # babel配置
├── package-lock.json          # 测试
├── package.json               # 项目依赖,命令,eslint,jest,postcss等配置
└── vue.config.js              # vue-cli 配置
```


```sh
├── build                      # webpack配置 
├── config                     # 环境变量配置 
├── src                        
│   ├── api                    # 请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 公用组件
│   ├── icons                  # svg图标
│   ├── router                 # 路由
│   ├── store                  # 全局状态管理
│   ├── style                  # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # 页面 layout
│   ├── App.vue                # 入口页面
│   ├── main.js                # 项目如露
│   └── permission.js          # 权限管理
├── static                     # 静态资源img,js,json
├── test                       # 测试
├── .babel                     # babel配置
├── .editorconfig              # 不同编辑器编码一致
├── .eslintignore              # 忽略lint指定文件
├── .eslintrc.js               # eslint配置
├── .postcss.js                # postcss配置
├── index.html                 # 根入口
├── .editorconfig              # 不同编辑器编码一致
├── package-lock.json          # 测试
└── package.json               # 项目依赖,命令,eslint,jest等配置
```

## 当前项目两大问题

1. 前端工程化程度不够
    * [代码规范](./docs/code-spec.md)
    * [模块管理规范](./docs/module-spec.md)
    * [分支管理规范](./docs/commit-spec.md)
    * 接口规范
    * [视觉图标规范](./docs/style-spec.md)
    * review规范
        ++ 自测: 是否实现需求,写实现方法/流程图
        ++ review：根据文档测评代码 实现逻辑+代码质量
    * 自动化构建、部署、测试

2. 新老代码差异大
    * 随需求逐步替换



## 插件

* Babel
* Router
* Vuex
* CSS Pre-processors
    node-sass
* Linter/Formatter 
    standard config + eslint-plugin-vue
* Unit Testing
    jest

