import Vue from 'vue'
import messagebox from '../../components/messageBox'
import { isEmptyObject } from '../../utils/helper'

const confirm = (options = {}) => {
  return new Promise((resolve, reject) => {
    options = options || {}
    if (typeof options !== 'object' || isEmptyObject(options)) return

    const MyComponent = Vue.extend(messagebox)

    const component = new MyComponent({
      data: options,
      methods: {
        onConfirm () {
          this.show = false
          resolve()
        },
        onCancel () {
          this.show = false
          reject()
        }
      }
    })

    component.show = true
    component.$mount()

    document.getElementsByTagName('body')[0].appendChild(component.$el)
  })
}

export default {
  name: 'confirm',
  fn: confirm
}
