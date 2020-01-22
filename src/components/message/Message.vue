<template>
  <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter" appear>
    <div class="vi-message" :style="styleles" :class="classes">
      <div class="vi-message_type-icon" v-if="isIcon">
        <vi-icon :name="iconType[type]" size="18"></vi-icon>
      </div>
      <div class="vi-message_content">{{content}}</div>
      <div class="vi-message_icon" @click="close($el, 0)" v-if="isClose">
        <vi-icon name="close" size="15" class="vi-message_icon-font"></vi-icon>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'vi-message',
  computed: {
    styleles () {
      return {
        zIndex: 1000
      }
    },
    classes () {
      return [
        `vi-message_${this.type}`
      ]
    }
  },
  data () {
    return {
      type: 'success',
      content: '',
      closeFn: null,
      componentTop: '',
      duration: 2000,
      isClose: false,
      beforeClose: null,
      isIcon: true,
      iconType: {
        'success': 'checked',
        'warning': 'warning',
        'danger': 'error',
        'info': 'info'
      }
    }
  },
  watch: {
    componentTop () {
    }
  },
  created () {
    // console.log(this.info)
  },
  methods: {
    beforeEnter (el) {
      el.style.top = `${this.nextStartTop}px`
      el.style.opacity = '.5'
    },
    enter (el, done) {
      Velocity(el, { top: `${this.componentTop}px`, opacity: 1 }, { duration: 350, complete: done }, 'ease-out')
    },
    afterEnter (el) {
      if (this.duration === 0 || this.isClose) return
      this.close(el)
    },

    close (el = this.$el, duration = this.duration) {
      setTimeout(() => {
        Velocity(el, { opacity: 0 }, { duration: 350,
          complete: () => {
            this.removeChild()
          } })
      }, duration)
    },
    animations () {
      Velocity(this.$el, { top: `${this.componentTop}px`, opacity: 1 }, { duration: 200 }, 'ease-out')
    },
    removeChild () {
      this.$destroy(true)
      this.closeFn(this.id)
    }
  }
}
</script>
