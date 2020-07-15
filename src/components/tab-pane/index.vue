
<template>
    <div v-show="active">
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    active () {
      return this.$parent.currentName === this.name
    }
  }
}
</script>
