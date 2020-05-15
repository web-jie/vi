<template>
  <div class="vi-date-picker_header">
    <span class="vi-date-picker_header-arrow">
      <span @click.stop="change('backYear')" class="">
        <vi-icon name="backward" size="10"></vi-icon>
      </span>
      <span @click.stop="change('backMonth')" class="vi-date-picker_month-arrow"><vi-icon name="left" size="10"></vi-icon></span>
    </span>
    <span class="vi-date-picker_header-label">{{dateOptions.year}} 年 {{dateOptions.month}} 月</span>
    <span class="vi-date-picker_header-arrow">
      <span @click.stop="change('nextMonth')" class="vi-date-picker_month-arrow">
        <vi-icon name="right" size="10"></vi-icon>
      </span>
      <span @click.stop="change('nextYear')"><vi-icon name="forward" size="10"></vi-icon></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    dateOptions: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    change(type) {
      const date = new Date(this.dateOptions.year, this.dateOptions.month - 1, 1)
      if (type === 'backYear') {
        date.setFullYear(this.dateOptions.year - 1)
      }
      if (type === 'backMonth') {
        date.setDate(0)
      }
      if (type === 'nextYear') {
        date.setFullYear(this.dateOptions.year + 1)
      } 
      if (type === 'nextMonth') {
        date.setMonth(this.dateOptions.month)
      }
      this.$emit('changeDate', date)
      this.$emit('updatePosition')
    },
  },
}
</script>