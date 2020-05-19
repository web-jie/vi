<template>
  <div class="vi-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'vi-breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    },
    customSeparatorClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {
    
  },
}
</script>