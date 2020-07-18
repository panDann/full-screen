
import Server from '@src/utils/fetch.js'

export const getLeftMenu = () => {
  return Server('index/leftMenu', null, { method: 'get' })
}

// ids = 1,2,3
export const getPoints = (ids) => {
  return Server(`index/itemsByIds?ids=${ids}`, null, { method: 'get' })
}
