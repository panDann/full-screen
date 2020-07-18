
<template>
    <div class="base-con">
     <div class=" white margintb10">基本信息</div>
     <div class="content">
        <div class="margintb10 flex-row justify-start">
          <i class=" iconfont font32 self-start icon icon-wangge" />
          <div>
            <div>所在网格：</div>
            <div>{{baseInfo.name}}</div>
          </div>
        </div>
        <div class="margintb10 flex-row justify-start">
          <i class=" iconfont font32 self-start icon icon-fuzeren" />
          <div>
            <div>网格负责人：</div>
            <div>{{baseInfo.pname}}</div>
          </div>
        </div>
        <div class="margintb10 flex-row justify-start">
          <i class="iconfont font32 self-start icon icon-shouji" />
          <div>
            <div>网格负责人电话：</div>
            <div>{{baseInfo.telephone}}</div>
          </div>
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
      default: () => {}
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
.icon
  padding .5rem
  padding-left 0
</style>
