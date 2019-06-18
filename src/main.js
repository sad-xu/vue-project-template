import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/store.js'

import './styles/index.scss'
import * as filters from './utils/filter.js'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
