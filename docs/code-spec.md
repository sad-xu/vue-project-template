
# 前端代码规范

## js

> [https://standardjs.com/readme-zhcn.html](https://standardjs.com/readme-zhcn.html)

* 缩进2个空格

* js中优先使用单引号`''`,模板中优先使用双引号`""`

* 不加分号`;`

* 关键字后加空格 `if () { ... }`

* 用`===`

* 变量,函数名统一camelCase

* 常量用`const`声明,且全大写

* 禁止扩展原生对象

* 函数声明时,括号与函数名不加空格

* 尽量使用ES6+的写法


## Vue 

> [https://eslint.vuejs.org/rules/](https://eslint.vuejs.org/rules/)

* props必须指定类型和默认值

* v-for必须加key

* v-if和v-for不能同时加在一个元素上

* 组件内scss全部加上scope

* 文件夹/文件名始终是kebab-case.vue ?

* 引入组件

```js
import MyComponent from './my-component.vue'
const MyComponent = resolve => require(['./my-component.vue'], resolve)
```

* 使用组件

```html
<!-- 模板中统一kebab-case,其他统一camelCase -->
<my-component :prop-data="propData" @my-event="myEvent"></my-component>
```

* 模板中只会出现简单的表达式,复杂计算移到外面去

* 组件选项顺序
    - name
    - components
    - filters
    - props
    - data
    - computed
    - watch
    - beforeCreate
    - created
    - beforeMount
    - mounted
    - beforeUpdate
    - updated
    - activated
    - deactivated
    - beforeDestroy
    - destroyed
    - methods

* 元素特性顺序
    - is
    - v-for
    - v-if
    - v-else
    - id
    - ref
    - key
    - slot
    - v-model
    - 其他属性 v-bind/: class/type/自定义属性
    - v-on/@
    - v-html/v-text

* 在scope中尽量不用元素选择器,class优先使用

* 单行属性最多4个,多行属性每行最多3个
