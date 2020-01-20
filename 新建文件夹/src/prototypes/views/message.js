import Vue from 'vue'
import message from '../../components/message/'

const messageFn = (info = {}) => {
  const MyComponent = Vue.extend(message)
  const component = new MyComponent({
    propsData: {
      info
    }
  }).$mount()
  document.getElementsByTagName('body')[0].appendChild(component.$el)
}
export default {
  name: 'message',
  fn: messageFn
}
