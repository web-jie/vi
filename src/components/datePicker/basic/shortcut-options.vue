<template>
  <div class="vi-datepicker-options">
    <div class="vi-datepicker-options_inner" 
    v-for="(item, index) in shortOptions.shortList" :key="index" @click="onClick(item)">
    {{item.label}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shortOptions: {
      type: Object,
      default: () => ({})
    },
    selectDate: {
      type: String,
      default: ''
    }
  },
  computed: {
    
  },
  methods: {
    onClick(item) {
      let date = null
      if (item.onClick) {
        this.$emit('change', new Date(item.onClick(this.selectDate)))
      }
    }
  },
}
</script>