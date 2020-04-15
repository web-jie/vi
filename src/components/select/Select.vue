<template>
  <div class="vi-select">
    <vi-input
    style="width: 100%"
    readonly
    ref="input"
    :value="inputValue"
    :class="inputClasses"
    :disabled="disabled"
    :size="size"
    @focus="isShow = true"
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
      name="selectFade">
        <div class="vi-select_content" v-show="isShow" :style="ulStyles" ref="select_content" id="aa">
          <ul class="vi-select_ul">
            <slot></slot>
          </ul>
        </div>
      </transition>
    </vi-input>
  </div>
</template>

<script>
// import Velocity from 'velocity-animate'
import { bindWindowsEvent, removeWindowsEvent } from '../../utils/index'
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
    }
  },
  provide () {
    return {
      options: this
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
      isFirstScroll: true
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        bindWindowsEvent(() => {
          if (!this.isFirstFlag) {
            this.blur()
          }
          this.isFirstFlag = false
        }, 'click')
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
    }
  },
  mounted () {
    this.childrenList = this.$children[0].$children || []
    this.setInputVal()
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
        zIndex: this.$VIELEMENT.getZIndex() + 1
      }
    },
    isShowClear () {
      return this.clearable && ((this.isHover && this.value) || this.isShow)
    }
  },
  methods: {
    onClearcAble () {
      this.$emit('input', '')
    },
    blur () {
      this.isShow = false
      this.$refs.input.blur()
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
      removeWindowsEvent(() => {}, 'click')
    }
  }
}
</script>
