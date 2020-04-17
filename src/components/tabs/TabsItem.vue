<template>
  <div class="vi-tabs_item" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vi-tabs-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: { }
}
</script>
