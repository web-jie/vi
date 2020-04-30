<template>
  <div class="vi-date-picker_week">
    <span v-for="(item, index) in weekList" :key="index" class="vi-date-item">{{item}}</span>
  </div>
</template>

<script>
export default {
  props: {
    weekList: {
      type: Array,
      default: () => []
    }
  }
}
</script>