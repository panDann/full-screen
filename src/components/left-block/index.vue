
<template>
  <div class="con" :class="isHide?'con-hide':''">
    <div class="arrow" @click="isHide=!isHide">
      <i class="iconfont icon-jiantou-copy" :class="isHide?'':'rotate-180'" />
    </div>
    <Atmosphere :atmosphereMsg='atmosphereMsg'  v-show="showAtmosphere"  />

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
          <div class="right-content flex4" v-if="Object.keys(filterObj).length">
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
import Atmosphere from './components/atmosphere'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  components: {
    Tab,
    TabPane,
    Three,
    Security,
    Petition,
    Atmosphere,
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
    this.actShowAtmosphere()
    this.actFilterObj()
  },
  methods: {
    transferTab (key) {
      this.currentName = key
      this.$emit('input', key)
    },
    ...mapMutations(['comFilterIds', 'comShowAtmosphere']),
    ...mapActions(['actPoints', 'actFilterObj', 'actShowAtmosphere']),
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
