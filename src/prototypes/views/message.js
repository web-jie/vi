import Vue from 'vue'
import message from '../../components/message'

let list = []
let seed = 1
const Message = (options) => {
  options = options || {}
  const MyComponent = Vue.extend(message)

  let verticalOffset = options.top || 30
  list.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })

  options.close = function (id) {
    Message.close(id)
  }
  
  const component = new MyComponent({
    data: options
  })
  component.id = 'message-' + seed++
  component.componentTop = verticalOffset
  if (list.length) {
    component.nextStartTop = verticalOffset - 16
  }
  component.$mount()
  document.getElementsByTagName('body')[0].appendChild(component.$el)
 
  list.push(component)
  // console.log(component.$el.offsetHeight, 'dsds')
}
Message.close = function (id) {
  const findIndex = list.findIndex(v => v.id === id)
  const removeEl = list[findIndex].$el
  const removeHeight = removeEl.offsetHeight
  removeEl.parentNode.removeChild( removeEl)
  if (list[findIndex].beforeClose) {
    list[findIndex].beforeClose(list[findIndex])
  }
  list.splice(findIndex, 1)
  list.forEach((item, index) => {
    if (index > findIndex - 1) {
      item.componentTop = parseInt(item.$el.style.top, 10) - removeHeight - 16
      item.animations()
    }
  })
}
export default {
  name: 'message',
  fn: Message
}
