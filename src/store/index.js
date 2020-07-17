import Vue from 'vue'
import Vuex from 'vuex'
import BottomModule from './modules/bottom-block'
import LeftModule from './modules/left-block'
import MapModule from './modules/map'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...BottomModule.state,
    ...LeftModule.state,
    ...MapModule.state
  },
  mutations: {
    ...BottomModule.mutations,
    ...LeftModule.mutations,
    ...MapModule.mutations
  },
  actions: {
    ...BottomModule.actions,
    ...LeftModule.actions,
    ...MapModule.actions
  }
  // modules: {
  // }
})
