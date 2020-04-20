<template>
  <div class="vi-form-item" :class="formItemClasses">
    <div class="vi-form_label" :style="labelStyles">
      <span v-if="isRequired" class="vi-form_required">*</span>{{label}}
    </div>
    <div class="vi-form_inner" :style="contentStyles">
      <slot :info="{errMsg}"></slot>
      <transition
      appear
      name="tips"
      v-if="isErr">
        <p class="vi-form-err_tips">{{errMsg}}</p>
      </transition>
    </div>
  </div>
</template>

<script>
import { getPx, getParent } from '../../utils/helper'

export default {
  name: 'vi-form-item',
  props: {
    label: [String],
    width: {
      type: [Number, String],
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    },
    prop: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'blur'
    }
  },
  provide () {
    return {
      ViFormItemOptions: this
    }
  },
  data () {
    return {
      errMsg: '',
      isSuccessFlag: true,
      isShowLastBorder: false,
      formValue: '',
      isProp: true
    }
  },
  computed: {
    isErr () {
      return !this.parentValue.isCustomErrtip && this.errMsg
    },
    // 规则数组
    rulesList () {
      return [
        ...this.rules,
        ...(this.parentValue.rules || {})[this.prop] || []
      ]
    },
    isRequired () {
      return this.rulesList.some(v => v.required)
    },
    formItemClasses () {
      return [
        this.parentValue.inline && 'vi-form-item_inline',
        `vi-form-item-${this.parentValue.labelPosition}`,
        this.errMsg && 'vi-form_err-item'
      ]
    },
    parentValue () {
      return getParent(this, 'vi-form')
    },
    labelStyles () {
      return {
        width: getPx(this.width || this.parentValue.labelWidth)
      }
    },
    contentStyles () {
      return {
        marginLeft: getPx(this.parentValue.labelPosition === 'top' ? 0 : (this.width || this.parentValue.labelWidth))
      }
    }
  },
  mounted () {},
  methods: {
    events (type) {
      if (this.trigger === type) {
        this.validate()
      }
    },
    validate (fn) {
      this.formValue = this.getFormValue()
      // 如果没有校验规则或prop值不存在表单属性上
      if (!this.rulesList.length || !this.isProp) {
        fn && fn(true)
        return
      }
      const vm = this
      // 自定义回调处理方法
      const check = function (val) {
        // 此时this即是规则对象
        if (val !== undefined) {
          vm.errMsg = val.message || this.message || 'error'
          vm.isSuccessFlag = false
        } else {
          vm.isSuccessFlag = true
        }
        this.implement && this.implement(vm.isSuccessFlag, vm.errMsg)
        fn && fn(vm.isSuccessFlag)
      }

      // 遍历规则
      this.rulesList.forEach(v => {
        // 存在不为空属性 ,  则校验不为空
        if (v.required) {
          this.implementCallback(v, /\S/)
          fn && fn(this.isSuccessFlag)
        }
        // 如果有自定方法， 则优先校验
        if (v.validator && typeof v.validator === 'function') {
          v.validator(v, this.formValue, check.bind(v))
        } else {
          // 如果有正则
          if (v.reg) {
            this.implementCallback(v, v.reg)
            fn && fn(this.isSuccessFlag)
          }
        }
        // 如果有不通过的情况下， 则不继续往下校验
        // if (!this.errMsg) {
        //   // 存在不为空属性 ,  则校验不为空
        //   if (v.required) {
        //     this.implementCallback(v, /\S/)
        //     fn && fn(this.isSuccessFlag)
        //   }
        //   // 如果有自定方法， 则优先校验
        //   if (v.validator && typeof v.validator === 'function') {
        //     v.validator(v, this.formValue, check.bind(v))
        //   } else {
        //     // 如果有正则
        //     if (v.reg) {
        //       this.implementCallback(v, v.reg)
        //       fn && fn(this.isSuccessFlag)
        //     }
        //   }
        // } else {
        //   // 如果有在错误状态， 直接返回false
        //   fn && fn(false)
        //   v.implement && v.implement(vm.isSuccessFlag, vm.errMsg)
        // }
      })
    },

    implementCallback (v, reg) {
      this.isSuccessFlag = new RegExp(reg).test(this.formValue)
      this.errMsg = this.isSuccessFlag ? '' : v.message || 'error'
      v.implement && v.implement(this.isSuccessFlag, this.errMsg, v)
    },

    getFormValue () {
      // 得到要校验的form表单值
      let formsValue = this.parentValue.ruleForm
      let propList = this.prop.split('.')
      // 将多层嵌套对象的值提取出来
      propList.map(v => {
        if (typeof formsValue === 'object' && !formsValue.hasOwnProperty(v)) {
          this.isProp = false
          return
        }
        formsValue = formsValue[v] || ''
      })
      return formsValue
    }
  }
}
</script>
