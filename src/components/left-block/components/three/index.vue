
<template>
    <Tab v-model="currentName" :tab-list="subTabList">
      <TabPane name="three">
          <div class="flex-row bottom-line paddingtb10 justify-between">
              <span class="warning-title">气象信息</span>
              <i class="iconfont font32 paddinglr1rem second-color icon-tianqi" />
          </div>
          <div class="flex-row bottom-line paddingtb10 justify-between">
              <span class="warning-title">会务研判</span>
              <i class="iconfont font32 paddinglr1rem second-color icon-huiwulaqu_huaban" />
          </div>
          <div class="paddingtb10 ">
              <span class="warning-title">雪亮应用</span>
              <div class="flex-row font14 color-739DFF  justify-around">
                  <div>
                      <p> <CheckBox @change="(value)=>onChange({type:value})" label='水纹监测' /></p>
                      <p> <CheckBox @change="(value)=>onChange({type:value})" label='地质灾害隐患点' /></p>

                  </div>
                  <div>
                      <p> <CheckBox @change="(value)=>onChange({type:value})" label='低洼户' /></p>
                      <p> <CheckBox @change="(value)=>onChange({type:value})" label='转移安置点' /></p>

                  </div>
              </div>
          </div>

      </TabPane>
        <TabPane name="function">

      </TabPane>
        <TabPane name="function">

      </TabPane>
    </Tab>
</template>

<script>
import Tab from '@src/components/tab/index.vue'
import CheckBox from '@src/components/checkbox'

import TabPane from '@src/components/tab-pane/index.vue'
import { subTabList } from './const'

export default {
  components: {
    Tab,
    CheckBox,
    TabPane
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
      currentName: 'three',
      currentLeftIndex: 0,
      subTabList
    }
  },

  methods: {
    onChange (obj) {
      this.$emit('change', obj)
    }
  }
  // render(h){
  //     return
  // }
}
</script>

<style lang='stylus' scoped>
// @import './index.styl';
.color-739DFF
   color #739DFF
</style>
