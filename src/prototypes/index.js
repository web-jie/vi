import message from './views/message'

const list = [
  message
]

export default {
  install (Vue, options = {}) {
    let namespace = options.scope
    list.forEach(v => {
      if (namespace) {
        Vue.prototype[namespace] = {
          ['$' + v.name]: v.fn
        }
      } else {
        Vue.prototype['$' + v.name] = v.fn
      }
    })
  }
}
