<template>
  <div class="vi-date-picker_days">
    <span 
      v-for="(item, index) in dayList" 
      :key="index" 
      :class="daysClasses(item)"
      class="vi-date-item vi-date-days_item"
      @click.stop="onSelect(item)">
      <span class="vi-date-item_days-inner" :class="innerClasses(item)">
        {{item.days}}
      </span>
    </span>
  </div>
</template>

<script>
import timeUtils from '../format'
export default {
  props: {
    dayList: {
      type: Array,
      default: () => []
    },
    currentDate: [Date],
    selectDate: {
      type: String,
      default: ''
    },
    format: [String]
  },
  mounted() {
    
  },
  methods: {
    daysClasses(item) {
      return [
        (item.type === 'up' || item.type === 'next') && 'is-up',
      ]
    },
    innerClasses(item) {
      return [
        timeUtils.formatDatetime(new Date(item.year, item.month - 1, item.days), this.format) === this.selectDate && 'is-active',
        timeUtils.formatDatetime(new Date(item.year, item.month - 1, item.days), this.format) === timeUtils.formatDatetime(this.currentDate, this.format) ? 
        'is-current': 
        ''
      ]
    },
    onSelect(item) {
      this.$emit('change', new Date(item.year, item.month - 1, item.days), 'days')
    }
  },
}
</script>