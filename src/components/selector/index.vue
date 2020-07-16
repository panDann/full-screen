
<template>
<div>
      <div class="flex-row justify-around primary-color  selector-con">
        <div class="iconfont  font26 icon-chengshi" />

        <div class="font20 ">曹江镇</div>
        <!-- <select >
        <option value="">曹江镇</option>

      </select> -->
      </div>
      <!-- <div class="area primary-color box-shadow ">
        <div v-for="item in list" :key="item.name"
        class="item"
        :class="currentName===item.name&&'active'"
        @click="currentName=item.name"
        >
          <i class="iconfont icon-ditu font32" />
          <div class="font16">{{item.name}}</div>
        </div>
      </div> -->
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    }
    // card: {
    //   type: Boolean,
    //   default: false
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
      currentName: '',
      list: [
        {
          name: '广州'
        },
        {
          name: '广州'
        },
        {
          name: '广州'
        },
        {
          name: '广州'
        },
        {
          name: '广州'
        },
        {
          name: '广州'
        }
      ]
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
