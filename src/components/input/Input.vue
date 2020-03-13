<template>
  <div class="vi-input">
    <input
    class="vi-input_inner"
    :class="classes"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxlength"
    :max="max"
    :min="min" />

    <span class="vi-input_clearable" v-if="clearable && value" @click="onClearable">
      <vi-icon name="close" size="14"></vi-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vi-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    maxlength: Number,
    max: [Number, Date],
    min: [Number, Date],
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        this.disabled && 'vi-input_disabled',
        this.readonly && 'vi-input_readonly',
        this.clearable && 'vi-input_clearable-inner'
      ]
    }
  },
  methods: {
    onClearable () {
      this.$emit('input', '')
    }
  }
}
</script>
