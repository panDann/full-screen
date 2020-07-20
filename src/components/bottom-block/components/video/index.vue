
<template>
    <div class="base-con white">
     <div class="margintb10">监控信息</div>
     <div class="content">
        <div>
            <p ><span class="width-ch20">名称：</span> {{videoMsg.name}} </p>
            <p><span class="width-ch20">负责人：</span>{{videoMsg.gridPeopleName}}</p>
            <!-- <p><span class="width-ch20">简介：</span>{{videoMsg.basicInfo}}</p> -->
        </div>
        <video class="item" >
        <!-- <video class="item" :src="videoMsg.url" v-if="videoMsg.url" > -->
        </video>
     </div>
    </div>
</template>

<script>
export default {
  props: {
    // value: {
    //   type: String,
    //   required: true,
    //   default: ''
    // },
    videoMsg: {
      type: String,
      default: '111'
    }
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
    color:rgba(147,205,255,1);
.item
  // width:30%;
  // height:85px;
  width:100%;
  height:153px;
  margin 10px
  margin-left 0
  background #999
.width-ch20
  display inline-block
  width 7ch
</style>
