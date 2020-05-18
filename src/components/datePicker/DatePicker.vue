<template>
  <div class="vi-date-picker" ref="datePicker">
    <vi-input 
      readonly
      ref="input"
      v-model="inputValue"
      :class="inputClasses"
      :disabled="disabled"
      :size="size"
      :clearableIsFocus="false"
      :clearable="clearable"
      :prefix-icon="prefixIcon"
      @focus="onFocus"
      :placeholder="placeholder">
    </vi-input>

    <transition name="vi-date-picker" appear @afterLeave="afterLeave" >
      <div class="vi-date-picker_panel" v-show="isShow" @click.stop="preventStop" ref="panel">
        <template v-if="isShortOptions">
          <shortcutOptions 
          @change="change"
          :selectDate="inputValue"
          :shortOptions="shortOptions"/>
        </template>
        <div>
          <yearView 
          @changeDate="getDate"
          @updatePosition="updatePosition"
          :dateOptions="dateOptions"/>
          <div class="vi-date-picker_content">
            <weekView 
            :weekList="weekList"/>
            <daysView 
            :format="format"
            :currentDate="new Date()"
            :selectDate="inputValue"
            :dayList="dayList"
            @change="change"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getWeek } from '../../utils/helper'
import yearView from './basic/year'
import weekView from './basic/week'
import daysView from './basic/days'
import shortcutOptions from './basic/shortcut-options'
import timeUtils from './format'
import { bindWindowsEvent, removeWindowsEvent } from '../../utils/index'
import { isEmptyObject } from '../../utils/helper'
import Popper from 'v-poppers'

export default {
  components: {
    yearView,
    weekView,
    daysView,
    shortcutOptions
  },
  name: 'vi-date-picker',
  props: {
    value: [String, Date],
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '选择日期'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    valueFormat: [String, Date],
    prefixIcon: {
      type: String,
      default: 'date'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    shortOptions: {
      type: Object,
      default: () => ({})
    },
    isAppendParentNode: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      inputValue: '',
      isShow: false,
      dateOptions: {
        year: '',
        month: '',
        days: '',
        weekDay: ''
      },
      currentOptions: {
        year: '',
        month: '',
        days: '',
        weekDay: ''
      },
      weekList: [],
      dayList: [],
      isFirstFlag: true,
      currentSeed: '',
      currentDate: '',
      popperOptions: {
        trackPosition: '',
        className: {
          'top': ['vi-wrap_top-transition'],
          'bottom': ['vi-wrap_bottom-transition']
        },
        offset: {
          y: 8
        }
      },
      popperVm: null
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        bindWindowsEvent(this, 'click', false)
      } else {
        removeWindowsEvent(this, 'click')
      }
    },

    inputValue(val) {
      const date = new Date(val)
      this.dateOptions.year = date.getFullYear()
      this.dateOptions.month = date.getMonth() + 1
      this.getDate(val)
      if (typeof this.valueFormat !== 'string') {
        this.$emit('input', new Date(val))
      } else {
        this.$emit('input', timeUtils.formatDatetime(val, this.valueFormat))
      }
    }
  },
  computed: {
    inputClasses() {
      return [
        this.isShow && 'is-Focus'
      ]
    },
    isShortOptions() {
      return !isEmptyObject(this.shortOptions) && this.shortOptions.shortList && this.shortOptions.shortList .length
    }
  },
  created() {
    this.popperOptions.isAppendParentNode = this.isAppendParentNode
    this.getDate(this.value)
  },
  mounted() {
    this.setInputVal()
    this.popperVm = new Popper(this.$refs.panel, this.$el, this.popperOptions)
  },
  beforeDestroy() {
    this.popperVm.destroy()
  },
  methods: {
    onFocus(e) {
      this.isShow = true
      this.$nextTick(_ => {
        this.popperVm.show()
      })
    },
    preventStop() {},
    windowCallback(e) {
      if (!this.isFirstFlag) {
        this.blur()
      }
      this.isFirstFlag = false
    },
    change(date) {
      this.inputValue = timeUtils.formatDatetime(date, this.format)
      this.isShow = false
    },
    afterLeave() {
      this.isFirstFlag = true
    },
    blur () {
      this.isShow = false
      this.$refs.input && this.$refs.input.blur()
    },
    setInputVal() {
      this.inputValue = this.value && timeUtils.formatDatetime(this.value, this.format)
    },
    updatePosition() {
      this.popperVm.update()
    },
    getDate(val) {
      this.weekList = []
      this.dayList = []

      const date = val ? new Date(val) : new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      const days = date.getDate()
      const weekDay = date.getDay()
      // 月初是周几
      const initMonthWeek = new Date(`${year}-${month + 1}-${1}`).getDay()
      // 一个月有多少天
      const currentMonthDays = new Date(year, month + 1, 0).getDate()

      this.dateOptions = {
        year,
        month: month + 1,
        days,
        weekDay
      }
      
      for(let i = 0; i < 7; i++) {
        this.weekList.push(getWeek(i))
      }

      const upDate = val ? new Date(val) : new Date()
      upDate.setDate(0)
      const upMonthDays = upDate.getDate()

      const nextDate = val ? new Date(val) : new Date()
      nextDate.setDate(currentMonthDays + 1)

      // 下个月月初第一天是周几
      const lastWeekDays = new Date(year, month, currentMonthDays).getDay()

      for(let i = initMonthWeek - 1; i >= 0; i--) {
        this.dayList.push({
          type: 'up',
          days: upMonthDays - i,
          year: upDate.getFullYear(),
          month: upDate.getMonth() + 1
        })
      }

      for(let i = 1; i <= currentMonthDays; i++) {
        this.dayList.push({
          type: 'current',
          days: i,
          year,
          month: month + 1
        })
      }

      for(let i = 1; i <= 6 - lastWeekDays; i++) {
        this.dayList.push({
          type: 'next',
          days: i,
          year: nextDate.getFullYear(),
          month: nextDate.getMonth() + 1
        })
      }
    },
  },
}
</script>