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
    @focus="getFocus" 
    :placeholder="placeholder">
      <transition 
      appear
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
      @afterLeave="afterLeave">
        <div class="vi-select_content" v-show="isShow" >
          <ul class="vi-select_ul" >
            <slot></slot>
          </ul>
        </div>
      </transition>
    </vi-input>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
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
  provide() {
    return {
      options: this
    }
  },
  data() {
    return {
      inputValue: '',
      isShow: false,
      isFirstFlag: true,
      childrenList: []
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        bindWindowsEvent(() => {
          if (!this.isFirstFlag) {
            this.blur()
          }
          this.isFirstFlag = false
        }, 'click')
      } else {
        
      }
    },
    value(val) {
      this.setInputVal()
      this.$emit('change', val)
    }
  },
  mounted() {
    this.childrenList = this.$children[0].$children || []
    this.setInputVal()
  },
  computed: {
    inputClasses() {
      return [
        this.isShow && 'is-Focus'
      ]
    }
  },
  methods: {
    getFocus() {
      this.isShow = true
    },
    blur() {
      this.isShow = false
      this.$refs.input.blur()
    },
    setInputVal() {
      const options = this.childrenList.find(v => v.value === this.value)
      if (options) {
        this.inputValue = options.$el.innerText
      }
    },
    getData(options) {
      this.$emit('input', options.value)
      this.blur()
    },
    beforeEnter(el,done) {
      el.style.opacity = 0
      el.style.transform = `translateY(0px)`
      el.style.top = '80%'
    },
    enter(el, done) {
      Velocity(el, {opacity: 1, transform: `translateY(4px)`, top: '100%'}, { duration: 250, complete: done }, 'ease-out')
    },
    leave(el, done) {
      Velocity(el, {opacity: 0}, { duration: 250, complete: done }, 'ease-out')
    },
    afterLeave() {
      this.isFirstFlag = true
      removeWindowsEvent(() => {}, 'click')
    }
  },
}
</script>
