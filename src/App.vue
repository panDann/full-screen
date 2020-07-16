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

import {
  resize, testPaths, paintText, calcLabelPosition,
  paintPolygon
} from './const'
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
    this.classObj = resize()

    window.addEventListener('resize', () => {
      this.classObj = resize()
    })
  },
  destroyed () {
    window.removeEventListener('resize')
  },
  methods: {
    init () {
      this.map = new window.AMap.Map('map', {
        // resizeEnable: true, // 是否监控地图容器尺寸变化
        // center: [110.88, 21.68],
        showLabel: false,
        center: [110.892384, 21.84279],
        zoom: 11,
        mapStyle: 'amap://styles/680b7e9dc654ed22c25c9a3788bfd3aa'
      })
      // this.map.on('click', this.zoomEnd)

      // this.paintPolygon()
      testPaths.forEach(el => {
        paintPolygon(el.path, this.map)
        paintText(el.name, calcLabelPosition(el.path), this.map)
      })
    },

    onChange () {

    },
    zoomEnd (e) {
      console.log(e)
    }

  }
}
</script>
<style lang="stylus">
@import './app';
.map
  height 100%

</style>
