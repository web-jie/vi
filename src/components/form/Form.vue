<template>
  <div class="vi-form" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vi-form',
  props: {
    ruleForm: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelWidth: {
      type: [String, Number],
      default: 80
    },
    isCustomErrtip: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    validate (callback) {
      const childrenList = this.$children
      let flagList = []
      childrenList.map((v, index) => {
        v.validate(val => {
          flagList.push(val)
          if (index === childrenList.length - 1) {
            callback(flagList.every(v => v))
          }
        })
      })
    },
    resetFields () {
      // this.ruleForm = =
    },
    resetValidate () {
      const childrenList = this.$children
      childrenList.map(v => {
        v.errMsg = ''
      })
    }
  }
}
</script>
