
import Server from '@src/utils/fetch.js'

export const getLeftMenu = () => {
  return Server('index/leftMenu', null, { method: 'get' })
}

// ids = 1,2,3
export const getPoints = (ids) => {
  return Server(`index/itemsByIds?ids=${ids}`, null, { method: 'get' })
}

export const getAtmosphere = () => {
  return Server('https://tianqiapi.com/api?version=v6&appid=95783386&appsecret=dV10BSiY&cityid=101282002', null, { method: 'get' })
}
