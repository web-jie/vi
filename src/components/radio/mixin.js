
import { getParent } from '../../utils/helper'

export default {
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
    }
  },
  computed: {
    parentValue () {
      return getParent(this, 'vi-radio-group')
    },
    isDisabled () {
      return (this.parentValue.disabled || this.disabled)
    },
    active () {
      return this.parentValue.value === this.value
    }
  },
  methods: {
    change () {
      this.parentValue.getData(this)
    }
  }
}
