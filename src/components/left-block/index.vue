
<template>
  <div class="con" :class="isHide?'con-hide':''">
    <div class="arrow" @click="isHide=!isHide">
      <i class="iconfont icon-jiantou-copy" :class="isHide?'':'rotate-180'" />
    </div>
    <div class="atmosphere font14 white" v-show="showAtmosphere">
      <div class="top">
        <span>{{atmosphereMsg.time}}</span>
        <span class="day">{{atmosphereMsg.day}}</span>
        <span>{{atmosphereMsg.lunar}}</span>
          </div>
      <div class="flex-row middle">
        <i class="icon-tianqi1 iconfont font32" />
        <div class="bar"></div>
        <div class="flex-row">
          <span class="font32 real-degree">{{atmosphereMsg.realDegree}}</span>
          <div class="font14">
            <div>&#8451;</div>
            <div>{{atmosphereMsg.realState}}(实时)</div>
          </div>
        </div>
      </div>
      <div class="range">{{atmosphereMsg.minDegree}}~{{atmosphereMsg.maxDegree}}&#8451;</div>
      <div class="bottom">{{atmosphereMsg.state}} | {{atmosphereMsg.wind}} {{atmosphereMsg.airQuality}}</div>
    </div>
    <Tab v-model="currentName" :tab-list="tabList">
      <TabPane name="function">
        <div class="flex-row justify-start">
          <div class="left-menu primary-padding flex1">
            <div
              v-for="(item,index) in leftMenu"
              :key="item.name"
              class="item"
              :class="currentLeftIndex ===index?'item-active':''"
              @click="currentLeftIndex = index"
            >
              <i class="iconfont" :class="item.icon" />
              <div>{{item.name}}</div>
            </div>
          </div>
          <div class="right-content flex4">
            <Security  class="primary-padding" :list="filterObj['社会治安']" @change="onChange" v-if="currentLeftIndex===0" />
            <Petition  class="primary-padding" :list="filterObj['信访保障']" @change="onChange" v-if="currentLeftIndex===1" />
            <Three  class="primary-padding" :list="filterObj['防灾减灾']" @change="onChange" v-if="currentLeftIndex===2" />
            <Solid  class="primary-padding" :list="filterObj['惠民服务']" @change="onChange" v-if="currentLeftIndex===3" />
          </div>
        </div>
      </TabPane>
    </Tab>
  </div>
</template>

<script>
// import  from '@src/assets/atmosphere.png'
import Tab from '@src/components/tab/index.vue'
import TabPane from '@src/components/tab-pane/index.vue'
import { tabList, leftMenu } from './const'
import Three from './components/three'
import Security from './components/security'
import Petition from './components/petition'
import Solid from './components/solid'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  components: {
    Tab,
    TabPane,
    Three,
    Security,
    Petition,
    Solid
  },
  computed: {
    ...mapState(['atmosphereMsg', 'filterObj', 'showAtmosphere'])
  },
  data () {
    return {
      isHide: false,
      currentName: 'function',
      currentLeftIndex: 2,
      tabList,
      leftMenu
    }
  },
  created () {
    this.actFilterObj()
  },
  methods: {
    transferTab (key) {
      this.currentName = key
      this.$emit('input', key)
    },
    ...mapMutations(['comFilterIds']),
    ...mapActions(['actPoints', 'actFilterObj']),
    onChange (currentObj) {
      this.comFilterIds(currentObj)
      this.actPoints()
    }
  }
  // render(h){
  //     return
  // }
}
</script>

<style lang='stylus' scoped>
@import './index.styl';
</style>
