<template>
  <div class="vi-carousel" 
       :style="carouselStyles">
    <div class="vi-carousel-content" 
         @mouseenter="mouseenterBox"
         @mouseleave="mouseleaveBox">
      <div class="vi-carousel-container" 
         ref="container" 
         @transitionstart ="transitionstart"
         @transitionend ="transitionend"
         :style="containerStyles">
        <slot></slot>
      </div>
      
      <template v-if="arrow !== 'never' && indicatorList.length > 1">
        <div class="vi-carousel-arrow vi-carousel-prev" :class="arrowClasses">
          <button class="vi-carousel-button" @click="prev">
            <vi-icon name="arrow-left" size="16" :isDefaultColor="false"></vi-icon>
          </button>
        </div>
        <div class="vi-carousel-arrow vi-carousel-next" :class="arrowClasses">
          <button class="vi-carousel-button" @click="next">
            <vi-icon name="arrow-right" size="16" :isDefaultColor="false"></vi-icon>
          </button>
        </div>
      </template>
    </div>

    <div v-if="isShowIndicator" :class="carouselClasses">
      <div class="vi-carousel-indicator_item"
           :class="[index === indicatorIndex && 'is-indicator-current']"
           @mouseenter="mouseenter(index)"
           @mouseleave="mouseleave(index)"
           @click="indicatorTrigger === 'click' && indicatorClick(index)"
           v-for="(item, index) in indicatorList" 
           :key="index">
        <span class="vi-indicator-button" :style="indicatorButtonStyles"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { getPx } from '../../utils/helper'
export default {
  name: 'vi-carousel',
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    height: {
      type: [Number, String],
      default: ''
    },
    width: {
      type: [Number, String],
      default: ''
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    isShowIndicator: {
      type: Boolean,
      default: true
    },
    indicatorColor: {
      type: String,
      default: ''
    },
    indicatorTrigger: {
      type: String,
      default: 'hover'
    },
    indicatorPosition: {
      type: String,
      default: 'inner'
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      indicatorList: [],
      timer: null,
      timeoutTimer: null,
      parentWidth: 0,
      activeIndex: 0,
      indicatorIndex: 0,
      x: 0,
      transitionDuration: 1000
    }
  },
  computed: {
    carouselStyles() {
      return {
        width: this.width !== '' && getPx(this.width)
      }
    },
    containerStyles() {
      return {
        transform: `translateX(${this.x}px)`,
        transitionDuration: `${this.durations}ms`,
        height: this.height !== '' && getPx(this.height),
      }
    },
    carouselClasses() {
      return [
        'vi-carousel-indicator',
        `vi-carousel-indicator_${this.indicatorPosition}`
      ]
    },
    indicatorButtonStyles() {
      return {
        backgroundColor: this.indicatorColor
      }
    },
    durations() {
      return this.duration > this.transitionDuration ? 
              this.transitionDuration :
              this.duration
    },
    arrowClasses() {
      return [
        this.arrow !== 'never' && `vi-carousel-arrow--${this.arrow}`
      ]
    }
  },
  watch: {
    activeIndex(val) {
      if (val >= 0) {
        this.indicatorIndex = 
            val === this.indicatorList.length ? 
            0 : val
      } else {
        this.indicatorIndex = this.indicatorList.length - 1
      }
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  },
  methods: {
    transitionstart() {
      const len = this.indicatorList.length
      if (this.activeIndex >= len + 1) {
        this.activeIndex = 0
        this.transitionDuration = 0
        this.x = 0
        this.setTransform(this.indicatorList[0], 0)
        setTimeout(_ => {
           this.activeIndex = 1
           this.lookTransform()
        })
      }
      if (this.activeIndex === len) {
        this.setTransform(this.indicatorList[0], this.activeIndex)
      }
      if (this.activeIndex === -1) {
        const instance = this.indicatorList[len - 1]
        this.setTransform(instance, -len)
      }
      if (this.activeIndex === -2 ) {
        this.transitionDuration = 0
        this.activeIndex = len - 1
        this.x = -(this.activeIndex * this.parentWidth)
        this.setTransform(this.indicatorList[len - 1], 0)
        this.setTransform(this.indicatorList[0], this.activeIndex + 1)
        setTimeout(_ => {
          this.activeIndex --
           this.lookTransform()
        })
      }
      if (this.activeIndex === 0) {
        this.setTransform(this.indicatorList[0], 0)
      }
    },
    transitionend() {
    },
    init() {
      this.indicatorList = this.$children.filter(v => v.$options.name === 'vi-carousel-item')
      const len = this.indicatorList.length
      this.activeIndex = this.initialIndex >= len ? 
                          0 : this.initialIndex
      if (len > 1) {
        this.$nextTick(() => {
          this.parentWidth = this.$refs.container.offsetWidth
          this.initTransform()
          this.timer && clearInterval(this.timer)
          this.startTimer()
        })
      }
    },
    initTransform() {
      this.lookTransform()
    },
    startTimer() {
      if (this.duration === 0 || !this.autoplay) return
      this.timer = setInterval(_ => {
        this.activeIndex ++ 
        this.lookTransform()
      }, this.duration)
    },
    lookTransform() {
      this.transitionDuration = 1000
      this.x = -(this.activeIndex * this.parentWidth)
    },

    setTransform(instance, index) {
      instance.setTransform({
        index,
        parentWidth: this.parentWidth, 
      })
    },
    prev() {
      this.activeIndex --
      this.lookTransform()
    },
    next() {
      this.activeIndex ++ 
      this.lookTransform()
    },
    // 移入
    mouseenter(index) {
      this.timer && clearInterval(this.timer)
      if (this.indicatorTrigger === 'hover') {
        this.activeIndex = index
        this.lookTransform()
      }
    },
    // 移出
    mouseleave(index) {
      this.startTimer()
    },
    indicatorClick(index) {
      this.activeIndex = index
      this.lookTransform()
    },

    mouseenterBox() {
      this.timer && clearInterval(this.timer)
    },
    mouseleaveBox() {
      this.startTimer()
    }
  }
}
</script>