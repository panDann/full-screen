export const initZoom = 12
export const levelZoomMap = new Map([
  [1, 12],
  [2, 13],
  [3, 14],
  [4, 15],
  ['point', 15]
])

export const levelColorMap = new Map([
  [1, '#ffeb3b'],
  [2, 'green'],
  [3, 'pink'],
  [4, 'white']
])

// http://132.122.1.208:7000/swagger-ui.html
// admin  Eshore#ES_2020

export default {
  // apiPath: ''// dev
  apiPath: process.env.NODE_ENV === 'production' ? 'http://14.18.97.131:7000/' : 'http://132.122.1.208:7000/' // pro

}
