import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAxios from "vue-axios";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
