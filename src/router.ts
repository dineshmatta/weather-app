import Vue from 'vue';
import Router from 'vue-router';
import Toronto from './views/weather/Toronto.vue';
import Montreal from './views/weather/Toronto.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Toronto,
    },
    {
      path: '/weather/toronto',
      name: 'Toronto',
      component: Toronto,
    },
    {
      path: '/weather/montreal',
      name: 'Montreal',
      component: Montreal,
    },
  ],
});
