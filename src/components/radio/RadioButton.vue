<template>
  <label class="vi-radio_button" role="radio" :class="radioButtonClasses">
    <span class="vi-radio_button-label">
      <slot>{{label || value}}</slot>
    </span>
    <input type="radio" @change="change" :disabled="isDisabled" class="vi-radio_button-input" :checked="active"/>
  </label>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'vi-radio-button',
  mixins: [mixin],
  computed: {
    radioButtonClasses () {
      return [
        this.active && 'is-active',
        this.parentValue.size && `vi-radio_button_${this.parentValue.size}`,
        this.isDisabled && 'is-disabled'
      ]
    }
  }
}
</script>
