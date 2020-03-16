<template>
  <div :class="boxClasses">
    <template v-if="type === 'textarea'">
      <textarea 
      class="vi-textarea_inner"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      :style="areaStyles"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :autofocus="autofocus"
      :class="statusClassess"
      >
      </textarea>
    </template>
    <template v-else>
      <input
      ref="input"
      class="vi-input_inner"
      :class="[...statusClassess, ...classes]"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :max="max"
      :min="min" />
    </template>

    <span class="vi-input_clearable" v-if="clearable && value && !isShowWord && type !== 'textarea'" @click="onClearable">
      <vi-icon name="close" size="14"></vi-icon>
    </span>
    <template v-if="isShowWord">
      <div class="vi-input_word" :style="wordStyles">
        {{value.length}}/{{maxlength}}
      </div>
    </template>
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
    },
    cols: {
      type: Number,
      default: 50
    },
    rows: {
      type: Number,
      default: 3
    },
    areaResize: {
      type: String,
      default: 'vertical'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    showWord: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isShowWord() {
      return (this.type === 'text' || this.type === 'textarea') && this.maxlength > 0 && this.showWord
    },
    boxClasses() {
      return [
        this.type === 'textarea' ? 'vi-textarea' : 'vi-input',
        this.size && this.type !== 'textarea' && `vi-input_${this.size}`,
        this.isShowWord && 'vi-input_showWord'
      ]
    },
    areaStyles() {
      return {
        resize: this.areaResize
      }
    },
    statusClassess() {
      return [
        this.disabled && 'is-disabled',
        this.readonly && 'is-readonly',
      ]
    },
    classes () {
      return [
        this.clearable && 'vi-input_clearable-inner'
      ]
    },
    wordStyles() {
      return {
        alignItems: this.type === 'textarea' ? 'flex-end' : 'center',
        marginBottom: this.type === 'textarea' ? '8px' : 'auto',
      }
    }
  },
  methods: {
    onClearable () {
      this.$emit('input', '')
      this.$refs.input.focus()
    }
  },
}
</script>
