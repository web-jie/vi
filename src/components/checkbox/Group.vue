<template>
  <div class="vi-checkbox-group" role="group">
    <div v-if="indeterminate" class="vi-checkbox_indeterminate">
      <vi-checkbox :isIndeterminate="indeterminate">全选</vi-checkbox>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { isEmptyObject } from '../../utils/helper'
export default {
  name: 'vi-checkbox-group',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    ViFormItemOptions: {
      from: 'ViFormItemOptions',
      default: () => ({})
    }
  },
  watch: {
    value (val) {
      this.$emit('change', val)
      !isEmptyObject(this.ViFormItemOptions) && (this.ViFormItemOptions.events('blur'))
      !isEmptyObject(this.ViFormItemOptions) && (this.ViFormItemOptions.events('change'))
    }
  },
  methods: {
    getData (options, data) {
      if (data && Array.isArray(data)) {
        this.$emit('input', [])
      } else {
        const index = this.value.findIndex(v => v === options.value)
        if (index >= 0) {
          this.value.splice(index, 1)
        } else {
          this.value.push(options.value)
        }
        this.$emit('input', this.value)
      }
    }
  }
}
</script>
