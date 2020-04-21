<template>
  <div class="vi-radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vi-radio-group',
  props: {
    value: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  watch: {
    value (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    // this
    getData (options) {
      this.$emit('input', options.value)
    }
  }
}
</script>
