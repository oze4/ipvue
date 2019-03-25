import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker.js';
import Snackbar from './components/Snackbar.vue';

Vue.config.productionTip = false

Vue.component('snackbar', Snackbar)

new Vue({
  render: h => h(App)
}).$mount('#root')