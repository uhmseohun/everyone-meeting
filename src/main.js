import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './registerServiceWorker'

import axios from 'axios'
import VueSwal from 'vue-swal'

Vue.prototype.$api = axios.create()
Vue.use(VueSwal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
