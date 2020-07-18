
const MAX_WIDTH = 1920

export const resize = () => {
  const bodyWidth = document.documentElement.clientWidth
  const bodyHeight = document.documentElement.clientHeight
  const scaleRate = bodyWidth / MAX_WIDTH
  const scaleRateH = (bodyHeight + 15) / 1080
  document.body.style.height = bodyHeight + 'px'
  return {
    transform: `scaleX(${scaleRate}) scaleY(${scaleRateH})`
  }
}

export function paintPolygon (path, map) {
  var polygon = new window.AMap.Polygon({
    path,
    strokeColor: '#ffeb3b',
    strokeWeight: 2,
    strokeOpacity: 0.9,
    fillOpacity: 0,
    fillColor: '#1791fc',
    zIndex: 50
    // draggable: true
  })
  polygon.setMap(map)
}
var myEvent = new CustomEvent('click_point', {
  detail: null
})
window.togglePoint = (_this) => {
  myEvent.msg = _this.dataset
  if (window.dispatchEvent) {
    window.dispatchEvent(myEvent)
  } else {
    window.fireEvent(myEvent)
  }
}

export function calcLabelPosition (pathSet) {
  let minLng = 180
  let maxLng = 0
  let minLat = 90
  let maxLat = 0
  let temLat = 0
  let temLng = 0
  pathSet.forEach((element) => {
    temLat = element.lat
    temLng = element.lng
    if (temLat > maxLat) { maxLat = temLat }
    if (temLat < minLat) { minLat = temLat }
    if (temLng > maxLng) { maxLng = temLng }
    if (temLng < minLng) { minLng = temLng }
  })

  return [(minLng + maxLng) / 2, (minLat +
    maxLat) / 2]
}
export const paintText = ({ name, position, id, pointType = 'first' }, map) => {
  const [lng, lat] = position
  var marker = new window.AMap.Marker({
    position,
    // 将 html 传给 content
    content: `<div class="${pointType}-label font20" data-lng='${lng}' data-type='${pointType}' data-lat='${lat}'  onclick='togglePoint(this)' data-id='${id}'>${name}</div>`,
    // 以 icon 的 [center bottom] 为原点
    offset: new window.AMap.Pixel(-13, -30)
  })
  marker.setMap(map)
}

export const paintPoint = ({ name = '', headpic = '', sexName = '', age = '', nation = '', lng, lat, pointType = 'point', id }, map) => {
  var marker = new window.AMap.Marker({
    position: [lng, lat],
    // 将 html 传给 content
    content: `<div class="point-con white">
    <div class="point-content point-show flex-row justify-between font14 primary-padding shadow">
    <img src="${headpic}" alt="" class='point-avatar'> 
    <div>
      <div class=" font14"><span class="font20">${name}</span> ${sexName} | ${age} | ${nation}</div>
      <div >经度：${lng}</div>
      <div >纬度：${lat}</div>
    </div>
     
    </div>
    <div class="${'icon-shequjiaozhengrenyuan'} point-con iconfont font32" data-lng='${lng}' data-lat='${lat}'  onclick='togglePoint(this)' data-id='${id}' data-type='point' /> 
    </div>`,
    // 以 icon 的 [center bottom] 为原点
    offset: new window.AMap.Pixel(-13, -30)
  })
  marker.setMap(map)
}
