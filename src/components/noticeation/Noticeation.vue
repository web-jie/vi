<template>
  <transition 
  @afterLeave="afterLeave"
  appear
  name="vi-noticeation">
    <div class="vi-noticeation" :style="noticeationStyles" :class="noticeationClasses" v-if="show">
      <div class="vi-noticeation_status-icon" v-if="type !== 'alert'">
        <vi-icon :name="iconType[type]" size="25" :class="iconClasses"></vi-icon>
      </div>
      <div class="vi-noticeation_content">
        <div class="vi-noticeation_title" v-if="title">
          {{title}}
        </div>
        <div class="vi-noticeation_main" v-if="content">
          {{content}}
        </div>
        <div class="vi-noticeation_close-icon" @click="close" v-if="isClose">
          <vi-icon name="close" size="17"></vi-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { getPx } from '../../utils/helper'
import { iconType } from '../../utils/helper'
export default {
  name: 'vi-noticeation',
  data() {
    return {
      top: 0,
      zIndex: this.$VIELEMENT.getZIndex(),
      title: '',
      content: '',
      type: 'alert',
      timer: null,
      duration: 4500,
      show: false,
      isClose: false,
      iconType,
      beforeClose: null
    }
  },
  computed: {
    iconClasses() {
      return [
        this.type !== 'alert' && `vi-noticeation_icon-${this.type}`
      ]
    },
    noticeationStyles() {
      return {
        top: getPx(this.top),
        zIndex: this.zIndex + 1
      }
    },
    noticeationClasses() {
      return [
        `vi-noticeation_${this.type}`,
      ]
    },
  },
  mounted() {
    if (this.duration !== 0) {
      this.init()
    }
  },
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
    afterLeave() {
      
    },
  },
}
</script>