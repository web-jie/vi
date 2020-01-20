import Components from './components'
import Directives from './directives'
import Prototypes from './prototypes'

export default {
  install: (Vue, options = {}) => {
    // 注册组件
    Vue.use(Components)
    // 注册指令
    Vue.use(Directives)
    // 注册实例方法
    Vue.use(Prototypes, {scope: options.scope})
  }
}
