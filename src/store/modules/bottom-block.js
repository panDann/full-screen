
export default {
  state: {
    baseInfo: {
      net: '111',
      name: '222',
      phone: '333'
    },
    statisticData: {
      xAxisData: [11, 33],
      yAxisData: [[10, 20], [20]]
    },
    events: [
      {
        name: '22222',
        time: '2019'
      }
    ],
    video: ''
  },
  mutations: {
    comBaseInfo (sta, payload) {
      sta.baseInfo = payload
    },
    comStatisticData (sta, payload) {
      sta.statisticData = payload
    },
    comEvents (sta, payload) {
      sta.events = payload
    },
    comVideo (sta, payload) {
      sta.events = payload
    }
  },

  actions: {
    actBaseInfo ({ commit }) {
      commit('comBaseInfo')
    },
    actStatisticData ({ commit }) {
      commit('comStatisticData')
    },
    actEvents ({ commit }) {
      commit('comEvents')
    },
    actVideo ({ commit }) {
      commit('comVideo')
    }
  }
}
