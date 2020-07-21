<template>
  <div id="app" ref="app" :style="classObj">
    <img :src="headerPng" alt class="header-img" />
    <div id="map" class="map"></div>
    <LeftBlock />
    <BottomBlock />
    <Seletor class="selector"  @click.native="login" />
    <!-- <Seletor class="selector" @change="onChange" /> -->
  </div>
</template>
<script>
import headerPng from '@src/assets/logo.png'
import LeftBlock from '@src/components/left-block/index.vue'
import BottomBlock from '@src/components/bottom-block/index.vue'
import Seletor from '@src/components/selector/index.vue'
import { mapState, mapActions } from 'vuex'
import { login } from '@src/api/left-block.js'
import {
  resize

} from './const'

import {
  levelZoomMap, initZoom
} from './config'
export default {
  components: {
    LeftBlock,
    BottomBlock,
    Seletor
  },
  computed: {
    ...mapState([
      'zoom',
      'map',
      'points'
    ])
  },
  data () {
    return {
      headerPng,
      classObj: {
        transform: 'scale(1)'
      }
    }
  },

  mounted () {
    this.init()
    this.classObj = resize()
    window.addEventListener('resize', () => {
      this.classObj = resize()
    })
    const _this = this
    window.addEventListener('click_point', function (event) {
      const { lng, lat, pointtype, id, zoomtype } = event.msg
      // 基本信息
      _this.$store.dispatch('actFirstBaseInfo', { id })

      switch (pointtype) {
        case '1': _this.$store.commit('comVideo', null)
          break
        case '2': _this.$store.dispatch('actVidoe', { id })
          break
          // 子网格坐标点
        case 'networkPoint': _this.$store.dispatch('actNetworkData', { id })
          break
        default:break
      }
      // 网格信息
      _this.$store.dispatch('actBaseInfo', { id })
      _this.map.setCenter([lng, lat])
      _this.map.setZoom(levelZoomMap.get(zoomtype))
    })
  },
  methods: {
    ...mapActions([
      'actNetworkData'
    ]),
    init () {
      const map = new window.AMap.Map('map', {
        showLabel: false,
        center: [110.907907, 21.939376],
        zoom: initZoom,
        mapStyle: 'amap://styles/680b7e9dc654ed22c25c9a3788bfd3aa'
        // mapStyle: 'amap://styles/680b7e9dc654ed22c25c9a3788bfd3aa'
      })
      map.on('zoomend', this.zoomEnd)
      this.$store.commit('comMap', map)
      this.actNetworkData()
    },

    // onChange () {},
    zoomEnd (e) {
      console.log(this.map.getZoom())
    },
    async login () {
      const res = await login()
      console.log(res)
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
