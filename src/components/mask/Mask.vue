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
      show: false
    }
  },
  computed: {
    styles () {
      return {
        zIndex: 1000,
        toggle: null
      }
    }
  },
  watch: {
    show (val) {
      !val && this.closeFlag()
      this.toggle && this.toggle(val)
    }
  },
  methods: {
    toggleMask () {
      this.show = false
    }
  }
}
</script>
