
<template>
  <div class="con" :class="isHide?'con-hide':''">
    <div class="arrow" @click="isHide=!isHide">
      <i class="iconfont icon-jiantou-copy" :class="isHide?'':'rotate-180'" />
    </div>
    <Tab v-model="currentName" :tab-list="tabList">
      <TabPane name="function">
        <div class="flex-row justify-start">
          <div class="left-menu flex1">
              <div v-for="(item,index) in leftMenu"
               :key="item.name" class="item"
               :class="currentLeftIndex ===index?'item-active':''"
               @click="currentLeftIndex = index"
               >
             <i class="iconfont " :class="item.icon" />
              <div>{{item.name}}</div>
              </div>
          </div>
          <div class="right-content flex4">
            <Security  @change='onChange' v-if="currentLeftIndex===0" />
            <Petition  @change='onChange' v-if="currentLeftIndex===1" />
            <Three  @change='onChange' v-if="currentLeftIndex===2" />
            <Solid  @change='onChange' v-if="currentLeftIndex===3" />
          </div>
        </div>
      </TabPane>
    </Tab>
  </div>
</template>

<script>
import Tab from '@src/components/tab/index.vue'
import TabPane from '@src/components/tab-pane/index.vue'
import { tabList, leftMenu } from './const'
import Three from './components/three'
import Security from './components/security'
import Petition from './components/petition'
import Solid from './components/solid'
import { mapActions } from 'vuex'
export default {
  components: {
    Tab,
    TabPane,
    Three,
    Security,
    Petition,
    Solid
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

  methods: {
    transferTab (key) {
      this.currentName = key
      this.$emit('input', key)
    },
    // ...mapMutations(['comFilterObj']),
    ...mapActions(['actPoints']),
    onChange (currentObj) {
      console.log(111, currentObj)
      this.$store.commit('comFilterObj', currentObj)
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
