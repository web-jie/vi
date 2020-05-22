<template>
  <button class="vi-button" :class="classes" @click="$emit('click')" :disabled="disabled" :style="buttonStyles">
    <template v-if="loading && loadingPosition === 'left'">
      <vi-icon 
      name="btn-loading" 
      class="vi-button_loading" 
      size="15" 
      :color="type === 'text' ? '' : '#fff'"></vi-icon>
    </template>
    <span v-if="isShowContent" :style="iconStyles">
      <slot>
        <span v-if="isShowLoaingText">{{loadingText}}</span>
      </slot>
    </span>
    <template v-if="loading && loadingPosition === 'right'">
      <vi-icon 
      name="btn-loading" 
      class="vi-button_loading " 
      size="15" 
      :color="type === 'text' ? '' : '#fff'"></vi-icon>
    </template>
  </button>
</template>

<script>
export default {
  name: `vi-button`,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: String,
    loadingPosition: {
      type: String,
      default: 'left'
    },
    contentColor: {
      type: String,
      defalut: ''
    }
  },
  computed: {
    classes () {
      return [
        `vi-button_${this.type}`,
        this.radius && `vi-button_round`,
        this.plain && `vi-button_plain`,
        this.size && `vi-button_${this.size}`,
        this.circle && `vi-button_circle`,
        this.disabled ? 'vi-button_disabled' : 'is-active',
        this.loading && `is-loading`
      ]
    },
    isShowContent () {
      if (!this.loading) {
        return true
      } else {
        return !this.circle && this.type !== 'text'
      }
      // return !this.loading || (this.loading && (!this.circle && !this.type !== 'text'))
    },
    isShowLoaingText () {
      return (this.loading && this.type !== 'text' && !this.circle && this.loadingText) || false
    },
    iconStyles () {
      let style = {
        color: this.contentColor
      }
      if (this.loading) {
        if (typeof this.loadingText === 'undefined') {
          if (!this.circle && this.type !== 'text') {
            style[`margin-${this.loadingPosition}`] = '5px'
          }
        } else if (this.loadingText) {
          style[`margin-${this.loadingPosition}`] = '5px'
        }
      }
      return style
    },
    buttonStyles () {
      return {
        // borderColor: this.contentColor
      }
    }
  }
  // created () {
  //   console.log(this.$prefix)
  // }
}
</script>
