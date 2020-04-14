import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vi from '../src'
import DemoBlock from '../md/demo-block'

import '../md/styles/index.scss'
import './docs-styles/index.scss'

Vue.use(vi)
Vue.use(DemoBlock)

Vue.config.productionTip = false
Vue.prototype.$example = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
