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
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
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
  watch: {
    ruleForm: {
      handler (newval, oldval) {
        this.$children.forEach(v => {
          v.getParentData()
        })
      },
      deep: true
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
    }
  }
}
</script>
