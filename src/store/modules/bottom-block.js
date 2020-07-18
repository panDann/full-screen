
import { getMonitorInfo, getPeopleInfo, getGridMsg } from '@src/api/map.js'

export default {
  state: {
    baseInfo: {
      net: '111',
      name: '222',
      phone: '333'
    },
    firstBaseInfo: {
      avatar: '1111',
      name: '1111',
      gender: '1111',
      age: '1111',
      origin: '1111',
      academic: '1111',
      belong: '1111',
      phone: '1111',
      idCard: '1111',
      address: '1111',
      introduction: '1111'
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
    video: ''
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
      sta.events = payload
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
    async actVideo ({ commit }, { id }) {
      const res = await getMonitorInfo(id)
      console.log('监控', res)

      // commit('comVideo')
    }
  }
}
