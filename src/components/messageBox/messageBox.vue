<template>
  <transition
    @before-leave="beforeLeave"
    @afterLeave="afterLeave"
    @after-enter="afterEnter"
    name="vi-messagebox"
    appear
    v-if="show">
    <div class="vi-messagebox" :style="messageBoxStyles" role="dialog" @click.self="closeOnClickOverlay && (show = false)">
      <div class="vi-messagebox_main">
        <component
        :is="type">
          <template v-slot:footer v-if="isConfirm || isCancel">
            <div class="vi-messageBox_main-footer">
              <vi-button
              v-if="isCancel"
              @click="onCancel"
              :type="cancelBtnType"
              :size="btnSize">
                {{cancelText}}
              </vi-button>
              <vi-button
                :type="confirmType"
                :size="btnSize"
                v-if="isConfirm"
                @click="onConfirm">
                {{confirmText}}
              </vi-button>
            </div>
          </template>
        </component>
      </div>
    </div>
  </transition>
</template>

<script>
import alert from './alert'
import confirm from './confirm'
import { bindWindowsEvent, removeWindowsEvent } from '../../utils/index'
export default {
  name: 'vi-messageBox',
  components: {
    alert,
    confirm
  },
  data () {
    return {
      title: '',
      content: '',
      show: false,
      zIndex: this.$VIELEMENT.getZIndex(),
      type: 'alert',
      isCancel: true,
      isConfirm: true,
      confirmText: '确定',
      cancelText: '取消',
      closeOnClickOverlay: false,
      isCloseEsc: false,
      cancelBtnType: '',
      confirmType: 'primary',
      btnSize: ''
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.$viMask()
        this.$VIELEMENT.setZIndex()
        this.isCloseEsc && this.keydown()
        this.zIndex = this.$VIELEMENT.getZIndex()
        this.$VIELEMENT.messageBoxList.push(this)
      } else {
        this.$VIELEMENT.messageBoxList.pop()
        this.isCloseEsc && removeWindowsEvent(_ => {}, 'messageBox')
      }
    }
  },
  computed: {
    messageBoxStyles () {
      return {
        zIndex: this.zIndex
      }
    }
  },
  created () {
  },
  methods: {
    keydown (e) {
      bindWindowsEvent((e) => {
        this.$VIELEMENT.messageBoxList[this.$VIELEMENT.messageBoxList.length - 1].isCloseEsc && this.keydownFn(e)
      }, 'messageBox')
    },
    keydownFn (e) {
      e.keyCode === 27 && (this.$VIELEMENT.messageBoxList[this.$VIELEMENT.messageBoxList.length - 1].show = false)
    },
    beforeLeave () {
      this.$VIELEMENT.setZIndex('-')
      this.$VIELEMENT.mask.toggleMask()
    },
    afterLeave () {
    },
    afterEnter () {

    }
    // onConfirm() {

    // },
  }
}
</script>
