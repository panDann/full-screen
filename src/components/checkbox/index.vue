
<template>
<div class="con" @click="currentValue=!currentValue,$emit('input',currentValue),$emit('change',currentValue)">
  <div class="iconfont checked" :class="currentValue?'icon-duoxuankuang1':'icon-weixuanzhongzhuangtai   '"></div>
  <label class="label">{{label}}</label>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'chekcbox'
    }
  },
  // model: {
  //   prop: 'value',
  //   event: 'input'
  // },
  data () {
    return {
      currentValue: this.value
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
@import './index.styl'

</style>
