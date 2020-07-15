
<template>
    <div class="base-con white">
     <div class="margintb10">视频</div>
     <div class="content flex-row wrap justify-start">
        <video class="item" :src="item.url" v-for="item in list" :key="item.name">
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
    list: {
      type: Array,
      required: true,
      default: () => []
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
.item
  width:30%;
  height:85px;
  margin 10px
  margin-left 0
  background #999

</style>
