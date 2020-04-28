import Vue from 'vue'
import { isEmptyObject } from '../../utils/helper'
import noticeation from '../../components/noticeation'
let instances = []
let seed = 1
const Noticeations = (options = {}) => {
  options = options || {}
  if (typeof options !== 'object' || isEmptyObject(options)) return
  const MyComponent = Vue.extend(noticeation)
  const id = `noticeation-${seed++}`

  options.closeFn = function() {
    Noticeations.closeFn(id)
  }
  options.top = options.top === 0 ? 0 : (options.top || 20)
  instances.forEach(v => {
    if (v.isNewOn) {
      v.top += v.$el.offsetHeight + 16
    } else {
      options.top += v.$el.offsetHeight + 16
    }
  })
  const component = new MyComponent({
    data: options,
  })

  component.show = true
  component.id = id
  component.$mount()
  
  instances.push(component)
  document.getElementsByTagName('body')[0].appendChild(component.$el)
  
  return component
}
const statusList = ['alert', 'success', 'info', 'warning', 'danger']
statusList.forEach(v => {
  Noticeations[v] = function(options) {
    options = options || {}
    options['type'] = v
    return Noticeations(options)
  }
})

Noticeations.closeFn = function(id) {
  const len = instances.length;
  const instance = instances.filter(v => v.id === id)[0]
  const index = instances.findIndex(v => v.id === id)

  if (index < 0) return
  instances.splice(index, 1);
  if (len <= 1) return

  const removedHeight = instance.$el.offsetHeight;
  if (instance.isNewOn) {
    for (let i = 0; i < index ; i++) {
      instances[i].top = (parseInt(instances[i].top, 10) - removedHeight - 16)
    }
    return
  }
  for (let i = index; i < len - 1 ; i++) {
    instances[i].top = parseInt(instances[i].top, 10) - removedHeight - 16 
  }
}

export default {
  name: 'notice',
  fn: Noticeations
}