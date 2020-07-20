
import { getLeftMenu, getAtmosphere } from '@src/api/left-block.js'

export default {
  state: {
    filterObj: {

    },
    filterIds: [],
    showAtmosphere: false,
    atmosphereMsg: {
      date: '2020-07-20',
      week: '星期一',
      update_time: '2020-07-20 06:41:43',
      city: '高州',
      cityEn: 'gaozhou',
      country: '中国',
      countryEn: 'China',
      wea: '阴',
      wea_img: 'yin',
      tem: '27',
      tem1: '33',
      tem2: '25',
      win: '东南风 ',
      win_speed: '2级',
      win_meter: '小于12km/h',
      humidity: '89%',
      visibility: '暂缺',
      pressure: '999',
      air: '12',
      air_pm25: '12',
      air_level: '优',
      air_tips: '空气很好，可以外出活动，呼吸新鲜空气，拥抱大自然！'
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
    async actShowAtmosphere ({ commit }) {
      const { data } = await getAtmosphere()
      console.log(333, data)

      commit('comsHowAtmosphere')
    },
    actShowAffair ({ commit }) {
      commit('comShowAffair')
    }
  }

}
