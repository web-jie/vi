import message from './views/message'
import mask from './views/mask'
import messageBox from './views/messageBox'
import noticeation from './views/noticeation'

const list = [
  message,
  mask,
  messageBox,
  noticeation
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
          ['$' + toLowerCase(v.name)]: v.fn
        }
      } else {
        Vue.prototype['$' + toLowerCase(v.name)] = v.fn
      }
    })
  }
}
