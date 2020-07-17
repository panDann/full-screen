<template>
  <div id="app" ref="app" :style="classObj">
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
  paintPolygon
} from './const'
export default {
  components: {
    LeftBlock,
    BottomBlock,
    Seletor
  },
  computed: {
    ...mapState([
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
    window.addEventListener('click_point', function (event) {
      console.log('得到标题为：', event.msg)
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
        paintText(el.name, calcLabelPosition(el.path), this.map)
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
