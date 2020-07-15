<template>
  <div id="app" ref="app" :style="classObj">
    <img :src="headerPng" alt="" class="header-img">
    <div id="map" class="map"></div>

  <LeftBlock />
  <BottomBlock />
  <Seletor class="selector" @change="onChange"  />
  </div>
</template>
<script>
import headerPng from '@src/assets/logo.png'
import LeftBlock from '@src/components/left-block/index.vue'
import BottomBlock from '@src/components/bottom-block/index.vue'
import Seletor from '@src/components/selector/index.vue'

const MAX_WIDTH = 1920
export default {
  components: {
    LeftBlock,
    BottomBlock,
    Seletor
  },
  data () {
    return {
      headerPng,
      classObj: {
        transform: 'scale(1)'
      },
      map: null
    }
  },
  created () {
  },
  mounted () {
    this.init()
    this.resizeView()
    window.addEventListener('resize', this.resizeView)
  },

  destroyed () {
    window.removeEventListener('resize', this.resizeView)
  },
  methods: {
    init () {
      this.map = new window.AMap.Map('map', {
        resizeEnable: true, // 是否监控地图容器尺寸变化
        center: [110.88, 21.68],
        mapStyle: 'amap://styles/680b7e9dc654ed22c25c9a3788bfd3aa'
      })
    },
    resizeView () {
      const bodyWidth = document.documentElement.clientWidth
      const bodyHeight = document.documentElement.clientHeight
      const scaleRate = bodyWidth / MAX_WIDTH
      const scaleRateH = (bodyHeight + 15) / 1080
      this.classObj = {
        transform: `scaleX(${scaleRate}) scaleY(${scaleRateH})`
        // transform: `scaleX(${scaleRate})`
      }
      document.body.style.height = bodyHeight + 'px'
    },
    onChange () {

    }
  }
}
</script>
<style lang="stylus">
@import './app';
.map
  height 100%

</style>
