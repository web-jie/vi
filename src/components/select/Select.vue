<template>
  <div class="vi-select">
    <vi-input
    readonly
    ref="input"
    :value="inputValue"
    :class="inputClasses"
    :disabled="disabled"
    :size="size"
    @focus="onFocus"
    @mouseenter.native="clearable && (isHover = true)"
    @mouseleave.native="clearable && (isHover = false)"
    :placeholder="placeholder">

      <template slot="suffix-icon" v-if="!isShowClear">
        <span class="vi-select_pull_down" :class="pullDownClasses">
          <vi-icon name="pull_down"></vi-icon>
        </span>
      </template>
      <template v-else>
        <span class="vi-select_clearable">
          <vi-icon name="close" size="16" @click.stop="onClearcAble"></vi-icon>
        </span>
      </template>

      <transition
      appear
      @afterLeave="afterLeave"
      name="vi-select">
        <div class="vi-select_content" v-show="isShow" :style="ulStyles" ref="select_content">
          <ul class="vi-select_ul">
            <slot></slot>
          </ul>
        </div>
      </transition>
    </vi-input>
  </div>
</template>

<script>
import { bindWindowsEvent, removeWindowsEvent } from '../../utils/index'
import { isEmptyObject } from '../../utils/helper'
import Popper from 'v-poppers'

export default {
  name: 'vi-select',
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    isAppendParentNode: {
      type: Boolean,
      default: false
    },
  },
  provide () {
    return {
      options: this
    }
  },
  inject: {
    ViFormItemOptions: {
      from: 'ViFormItemOptions',
      default: () => ({})
    }
  },
  data () {
    return {
      inputValue: '',
      isShow: false,
      isFirstFlag: true,
      childrenList: [],
      isHover: false,
      currIndex: 0,
      isFirstScroll: true,
      popperOptions: {
        trackPosition: '',
        offset: {
          y: 8
        },
        className: {
          'top': ['vi-wrap_top-transition'],
          'bottom': ['vi-wrap_bottom-transition']
        }
      },
      popperVm: null,
      minWidth: ''
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        bindWindowsEvent(this, 'click', false)
        this.minWidth = this.$refs.input.$el.offsetWidth
        this.$nextTick(() => {
          this.isFirstScroll && (this.$refs['select_content'].scrollTop = (this.currIndex > 2 ? (this.currIndex - 3) : 0) * 37)
        })
      } else {
        this.isFirstScroll = false
      }
    },
    value (val) {
      this.setInputVal()
      this.$emit('change', val)
      !isEmptyObject(this.ViFormItemOptions) && (this.ViFormItemOptions.events('change'))
    }
  },
  created() {
    this.popperOptions.isAppendParentNode = this.isAppendParentNode
  },
  mounted () {
    this.childrenList = this.$children[0].$children || []
    this.setInputVal()
    this.popperVm = new Popper(this.$refs.select_content, this.$el, this.popperOptions)
  },
  beforeDestroy() {
    this.popperVm.destroy()
  },
  computed: {
    pullDownClasses () {
      return [
        this.isShow && 'vi-select_pull_down-active'
      ]
    },
    inputClasses () {
      return [
        this.isShow && 'is-Focus'
      ]
    },
    ulStyles () {
      return {
        zIndex: this.$VIELEMENT.getZIndex() + 1,
        minWidth: this.minWidth + 'px'
      }
    },
    isShowClear () {
      return this.clearable && ((this.isHover || this.isShow) && this.value)
    }
  },
  methods: {
    windowCallback(e) {
      if (!this.isFirstFlag) {
        this.blur()
      }
      this.isFirstFlag = false
    },
    onClearcAble () {
      this.$emit('input', '')
    },
    onFocus() {
      this.isShow = true
      this.$nextTick(_ => {
        this.popperVm.show()
      })
    },
    blur () {
      this.isShow = false
      !isEmptyObject(this.ViFormItemOptions) && (this.ViFormItemOptions.events('blur'))
      this.$refs.input && this.$refs.input.blur()
    },
    focus () {
      this.$refs.input.focus()
    },
    setInputVal () {
      this.currIndex = this.childrenList.findIndex(v => v.value === this.value)
      if (this.currIndex > -1) {
        this.inputValue = this.childrenList[this.currIndex].$el.innerText
      } else {
        this.inputValue = ''
      }
    },
    getData (options) {
      this.$emit('input', options.value)
      this.blur()
    },
    afterLeave () {
      this.isFirstFlag = true
      // removeWindowsEvent(this, 'click')
      // removeWindowsEvent(() => {}, 'select', 'click')
    }
  }
}
</script>
