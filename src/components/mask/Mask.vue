<template>
  <transition name="vi-mask" appear>
    <div class="vi-mask" v-if="show" @click="toggleMask" :style="styles"></div>
  </transition>
</template>

<script>
export default {
  name: 'vi-mask',
  data () {
    return {
      show: false,
      zIndex: this.$VIELEMENT.getZIndex(),
      count: 0
    }
  },
  computed: {
    styles () {
      return {
        zIndex: this.zIndex,
        toggle: null
      }
    }
  },
  watch: {
    show (val) {
      this.toggle && this.toggle(val)
      !val && (this.$VIELEMENT.mask = null)
    }
  },
  methods: {
    toggleMask () {
      if (this.count !== 0) {
        this.zIndex -= 2
        this.count--
        this.$VIELEMENT.setZIndex('-')
      } else {
        this.show = false
      }
    }
  }
}
</script>
