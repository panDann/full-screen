<template>
  <div id="app" ref="app" :style="classObj">
    <div class="loading" v-show="loading"></div>
    <img :src="headerPng" alt class="header-img" />
    <div id="map" class="map"></div>
    <LeftBlock />
    <BottomBlock />
    <Seletor class="selector" @change="onChange" />
  </div>
</template>
<script>
import headerPng from '@src/assets/logo.png'
import LeftBlock from '@src/components/left-block/index.vue'
import BottomBlock from '@src/components/bottom-block/index.vue'
import Seletor from '@src/components/selector/index.vue'
import { mapState, mapActions } from 'vuex'

import {
  resize,
  paintText,
  calcLabelPosition,
  paintPolygon,
  paintPoint
} from './const'
export default {
  components: {
    LeftBlock,
    BottomBlock,
    Seletor
  },
  computed: {
    ...mapState([
      'zoom',
      'points',
      'loading',
      'firstNetworkData',
      'secondNetworkData',
      'thirdNetworkData',
      'forthNetworkData'
    ])
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
  created () {},
  mounted () {
    this.init()
    this.classObj = resize()
    window.addEventListener('resize', () => {
      this.classObj = resize()
    })
    const _this = this
    window.addEventListener('click_point', function (event) {
      _this.map.setZoom(14)
      const { lng, lat } = event.msg
      _this.map.setCenter([lng, lat])
      _this.map.setZoom(13)
    })
  },
  destroyed () {
    window.removeEventListener('resize')
    window.removeEventListener('click_point')
  },
  methods: {
    init () {
      this.map = new window.AMap.Map('map', {
        showLabel: false,
        center: [110.892384, 21.84279],
        zoom: 11,
        mapStyle: 'amap://styles/680b7e9dc654ed22c25c9a3788bfd3aa'
      })
      // this.map.on('click', this.zoomEnd)

      this.firstNetworkData.forEach(el => {
        paintPolygon(el.path, this.map)
        paintText({ text: el.name, position: calcLabelPosition(el.path) }, this.map)
      })
      this.points.forEach(el => {
        paintPoint(el, this.map)
      })
    },
    ...mapActions([
      'actFirstNetworkData',
      'actSecondNetworkData',
      'actThirdNetworkData',
      'actForthNetworkData'
    ]),
    onChange () {},
    zoomEnd (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="stylus">
@import './app';

.map {
  height: 100%;
}
</style>
