<template>
  <i :class="classes"  @click="handleClick" :style="styles"></i>
</template>
<script>
export default {
  name: 'vi-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: ''
    },
    isDefaultColor: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [
        'iconfont',
        `vi-icon-${this.name}`,
        'vi-icon',
        this.isDefaultColor && 'vi-icon--defalut_color'
      ]
    },
    styles () {
      let style = {}
      if (this.color) {
        style.color = this.color
      }
      if (this.size) {
        style['font-size'] = String(this.size).includes('px') ? this.size : `${this.size}px`
      }
      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
