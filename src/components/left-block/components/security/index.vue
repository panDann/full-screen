
<template>
  <div class="paddingtb10">
      <div class="flex-row-wrap  font14 color-739DFF  justify-start">

                      <p class="width50" v-for="item in list" :key="item.id">

                        <CheckBox
                          :value='filterIds.includes(item.id)'
                          :label='item.name'
                         @change="(value)=>onChange({id:item.id,checked:value})"
                         />

                        </p>

              </div>
  </div>
</template>

<script>
import CheckBox from '@src/components/checkbox'
import { mapState } from 'vuex'

export default {
  components: {
    CheckBox
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState(['filterIds'])
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
