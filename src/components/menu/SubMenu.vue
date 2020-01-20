<template>
  <li :class="classes">
    <div class="vi-sub-menu-title" @click="handleClick">
      <slot name="title">{{title}}</slot>
      <Icon class="vi-sub-menu-icon" name="arrow-down2"></Icon>
    </div>
    <SlideDown v-model="active"><slot></slot></SlideDown>
  </li>
</template>

<script>
import Icon from '../icon'
import SlideDown from '../slide-down'
import emitter from '../../mixins/emitter'
export default {
  name: 'vi-sub-menu',
  mixins: [emitter],
  components: { SlideDown, Icon },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return [
        'vi-sub-menu',
        {
          'vi-sub-menu-active': this.active,
          'vi-sub-menu-disabled': this.disabled
        }
      ]
    }
  },
  mounted () {
    this.$on('update-active', this.handleUpdateActive)
    this.$on('sub-menu-active', this.handleUpdateOpened)
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.active = !this.active
      if (this.active) {
        // 通知父组件激活
        this.bubbling(['vi-menu', 'vi-sub-menu'], false, 'sub-menu-active', this.name)
      } else {
        // 关闭所有子嵌套组件
        this.broadcast('vi-sub-menu', true, 'update-active', [])
      }
    },
    // 检查是否保持激活
    handleUpdateActive (names) {
      this.active = names.includes(this.name)
    },
    handleUpdateOpened (name) {
      const [parent] = this.findParentComponents('vi-menu')
      if (parent && parent.accordion) {
        // 手风琴模式关闭其他子组件
        this.broadcast('vi-sub-menu', false, 'update-active', [name])
      }
    }
  }
}
</script>
