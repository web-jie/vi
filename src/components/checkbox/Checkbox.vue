<template>
  <label class="vi-checkbox" role="checkbox" :style="checkBoxStyles" :class="checkboxClasses" >
    <span class="vi-checkbox_inner-box">
      <span class="vi-checkbox_inner" :class="innerClasses"></span>
      <input class="vi-checkbox_input" type="checkbox" @change="change" :checked="active" :disabled="isDisabled" @blur="blur"/>
    </span>
    <span class="vi-checkbox_label" >
      <slot>{{label || value}}</slot>
    </span>
  </label>
</template>

<script>
import { getParent } from '../../utils/helper'
import { isEmptyObject } from '../../utils/helper'
export default {
  name: 'vi-checkbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled:{
      type: Boolean,
      default: false
    },
    isIndeterminate: {
      type: Boolean,
      default: false
    },
  },
  inject: {
    ViFormItemOptions: {
      from: 'ViFormItemOptions',
      default: () => ({})
    }
  },
  computed: {
    parentValue () {
      return getParent(this, 'vi-checkbox-group')
    },
    checkBoxStyles() {
      return {
        display: this.block && 'block'
      }
    },
    checkboxClasses() {
      return [
        this.active && 'is-active',
        this.isDisabled && 'is-disabled'
      ]
    },
    innerClasses() {
      return [
        this.isIndeterminateStatus && 'is-indeterminate'
      ]
    },
    isDisabled() {
      return (this.parentValue.disabled || this.disabled)
    },
    active () {
      return this.parentValue.value.some(v => v === this.value) || (this.isIndeterminate && this.isAllSelect)
    },
    isAllSelect() {
      return this.childrenList.filter(v => !v.isIndeterminate).every(v => this.parentValue.value.includes(v.value))
    },
    isIndeterminateStatus() {
      return this.isIndeterminate && this.parentValue.value.length && !this.isAllSelect
    }
  },
  data() {
    return {
      childrenList: []
    }
  },
  mounted() {
    this.childrenList = this.parentValue.$children || []
  },
  methods: {
    blur() {
      !isEmptyObject(this.ViFormItemOptions) && (this.ViFormItemOptions.events('blur'))
    },
    change(e) {
      if (this.isIndeterminate) {
        if (this.isAllSelect) {
          this.parentValue.getData(this, [])
        } else {
          this.childrenList.filter(v => !v.isIndeterminate).map(v => {
            if (!this.parentValue.value.includes(v.value)) {
              this.parentValue.getData(v)
            }
          })
        }
        return
      }
      if (!this.value) return
      this.parentValue.getData(this)
    }
  },
}
</script>