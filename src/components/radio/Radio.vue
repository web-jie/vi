<template>
  <div class="vi-radio" role="radio" @click.stop="!isDisabled && change()" :class="radioClasses" :style="radioStyles">
    <span class="vi-radio_inner-box">
      <span class="vi-radio_inner" :class="innerClasses"></span>
      <input type="radio" class="vi-radio_input" @change="change" ref="radio" :checked="active" :disabled="isDisabled"/>
    </span>
    <span class="vi-radio_label" >
      <slot>{{label || value}}</slot>
    </span>
  </div>
</template>

<script>
import { getParent } from '../../utils/helper'
export default {
  name: 'vi-radio',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // active: false
    }
  },
  computed: {
    parentValue () {
      return getParent(this, 'vi-radio-group')
    },
    radioStyles () {
      return {
        display: this.block && 'block'
      }
    },
    active () {
      return this.parentValue.value === this.value
    },
    innerClasses () {
      return [
        this.active && 'is-active'
      ]
    },
    isDisabled () {
      return (this.parentValue.disabled || this.disabled)
    },
    radioClasses () {
      return [
        this.isDisabled && 'is-disabled'
      ]
    }
  },
  methods: {
    change (e) {
      this.parentValue.getData(this)
    }
  }
}
</script>
