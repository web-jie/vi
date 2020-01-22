import message from './views/message'
import mask from './views/mask'

const list = [
  message,
  mask
]

const toLowerCase = (val) => {
  if (!val || typeof val !== 'string') return
  return val.replace(val[0], val[0].toLowerCase())
}
export default {
  install (Vue, options = {}) {
    let namespace = options.scope
    list.forEach(v => {
      if (namespace) {
        Vue.prototype[namespace] = {
          ['$' + toLowerCase(v.name)]: v
        }
      } else {
        Vue.prototype['$' + toLowerCase(v.name)] = v
      }
    })
  }
}
