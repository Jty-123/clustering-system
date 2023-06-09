import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutation.js'
import state from './state.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
