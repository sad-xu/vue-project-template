import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control

import * as filters from './utils/filters' // global filters

Vue.use(Element, {
  size: 'medium'
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
console.log(process.env)
const isDebugMode = process.env.NODE_ENV !== 'production'
Vue.config.devtools = isDebugMode
Vue.config.silent = isDebugMode
Vue.config.productionTip = isDebugMode

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
