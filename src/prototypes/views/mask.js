import Vue from 'vue'
import mask from '../../components/mask'

let flag = false

const ViMask = (options) => {
  if (flag) return
  options = options || {}
  options.closeFlag = function () {
    toggle()
  }
  const MyComponent = Vue.extend(mask)
  const component = new MyComponent({
    data: options
  })
  component.show = true
  component.$mount()
  document.getElementsByTagName('body')[0].appendChild(component.$el)
  flag = true
  return component
}

const toggle = () => {
  flag = false
}
export default ViMask
