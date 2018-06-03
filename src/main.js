// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import plugin from '@/plugins'

import cookie from 'cookies-js'
import './router/intercepter'

window.Cookies = cookie
Vue.config.productionTip = false

Vue.use(plugin, {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
