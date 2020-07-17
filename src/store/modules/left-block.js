
export default {
  state: {
    filterObj: {

    },
    showAtmosphere: false,
    atmosphereMsg: {
      time: '2019-02-04',
      day: '周一',
      lunar: '阴历',
      realDegree: '27',
      realState: '27',
      minDegree: '25',
      maxDegree: '28',
      wind: '阴历阴历阴历',
      state: '阴历阴历阴历',
      airQuality: '阴历'
    },
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
