<template>
  <label class="vi-radio" role="radio" :class="radioClasses" :style="radioStyles">
    <span class="vi-radio_inner-box">
      <span class="vi-radio_inner" :class="innerClasses"></span>
      <input type="radio" class="vi-radio_input" @change="change" :checked="active" :disabled="isDisabled"/>
    </span>
    <span class="vi-radio_label" >
      <slot>{{label || value}}</slot>
    </span>
  </label>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'vi-radio',
  mixins: [mixin],
  props: {
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    radioStyles () {
      return {
        display: this.block && 'block'
      }
    },
    innerClasses () {
      return [
        
      ]
    },
    radioClasses () {
      return [
        this.isDisabled && 'is-disabled',
        this.active && 'is-active'
      ]
    }
  },
}
</script>
