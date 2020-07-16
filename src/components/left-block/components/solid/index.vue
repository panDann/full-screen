
<template>
  <div class="paddingtb10">
    <div class="flex-row font14 color-739DFF justify-around">
      <div>
        <p>
          <CheckBox label="水纹监测" />
        </p>
        <p>
          <CheckBox label="地质灾害隐患点" />
        </p>
      </div>
      <div>
        <p>
          <CheckBox label="低洼户" />
        </p>
        <p>
          <CheckBox label="转移安置点" />
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
  props: {
    // value: {
    //   type: String,
    //   required: true,
    //   default: ''
    // },
    // tabList: {
    //   type: Array,
    //   required: true,
    //   default: () => []
    // }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      isHide: false,
      currentName: 'three',
      currentLeftIndex: 0
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
// @import './index.styl';
.color-739DFF {
  color: #739DFF;
}
</style>
