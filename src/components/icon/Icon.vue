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
    }
  },
  computed: {
    classes () {
      return [
        'iconfont',
        `vi-icon-${this.name}`,
        'vi-icon'
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
