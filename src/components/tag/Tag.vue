<script>
export default {
  name: 'vi-tag',
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    insideAdd: {
      type: Boolean,
      default: false
    },
    insideAddBefore: null,
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: true,
      list: [],
      isAdd: false
    }
  },
  computed: {
    classes() {
      return [
        'vi-tag',
        this.type && `vi-tag_${this.type}`,
        this.size && `vi-tag_${this.size}`
      ]
    },
    styles() {
      return {
        backgroundColor: this.color,
        color: this.color && '#fff',
        borderColor: this.color
      }
    }
  },
  methods: {
    onClicks() {
      this.$emit('click')
    },
    onClose(index) {
      const event = window.event || arguments.callee.caller.arguments[0]
      event.stopPropagation()
      if (typeof index === 'number') {
        this.list.splice(index, 1)
      } else {
        this.show = false
      }
      this.$emit('close')
    },
    onAdd() {
      this.isAdd = true
      this.$nextTick(_ => {
        this.$refs.input.focus()
      })
    },
    blur(e) {
      if (this.insideAddBefore && typeof this.insideAddBefore === 'function') {
        this.insideAddBefore(e.target.value, () => {
          this.list.splice(this.list.length, 0, {
            text: e.target.value,
          })
        })
      } else {
        this.list.splice(this.list.length, 0, {
          text: e.target.value
        })
      }
      this.isAdd = false
    }
  },
  render(h) {
    let ele = null
    const clearableEle = <span  class="vi-tag_clearable" on-click={this.onClose}>
                            <vi-icon name="close" size={this.size === 'mini' ? 12 : 14} isDefaultColor={false}/>
                         </span>
    if (this.insideAdd) {
      ele = (
        <div class="vi-tag-insideAdd">
          {
            this.list.map((v, index) => 
              <div class={this.classes} style={this.styles} key={index} on-click={this.onClicks}>
                {v.text}
                {
                  this.clearable && 
                    <span class="vi-tag_clearable" on-click={this.onClose.bind(this, index)}>
                      <vi-icon name="close" size={this.size === 'mini' ? 12 : 14} isDefaultColor={false}/>
                    </span>
                  }
              </div>
            )
          }
          {this.isAdd ? (
              <vi-input width={150 + 'px'} ref="input" on-blur={this.blur} size={this.size} />
            ) : (
              <vi-button on-click={this.onAdd} size={this.size}>+ {this.$slots.default}</vi-button>
            )}  
        </div>
      )
    } else {
      ele = (
        <transition name="vi-tag" appear>
          <div class={this.classes} style={this.styles} on-click={this.onClicks}>
            {this.$slots.default}
            {this.clearable && clearableEle}
          </div>
        </transition>
      )
    }
    return this.insideAdd ? ele : this.show && ele
  }
}
</script>