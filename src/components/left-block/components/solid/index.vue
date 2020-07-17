
<template>
  <div class="paddingtb10">
    <div class="flex-row font14 color-739DFF justify-around">
      <div>
        <p>
          <CheckBox  @change="(value)=>onChange({type:value})"  label="重要出入口监控" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@src/components/checkbox'

export default {
  components: {
    CheckBox
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
.color-739DFF {
  color: #739DFF;
}
</style>
