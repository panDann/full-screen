
<template>
<div class="container font14" >
    <div class="arrow" @click="isHide=!isHide">
      <i class="iconfont icon-jiantou" :class="isHide?'':'rotate-180'" />
    </div>
    <div class="con flex-row justify-around" :class="isHide?'con-hide':''">
    <FirstBaseInfo :baseInfo='firstBaseInfo'  class="flex4" />
    <div class="bar"></div>

    <!-- <div style=" align-self:flex-start"  class="flex3">
        <div class="flex-row white justify-between">
          <span>分析情况</span>
          <div class="flex-row justify-between">
            <div class="flex-row  tab-card-con justify-between">
              <div class="item" :class="currentActiveChartIndex===0&&'active'" @click="currentActiveChartIndex=0">趋势分析图</div>
              <div class="item" :class="currentActiveChartIndex===1&&'active'" @click="currentActiveChartIndex=1">结构分析图</div>
            </div>
            <div>
              时间
              <input type="date" class="select font12" />
            </div>
          </div>
        </div>
        <Chart :chartData='statisticData' width='500px' height='250px'/>
    </div> -->
    <BaseInfo :baseInfo='baseInfo'  class="flex3" />

    <div class="bar"></div>
    <Event :list='events' class="flex3" />
    <div class="bar"></div>
    <Video :list='video'  class="flex3" />
  </div>
</div>
</template>

<script>
import BaseInfo from './components/base-info'
import FirstBaseInfo from './components/first-base-info'
// import Chart from './components/chart'
import Video from './components/video'
import Event from './components/event'
import { mapState } from 'vuex'

export default {
  components: {
    BaseInfo,
    FirstBaseInfo,
    Video,
    Event
  },
  computed: {
    ...mapState([
      'firstBaseInfo',
      'baseInfo',
      // 'statisticData',
      'events',
      'video'
    ])
  },

  data () {
    return {
      isHide: false,
      currentActiveChartIndex: 0
    }
  }

}
</script>

<style lang='stylus' scoped>
@import './index.styl'
.tab-card-con
    display flex
    flex-flow: row nowrap
    justify-content: flex-start
    box-sizing: border-box
    padding: 0 1rem
    .item
        border-top: 1px solid $primaryColor
        border-bottom: 1px solid $primaryColor
        background: $secondBgColor
        padding: 5px  10px
        margin: 0
        cursor pointer
        font-size:12px;
        box-sizing: border-box
        font-weight:500;
        color:#4C88A7
    .item:first-child
        border-left: 1px solid $primaryColor
    .item:last-child
        border-right: 1px solid $primaryColor
    .active
        background: $primaryBgColor
        color:#fff
</style>
