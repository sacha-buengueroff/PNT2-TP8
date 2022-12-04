import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './axios'
import './bootstrap'
import {router} from './router'
import './form'
import store from './store'
import './globalMixins'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
