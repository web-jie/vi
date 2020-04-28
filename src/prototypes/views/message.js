import Vue from 'vue'
import message from '../../components/message'

let instances = []
let seed = 1
const Message = (options) => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }
  const MyComponent = Vue.extend(message)
  const id = `noticeation-${seed++}`

  options.closeFn = function (id) {
    Message.closeFn(id)
  }

  options.newTop = options.top === 0 ? 0 : (options.top || 30)

  options.upTop = instances.length ? instances[instances.length - 1].top : 0

  instances.forEach(v => {
    options.newTop += v.$el.offsetHeight + 16
  })

  options.top = options.upTop
  const component = new MyComponent({
    data: options,
    mounted() {
      options.top = options.newTop
    },
  })

  component.show = true
  component.id = id
  component.$mount()

  instances.push(component)
  document.getElementsByTagName('body')[0].appendChild(component.$el)

  return component
}
Message.closeFn = function (id) {
  const len = instances.length;
  const instance = instances.filter(v => v.id === id)[0]
  const index = instances.findIndex(v => v.id === id)

  if (index < 0) return
  Message.closeFn()
  instances.splice(index, 1);
  if (len <= 1) return

  const removedHeight = instance.$el.offsetHeight;

  for (let i = index; i < len - 1 ; i++) {
    instances[i].top = parseInt(instances[i].top, 10) - removedHeight - 16 
  }
}

const typeList = ['success', 'info', 'warning', 'danger']
typeList.forEach(v => {
  Message[v] = function (options) {
    options = options || {}
    if (typeof options === 'string') {
      options = {
        content: options
      }
    }
    options['type'] = v
    return Message(options)
  }
})

export default {
  name: 'message',
  fn: Message
}
