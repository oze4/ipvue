import Vue from 'vue'
import './plugins/vuetify'
import './plugins/leaflet.js'
import App from './App.vue'
import Cookies from './plugins/cookies.js'

if (location.protocol === "https:") {
  Cookies.set('____vipmapperredirection____', 'true', 1);
  location.replace("http://" + location.hostname);
} else {

  Vue.config.productionTip = false

  new Vue({
    render: h => h(App),
  }).$mount('#root')
}