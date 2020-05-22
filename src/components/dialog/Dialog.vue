<template>
  <transition
    @before-leave="beforeLeave"
    @afterLeave="afterLeave"
    @after-enter="afterEnter"
    :name="`vi-dialog-${animation}`"
    appear>
    <div 
      ref="dialog"
      class="vi-dialog" 
      v-show="value" 
      @click.self="closeOnClickOverlay && handClose($event)" 
      :style="viDialogStyles" 
      role="dialog" >
      <div class="vi-dialog_main" :style="boxStyles">
        <div class="vi-dialog_close" @click="handClose" v-if="isCloseIcon">
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
    </div>
  </transition>
</template>

<script>
import { bindWindowsEvent, removeWindowsEvent } from '../../utils/index'
import { getPx } from '../../utils/helper'
export default {
  name: 'vi-dialog',
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
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: null
  },
  computed: {
    viDialogStyles () {
      return {
        zIndex: this.zIndex
      }
    },
    boxStyles () {
      return {
        width: getPx(this.width),
        marginTop: getPx(this.top)
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
      if (val) {
        this.vals()
      } else {
        this.$VIELEMENT.dialogList.pop()
        this.isCloseEsc && removeWindowsEvent(this, 'keydown')
        this.$emit('close')
      }
    }
  },
  mounted () {
    if (this.appendToBody) {
      document.querySelector('body').appendChild(this.$el)
    }
    if (this.value) {
      this.vals()
    }
  },
  data () {
    return {
      zIndex: this.$VIELEMENT.getZIndex()
    }
  },
  methods: {
    vals() {
      this.$viMask()
      this.isCloseEsc && this.keydown()
      this.$VIELEMENT.setZIndex()
      this.zIndex = this.$VIELEMENT.getZIndex()
      this.$VIELEMENT.dialogList.push(this)
      this.$emit('open')
    },
    windowCallback(e) {
      this.$VIELEMENT.dialogList[this.$VIELEMENT.dialogList.length - 1].isCloseEsc && this.keydownFn(e)
    },
    handClose (e) {
      if (this.beforeClose) {
        this.beforeClose(() => {
          this.$emit('input', false)
        })
      } else {
        this.$emit('input', false)
      }
    },
    keydown (e) {
      bindWindowsEvent(this, 'keydown')
    },
    keydownFn (e) {
      if (e.keyCode === 27) {
        if (this.beforeClose) {
          this.beforeClose(() => {
            this.$VIELEMENT.dialogList[this.$VIELEMENT.dialogList.length - 1].$emit('input', false)
          })
        } else {
          this.$VIELEMENT.dialogList[this.$VIELEMENT.dialogList.length - 1].$emit('input', false)
        }
      }
    },
    onCancel () {
      if (this.beforeClose) {
        this.beforeClose(() => {
          this.$emit('input', false)
          this.cancel()
        })
      } else {
        this.$emit('input', false)
        this.cancel()
      }
    },
    beforeLeave (el, done) {
      this.$VIELEMENT.setZIndex('-')
      this.$VIELEMENT.mask.toggleMask()
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>
