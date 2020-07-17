
export default {
  state: {
    filterObj: {

    },
    showAtmosphere: false,
    showAffair: false
  },
  mutations: {
    comFilterObj (sta, payload) {
      sta.filterObj = { ...sta.filterObj, ...payload }
    },
    comShowAtmosphere (sta, payload) {
      sta.showAtmosphere = payload
    },
    comShowAffair (sta, payload) {
      sta.showAffair = payload
    }
  },
  actions: {
    actFilterObj ({ commit }) {
      commit('comFilterObj')
    },
    actShowAtmosphere ({ commit }) {
      commit('comsHowAtmosphere')
    },
    actShowAffair ({ commit }) {
      commit('comShowAffair')
    }
  }

}
