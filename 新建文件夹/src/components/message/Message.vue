<template>
  <transition
    appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    :css="false"
    v-on:after-enter="afterEnter">
    <div class="vi-message" :style="styleles">
      <div></div>
      <div>{{info.content}}</div>
      <div></div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'vi-message',
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    styleles () {
      return {
        zIndex: 1000
        // top: '60px'
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    console.log(this.info)
  },
  methods: {
    beforeEnter (el) {
      el.style.top = '0px'
      // el.style.top = 0
    },
    enter (el, done) {
      Velocity(el, { top: '60px' }, { duration: 450, complete: done }, 'ease-out')
    },
    afterEnter (el) {
      // el.style.top = '60px'
      console.log('动画执行完---')
    }
  }
}
</script>
