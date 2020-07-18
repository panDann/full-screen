
import Server from '@src/utils/fetch.js'

// 查询网格地图经纬度(父id空时，查询一级网格)
export const getNetworkPosition = (pid = '') => {
  return Server(`index/gridMap?pid=${pid}`, null, { method: 'get' })
}

// 查询网格地图信息
export const getGridMsg = (gridId) => {
  return Server(`index/gridInfo?gridId=${gridId}`, null, { method: 'get' })
}

// 根据id查询监控信息
export const getMonitorInfo = (id) => {
  return Server(`index/monitorInfo/${id}`, null, { method: 'get' })
}

// 根据id人员信息
export const getPeopleInfo = (id) => {
  return Server(`index/peopleInfo/${id}`, null, { method: 'get' })
}

// 查询网格领导班子列表
export const getGridPartyLeader = (gridId = '') => {
  return Server(`index/gridPartyLeader?gridId=${gridId}`, null, { method: 'get' })
}

// 查询网格党员列表
export const getGridPartyMember = (gridId = '') => {
  return Server(`index/gridPartyLeader?gridId=${gridId}`, null, { method: 'get' })
}
