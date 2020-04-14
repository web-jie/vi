<template>
  <li class="vi-select_item" @click.stop="disabled ? null : onSelect()" :class="classes">
    <slot>{{label || value || ""}}</slot>
  </li>
</template>

<script>
export default {
  name: 'vi-option',
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['options'],
  data () {
    return {
      innerValue: ''
    }
  },

  computed: {
    classes () {
      return [
        this.options.value === this.value && 'is-active',
        this.disabled && 'is-disabled'
      ]
    }
  },
  methods: {
    onSelect () {
      this.options.getData(this)
    }
  }
}
</script>
