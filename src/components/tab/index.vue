
<template>
<div>
        <div :class="card?'tab-card-con':'tab-con'">
            <div v-for="item in tabList" :key='item.key' class='item'
             :class="currentName==item.key&&'active'"
             @click="transferTab(item.key)"
             >
                    {{item.label}}{{item.count? `(${item.count})`:''}}
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    card: {
      type: Boolean,
      default: false
    },
    tabList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      currentName: this.value
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
