<template>
  <div class="vi-dialog" v-show="showBox" @click.self="closeOnClickOverlay && (show = false)" >
    <!--@click.self="closeOnClickOverlay && onClose()"-->
    <transition
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @leave="leave"
    @afterLeave="afterLeave"
    appear
    v-if="show">
      <div class="vi-dialog_main" :style="boxStyles">
        <div class="vi-dialog_close" @click="show = false" v-if="isCloseIcon">
          <vi-icon name="close" size="18" color="#999"></vi-icon>
        </div>
        <div class="vi-dialog_header" :class="headerClasses" v-if="isHeader">
          <div class="vi-dialog_header-inner"><slot name="title">{{title}}</slot></div>
        </div>
        <div class="vi-dialog_content">
          <slot></slot>
        </div>
        <div class="vi-dialog_footer" :class="footerClasses" v-if="isFooter">
          <slot name="footer"></slot>
          <div class="vi-dialog_button">
            <slot name="button">
              <div v-if="confirm || cancel">
                <vi-button type="text" v-if="cancel" @click="onCancel">{{cancelText}}</vi-button>
                <vi-button type="primary" v-if="confirm" @click="confirm">{{confirmText}}</vi-button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'vi-dialog',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    top: {
      type: [String, Number],
      default: 120
    },
    animation: {
      type: String,
      default: 'fade'
    },
    width: {
      type: [Number, String],
      default: '30%'
    },
    closeOnClickOverlay: {
      typeZ: Boolean,
      default: true
    },
    isCloseIcon: {
      type: Boolean,
      default: true
    },
    isHeaderBd: {
      type: Boolean,
      default: true
    },
    isFooterBd: {
      type: Boolean,
      default: true
    },
    isHeader: {
      type: Boolean,
      default: true
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    confirm: null,
    cancel: null,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    isCloseEsc: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    boxStyles () {
      return {
        width: this.getPx(this.width)
      }
    },
    headerClasses () {
      return [
        this.isHeaderBd && 'vi-message_header-bd'
      ]
    },
    footerClasses () {
      return [
        this.isFooterBd && 'vi-message_footer-bd'
      ]
    }
  },
  watch: {
    value (val) {
      this.show = val
    },
    show (val) {
      if (val) {
        this.masks = this.$viMask()
        // 添加esc事件
        this.isCloseEsc && this.keydown()
      } else {
        window.removeEventListener('keydown', this.keydownFn)
      }
      this.$emit('change', val)
    }
  },
  created () {
    this.show = this.value
  },
  data () {
    return {
      show: false,
      masks: null,
      styles: {},
      showBox: false
    }
  },
  methods: {
    keydown (e) {
      window.addEventListener('keydown', this.keydownFn)
      // esc取消
      // e.keyCode === 27 && (this.show = false)
    },
    keydownFn (e) {
      e.keyCode === 27 && (this.show = false)
    },
    onCancel () {
      this.show = false
      this.cancel()
    },
    getPx (val) {
      if (String(val).includes('%') || String(val).includes('px')) return val
      return `${val}px`
    },
    beforeEnter (el) {
      this.showBox = true
      switch (this.animation) {
        // 淡入淡出
        case 'fade':
          this.fade(el)
          break
        // 上方滑入
        case 'upper-slide':
          this.upperSlide(el)
          break
          // 下方滑入
        case 'below-slide':
          this.belowSlide(el)
          break
      }
    },
    enter (el, done) {
      let style = {}
      switch (this.animation) {
        // 淡出
        case 'fade':
          style = this.enterFade(el)
          break
          // 上方滑入
        case 'upper-slide':
          style = this.enterUpperSlide(el)
          break
        // 下方滑入
        case 'below-slide':
          style = this.enterBelowSlide(el)
          break
      }
      this.styles = style
      // const style = {
      //   // marginTop: String(this.top).includes('px') ? this.top : `${this.top}px`,
      //   opacity: 1
      // }
      Velocity(el, style, { duration: 300, complete: done }, 'ease-out')
    },

    afterEnter (el) {
    },

    leave (el, done) {
      this.masks.toggleMask()
      Object.keys(this.styles).forEach(v => {
        this.styles[v] = 0
      })
      Velocity(el, this.styles, { duration: 300, complete: done }, 'ease-out')
    },

    afterLeave () {
      this.showBox = false
    },

    enterFade (el) {
      return {
        opacity: 1,
        marginTop: this.getPx(this.top)
      }
    },
    enterUpperSlide (el) {
      return {
        marginTop: this.getPx(this.top),
        opacity: 1
      }
    },
    enterBelowSlide (el) {
      return {
        marginTop: this.getPx(this.top),
        opacity: 1
      }
    },

    fade (el) {
      console.log(this.top)
      el.style.marginTop = this.getPx(this.top)
      el.style.opacity = 0
    },
    upperSlide (el) {
      el.style.marginTop = 0
      el.style.opacity = 0
    },
    belowSlide (el) {
      el.style.marginTop = '100%'
      el.style.opacity = 0
    }
  }
}
</script>
