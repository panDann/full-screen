
import { getLeftMenu } from '@src/api/left-block.js'

export default {
  state: {
    filterObj: {

    },
    filterIds: [],
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
      sta.filterObj = payload
    },
    comFilterIds (sta, { id, checked }) {
      const ids = sta.filterIds
      if (checked)ids.push(id)
      else ids.splice(ids.findIndex(el => el === id), 1)
      sta.filterIds = ids
    },

    comShowAtmosphere (sta, payload) {
      sta.showAtmosphere = payload
    },
    comShowAffair (sta, payload) {
      sta.showAffair = payload
    }
  },
  actions: {
    async actFilterObj ({ commit }) {
      const { data: { data = [] } } = await getLeftMenu()
      const tem = {}
      data.forEach(el => {
        tem[el.name] = el.children
      })
      console.log(111, tem)

      commit('comFilterObj', tem)
    },
    actShowAtmosphere ({ commit }) {
      commit('comsHowAtmosphere')
    },
    actShowAffair ({ commit }) {
      commit('comShowAffair')
    }
  }

}
