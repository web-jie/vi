
<template>
  <vi-icon name="jiazai1" class="vi-loading" size="15"></vi-icon>
</template>

<script>
export default {
  name: 'vi-loading',
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    styles () {
      return {
        borderColor: this.color,
        borderRightColor: 'transparent',
        width: this.size && `${this.size}px`,
        height: this.size && `${this.size}px`
      }
    }
  }
}
</script>
