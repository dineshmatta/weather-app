import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/css/weather-icons.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
