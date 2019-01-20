import Vue from 'vue'
import Vuex from 'vuex'
import data_mining from './modules/data_mining'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    data_mining
  },
  getters
})

export default store
