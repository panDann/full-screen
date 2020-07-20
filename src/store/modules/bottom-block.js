
import { getMonitorInfo, getPeopleInfo, getGridMsg } from '@src/api/map.js'

export default {
  state: {
    baseInfo: {
      net: '111',
      name: '222',
      phone: '333'
    },
    firstBaseInfo: {
    },
    // statisticData: {
    //   xAxisData: [11, 33],
    //   yAxisData: [[10, 20], [20]]
    // },
    events: [
      {
        name: '22222',
        time: '2019'
      }
    ],
    video: null
  },
  mutations: {
    comBaseInfo (sta, payload) {
      sta.baseInfo = payload
    },
    comFirstBaseInfo (sta, payload) {
      sta.firstBaseInfo = payload
    },
    comStatisticData (sta, payload) {
      sta.statisticData = payload
    },
    comEvents (sta, payload) {
      sta.events = payload
    },
    comVideo (sta, payload) {
      sta.video = payload
    }
  },

  actions: {
    async actBaseInfo ({ commit }, { id }) {
      const { data: { data } } = await getGridMsg(id)
      commit('comBaseInfo', data)
    },
    async actFirstBaseInfo ({ commit }, { id }) {
      const { data: { data } } = await getPeopleInfo(id)
      commit('comFirstBaseInfo', data)
    },
    actStatisticData ({ commit }) {
      commit('comStatisticData')
    },
    actEvents ({ commit }) {
      commit('comEvents')
    },
    async actVidoe ({ commit }, { id }) {
      const { data: { data } } = await getMonitorInfo(id)
      commit('comVideo', data)
      console.log('actVidoe', data)
    }
  }
}
