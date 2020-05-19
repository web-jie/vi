<template>
  <span class="vi-breadcrumb-item">
    <span :class="innerClasses" @click="to && toRoute()">
      <slot></slot>
    </span>
    <template>
      <span v-if="customSeparatorClass" v-html="customSeparatorClass" class="vi-breadcrumb_separator-class"></span>
      <vi-icon v-else-if="separatorClass" class="vi-breadcrumb_separator-class" :name="separatorClass"/>
      <span v-else class="vi-breadcrumb_separator">{{separator}}</span>
    </template>
  </span>
</template>

<script>
import { getParent, isEmptyObject } from '../../utils/helper'
export default {
  name: 'vi-breadcrumb-item',
  props: {
    to: {
      type: String,
      default: ''
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: true,
      separator: '',
      separatorClass: '',
      customSeparatorClass: ''
    }
  },
  computed: {
    innerClasses() {
      return [
        'vi-breadcrumb_inner',
        this.to && 'vi-breadcrumb_inner-link'
      ]
    },
    parentValue () {
      return getParent(this, 'vi-breadcrumb')
    },
  },
  mounted() {
    this.separator = this.parentValue.separator
    this.customSeparatorClass = this.parentValue.customSeparatorClass
    this.separatorClass = this.parentValue.separatorClass
  },
  methods: {
    toRoute() {
      const {to, $router} = this
      this.replace ? $router.replace(to) : $router.push(to);
    }
  },
}
</script>