
const MAX_WIDTH = 1920

export const resize = () => {
  const bodyWidth = document.documentElement.clientWidth
  const bodyHeight = document.documentElement.clientHeight
  const scaleRate = bodyWidth / MAX_WIDTH
  const scaleRateH = 1 || (bodyHeight + 15) / 1080
  document.body.style.height = bodyHeight + 'px'
  return {
    transform: `scaleX(${scaleRate}) scaleY(${scaleRateH})`
    // transform: `scaleX(${scaleRate})`
  }
}

export const testPaths = [

]

export function paintPolygon (path, map) {
  // var path = [
  //   [111.057385, 21.914163], [111.064284, 21.914699], [111.071183, 21.916845], [111.076357, 21.918991], [111.08728, 21.914699], [111.093029, 21.918454], [111.097054, 21.922746], [111.097629, 21.930793], [111.099353, 21.93133], [111.102228, 21.925965], [111.104528, 21.92972], [111.104528, 21.934548], [111.099353, 21.938303], [111.097054, 21.941521], [111.097629, 21.949567], [111.093029, 21.969948], [111.080381, 21.971557], [111.071757, 21.972093], [111.061984, 21.968875], [111.056235, 21.967266], [111.049336, 21.975311], [111.048761, 21.966194], [111.050486, 21.955467], [111.046461, 21.952785], [111.038987, 21.958149], [111.033238, 21.959758], [111.031513, 21.956004], [111.032663, 21.947422], [111.025764, 21.94474], [111.021165, 21.943131], [111.011966, 21.939376], [111.009667, 21.926502], [111.003343, 21.917918], [111.007367, 21.915236], [111.015991, 21.916308], [111.023465, 21.923283], [111.030938, 21.932402], [111.036113, 21.935621], [111.031513, 21.927038], [111.037263, 21.928111], [111.047036, 21.929184], [111.056235, 21.923283], [111.059684, 21.924356], [111.058534, 21.915772]
  // ]
  var polygon = new window.AMap.Polygon({
    path,
    map,
    strokeColor: '#ffeb3b',
    strokeWeight: 2,
    strokeOpacity: 0.9,
    fillOpacity: 0,
    fillColor: '#1791fc',
    zIndex: 50
    // draggable: true
  })
  polygon.on('click', null)
}
var myEvent = new CustomEvent('click_point', {
  detail: null
})
window.togglePoint = (_this) => {
  myEvent.msg = _this.dataset
  console.log(myEvent)

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
    if (temLat > maxLat) {
      maxLat = temLat
    }
    if (temLat < minLat) { minLat = temLat }
    if (temLng > maxLng) { maxLng = temLng }
    if (temLng < minLng) { minLng = temLng }
  })

  return [(minLng + maxLng) / 2, (minLat +
        maxLat) / 2]
}
export const paintText = (text, position, map) => {
  var marker = new window.AMap.Marker({
    position,
    // 将 html 传给 content
    content: `<div class="country-label font20" onclick='togglePoint(this)' data-id='${11}'>${text}</div>`,
    // 以 icon 的 [center bottom] 为原点
    offset: new window.AMap.Pixel(-13, -30)
  })
  marker.setMap(map)
}
