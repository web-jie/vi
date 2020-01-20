<template>
  <aside class="vi-aside" :style="styles"><slot></slot></aside>
</template>

<script>
export default {
  name: 'vi-aside',
  props: {
    width: {
      type: [String, Number],
      default: 200
    },
    height: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    styles () {
      const styles = {}
      if (this.width) {
        styles.width = `${this.width}px`
      }
      if (this.height) {
        styles.height = `${this.height}px`
      }
      return styles
    }
  }
}
</script>
