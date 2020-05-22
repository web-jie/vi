<template>
  <div class="vi-carousel-item" :style="styles" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { getParent } from '../../utils/helper'
export default {
  name: 'vi-carousel-item',
  data() {
    return {
      x: 0,
    }
  },
  computed: {
    parentValue () {
      return getParent(this, 'vi-carousel')
    },
    styles() {
      return {
        transform: `translateX(${this.x}px)`
      }
    },
    classes() {
      return [
        // this.parentValue.activeIndex === 
      ]
    }
  },
  
  methods: {
    setTransform({index, parentWidth}) {
      this.x = index * parentWidth
    },
  }
}
</script>