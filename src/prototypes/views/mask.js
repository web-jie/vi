import Vue from 'vue'
import mask from '../../components/mask'

let component = null
let count = 0
const vm = new Vue()

const ViMask = (options) => {
  if (vm.$VIELEMENT.mask) {
    vm.$VIELEMENT.setZIndex()
    component.zIndex = vm.$VIELEMENT.getZIndex()
    component.count++
    return component
  }
  options = options || {}
  const MyComponent = Vue.extend(mask)
  component = new MyComponent({
    data: options
  })
  component.show = true
  component.count = count
  component.$mount()
  document.getElementsByTagName('body')[0].appendChild(component.$el)
  Vue.prototype.$VIELEMENT.mask = component
  return component
}
export default ViMask
