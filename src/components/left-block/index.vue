
<template>
  <div class="con" :class="isHide?'con-hide':''">
    <div class="arrow" @click="isHide=!isHide">
      <i class="iconfont icon-jiantou-copy" :class="isHide?'':'rotate-180'" />
    </div>
    <!-- <select class="icon-chengshi select">
      <option value>222</option>
      <option value>222</option>
      <option value>222</option>
    </select>-->
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
            <Three  v-if="currentLeftIndex===2" />
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
export default {
  components: {
    Tab,
    TabPane,
    Three
  },
  props: {
    // value: {
    //   type: String,
    //   required: true,
    //   default: ''
    // },
    // tabList: {
    //   type: Array,
    //   required: true,
    //   default: () => []
    // }
  },
  model: {
    prop: 'value',
    event: 'input'
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
