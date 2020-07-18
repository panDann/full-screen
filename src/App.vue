<template>
  <div id="app" ref="app" :style="classObj">
    <div class="loading" v-show="loading"></div>
    <img :src="headerPng" alt class="header-img" />
    <div id="map" class="map"></div>
    <LeftBlock />
    <BottomBlock />
    <Seletor class="selector"  />
    <!-- <Seletor class="selector" @change="onChange" /> -->
  </div>
</template>
<script>
import headerPng from '@src/assets/logo.png'
import LeftBlock from '@src/components/left-block/index.vue'
import BottomBlock from '@src/components/bottom-block/index.vue'
import Seletor from '@src/components/selector/index.vue'
import { mapState, mapActions } from 'vuex'

import {
  resize
} from './const'

import {
  levelZoomMap
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
      }
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
    const _this = this
    window.addEventListener('click_point', function (event) {
      const { lng, lat, type, id } = event.msg
      // _this.$store.dispatch('actFirstNetworkData', { id })
      // _this.$store.dispatch('actVideo', { id })
      _this.$store.dispatch('actFirstBaseInfo', { id })
      _this.$store.dispatch('actBaseInfo', { id })
      _this.map.setCenter([lng, lat])
      _this.map.setZoom(levelZoomMap.get(type))
    })
  },
  destroyed () {
    window.removeEventListener('resize')
    window.removeEventListener('click_point')
  },
  methods: {
    ...mapActions([
      'actFirstNetworkData'
    ]),
    init () {
      const map = new window.AMap.Map('map', {
        showLabel: false,
        center: [110.892384, 21.84279],
        zoom: 11,
        mapStyle: 'amap://styles/680b7e9dc654ed22c25c9a3788bfd3aa'
      })
      map.on('zoomend', this.zoomEnd)
      this.$store.commit('comMap', map)
      this.actFirstNetworkData()
    },

    // onChange () {},
    zoomEnd (e) {
      console.log(this.map.getZoom())
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
