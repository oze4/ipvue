import Vue from 'vue';
import './plugins/vuetify';
import './plugins/leaflet.js';
import App from './App.vue';
import './registerServiceWorker.js';
import snackbar from './components/Snackbar.vue';

Vue.config.productionTip = false

Vue.component('snackbar', snackbar)

new Vue({
  render: h => h(App),
}).$mount('#root')