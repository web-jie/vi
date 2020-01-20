<template>
  <div :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'vi-container',
  props: {
    direction: {
      validator (value) {
        return oneOf(value, ['', 'horizontal', 'vertical'])
      },
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      isHorizontal: false
    }
  },
  computed: {
    classes () {
      return [
        'vi-container',
        {
          [`vi-is-${this.direction}`]: this.direction,
          'vi-is-horizontal': !this.direction && this.isHorizontal,
          'vi-is-vertical': !this.direction && !this.isHorizontal
        }
      ]
    },
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
  },
  mounted () {
    this.checkVertical()
  },
  methods: {
    checkVertical () {
      this.isHorizontal = Array.from(this.$children).some(vm => vm.$options.name === 'vi-aside')
    }
  }
}
</script>
