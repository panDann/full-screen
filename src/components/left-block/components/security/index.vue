
<template>
  <div class="paddingtb10">
    <div class="flex-row font14 color-739DFF justify-around">
      <div>
        <p>
          <CheckBox @change="(value)=>onChange({type:value})" label="刑事前科人员" />
        </p>
        <p>
          <CheckBox @change="(value)=>onChange({type:value})" label="社区纠正人员" />
        </p>
        <p>
          <CheckBox @change="(value)=>onChange({type:value})" label="涉黑涉恶人员" />
        </p>

      </div>
      <div>
        <p>
          <CheckBox @change="(value)=>onChange({type:value})" label="邢释人员" />
        </p>
        <p>
          <CheckBox @change="(value)=>onChange({type:value})" label="吸毒人员" />
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
