import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from './httpConfig/http';
// boostrap
import 'bootstrap/dist/css/bootstrap.css';

// icons fonts
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
