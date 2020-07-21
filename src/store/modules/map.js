
import { getNetworkPosition } from '@src/api/map.js'

import { getPoints } from '@src/api/left-block.js'

import {

  paintText,
  calcLabelPosition,
  paintPolygon,
  paintPoint
} from '@src/const'

export default {
  state: {
    // zoom: 11,
    map: null,
    points: [
    ]
    // firstNetworkData: [

    // ],
    // secondNetworkData: [],
    // thirdNetworkData: [],
    // forthNetworkData: []
  },
  mutations: {

    comMap (sta, payload) {
      sta.map = payload
    },

    comPoints (sta, payload) {
      sta.points = payload
    }
    // comFirstNetworkData (sta, payload) {
    //   sta.firstNetworkData = payload
    // },
    // comSecondNetworkData (sta, payload) {
    //   sta.secondNetworkData = payload
    // },
    // comThirdNetworkData (sta, payload) {
    //   sta.thirdNetworkData = payload
    // },
    // comForthNetworkData (sta, payload) {
    //   sta.forthNetworkData = payload
    // }
  },
  actions: {
    async actPoints ({ commit, state: { filterIds, map, points } }) {
      map.remove(points)
      const { data: { data = [] } } = await getPoints(filterIds.join(','))
      const cachePoints = data.map(el => {
        return paintPoint({ ...el, lng: el.longitude, lat: el.latitude }, map)
      })
      commit('comPoints', cachePoints)
    },
    async actNetworkData ({ state: { map } }, obj) {
      const { data: { data = [] } } = await getNetworkPosition(obj ? obj.id : '')
      const temPath = []
      data.forEach(({ id, name, locStr }) => {
        let locStrArr = []
        locStrArr = locStr.replace(/\],/g, ']$').split('$')
        temPath.push({
          id,
          name,
          path: locStrArr.map(item => {
            const [lng, lat] = item.replace(/(\[|\])/g, '').split(',')
            return [+lng, +lat]
          })
        })
      })
      // const { state: { map } } = obj
      temPath.forEach(el => {
        paintPolygon(el.path, map)
        paintText({ name: el.name, id: el.id, position: calcLabelPosition(el.path) }, map)
      })
    }
    // actSecondNetworkData ({ commit }) {
    //   commit('comSecondNetworkData')
    // },
    // actThirdNetworkData ({ commit }) {
    //   commit('comThirdNetworkData')
    // },
    // actForthNetworkData ({ commit }) {
    //   commit('comForthNetworkData')
    // }
  }
}
