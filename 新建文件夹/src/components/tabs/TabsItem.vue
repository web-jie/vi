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
  computed: {
    parentValue () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vi-tabs') {
          break
        }
        parent = parent.$parent
      }
      return parent
    }
  },
  methods: { }
}
</script>
