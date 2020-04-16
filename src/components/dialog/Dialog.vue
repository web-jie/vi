<template>
  <transition
    @before-leave="beforeLeave"
    @afterLeave="afterLeave"
    @after-enter="afterEnter"
    :name="`vi-dialog-${animation}`"
    appear>
    <div class="vi-dialog" v-show="show" @click.self="closeOnClickOverlay && (show = false)" :style="viDialogStyles" :msg="msg" ref="box" role="dialog">
      <!--@click.self="closeOnClickOverlay && onClose()"-->
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
    </div>
  </transition>
</template>

<script>
import { bindWindowsEvent, removeWindowsEvent } from '../../utils/index'
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
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    msg: [String]
  },
  computed: {
    viDialogStyles () {
      return {
        zIndex: this.zIndex
      }
    },
    boxStyles () {
      return {
        width: this.getPx(this.width),
        marginTop: this.getPx(this.top)
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
        this.$viMask()
        this.isCloseEsc && this.keydown()
        this.$VIELEMENT.setZIndex()
        this.zIndex = this.$VIELEMENT.getZIndex()
        this.$VIELEMENT.dialogList.push(this)
        this.$emit('open')
      } else {
        this.$VIELEMENT.dialogList.pop()
        !this.$VIELEMENT.dialogList.length && removeWindowsEvent()
        this.$emit('close')
      }
      this.$emit('change', val)
    }
  },
  created () {
    this.show = this.value
  },
  mounted () {
    if (this.appendToBody) {
      document.querySelector('body').appendChild(this.$el)
    }
  },
  data () {
    return {
      show: false,
      masks: null,
      styles: {},
      showBox: false,
      zIndex: this.$VIELEMENT.getZIndex()
    }
  },
  methods: {
    keydown (e) {
      bindWindowsEvent((e) => {
        this.keydownFn(e)
      })
    },
    keydownFn (e) {
      e.keyCode === 27 && (this.$VIELEMENT.dialogList[this.$VIELEMENT.dialogList.length - 1].show = false)
    },
    onCancel () {
      this.show = false
      this.cancel()
    },
    getPx (val) {
      if (String(val).includes('%') || String(val).includes('px')) return val
      return `${val}px`
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
