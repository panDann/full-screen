
<template>
    <div class="base-con">
     <div class=" white margintb10">基本信息</div>
     <div class="content flex-row justify-start">
        <img :src="baseInfo.avatar" class="avatar" alt="">
        <div class=" info-con">
            <div>{{baseInfo.name}}</div>
            <div>{{baseInfo.gender}} | {{baseInfo.age}} | {{baseInfo.origin}} | {{baseInfo.academic}} | {{baseInfo.belong}}</div>
            <div><span class="width-ch20">联系电话：</span> {{baseInfo.phone}} &nbsp;&nbsp;&nbsp; 身份证号： {{baseInfo.idCard}}</div>
            <div><span class="width-ch20">住址：</span>{{baseInfo.address}}</div>
            <div><span class="width-ch20">简介：</span>{{baseInfo.introduction}}</div>
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
    baseInfo: {
      type: Object,
      required: true,
      default: () => ({})
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
  line-height:20px
  .avatar
    width:74px;
    height:83px;
    align-self flex-start
    margin-right 2rem
    background #999
  .info-con
    align-self flex-start
.width-ch20
  display inline-block
  width 9ch

</style>
