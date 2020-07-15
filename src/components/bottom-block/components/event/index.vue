
<template>
    <div class="base-con white">
     <div class="  margintb10">事件</div>
     <div class="content">
        <div class="margintb10 flex-row justify-between" v-for="item in list" :key="item.name">
            <div>{{item.name}}</div>
            <div>{{item.time}}</div>
        </div>
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
.content
  font-size:13px;
  font-weight:500;
  color:rgba(147,205,255,1);
  line-height:25px

</style>
