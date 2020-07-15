
<template>
    <div class="base-con" id="chart" :style="{height,width}">

    </div>
</template>

<script>

import { createOption } from './const'
import Echarts from 'echarts'
export default {
  props: {
    height: {
      type: String,
      default: '300px'
    },
    width: {
      type: String,
      default: '100%'
    },
    chartData: {
      type: Object,
      required: true,
      default: () => ({
        xAxisData: [],
        yAxisData: [[], []]
      })
    }
  },
  // data(){
  //   return {}
  // }
  mounted () {
    var ini = Echarts.init(document.getElementById('chart'))
    ini.setOption(createOption(this.chartData))
  }

  // render(h){
  //     return
  // }
}
</script>

<style lang='stylus' scoped>
// @import './index.styl';
.base-con
  align-self flex-start
  // text-align left
.content
  font-size:13px;
  font-weight:500;
  color:rgba(147,205,255,1);
  line-height:25px

</style>
