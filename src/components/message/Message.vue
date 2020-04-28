<template>
  <transition name="vi-message" appear>
    <div class="vi-message" :style="styleles" :class="classes" v-if="show">
      <div class="vi-message_type-icon" v-if="isIcon">
        <vi-icon :name="iconType[type]" size="18" :class="iconClasses"></vi-icon>
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
import { iconType } from '../../utils/helper'
import { getPx } from '../../utils/helper'
export default {
  name: 'vi-message',
  computed: {
    iconClasses() {
      return [
        `vi-message_icon-${this.type}`
      ]
    },
    styleles () {
      return {
        zIndex: this.$VIELEMENT.getZIndex() + 1,
        top: getPx(this.top),
      }
    },
    classes () {
      return [
        `vi-message_${this.type}`,
      ]
    }
  },
  data () {
    return {
      type: 'success',
      content: '',
      closeFn: null,
      duration: 2000,
      isClose: false,
      beforeClose: null,
      isIcon: true,
      iconType,
      top: 30,
      timer: null,
      show: false,
      upTop: 0
    }
  },
  created() {
    if (this.duration !== 0) {
      this.init()
    }
  },
  mounted() {},
  methods: {
    init() {
      this.timer = setTimeout(_ => {
        this.close()
        clearTimeout(this.timer)
      }, this.duration)
    },
    close() {
      this.show = false;
      this.beforeClose && this.beforeClose(this)
      this.closeFn(this.id)
    },
  }
}
</script>
