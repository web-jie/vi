import Components from './components'
import Directives from './directives'
import Prototypes from './prototypes'
import utils from './utils'
import './styles/index.scss'

// 定义 install 方法
const install = function (Vue, options = {}) {
  // 注册组件
  Vue.use(Components)
  // 注册指令
  Vue.use(Directives)
  // 注册实例方法
  Vue.use(Prototypes, { scope: options.scope })
  // 注册全局方法
  Vue.use(utils)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
