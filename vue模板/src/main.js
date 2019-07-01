import "@/css/App.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';

import Tool from "./libs";
import Interface from "./interface"

import  AxioConfig  from "./config"
AxioConfig(axios);

import Vconsole from 'vconsole'
 //new Vconsole()
Vue.config.productionTip = false
Vue.use(YDUI);
Vue.use(VueAxios,axios);
Vue.use(Tool);
Vue.use(Interface);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

