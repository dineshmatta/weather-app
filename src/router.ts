import Vue from 'vue';
import Router from 'vue-router';
import Toronto from './views/weather/Toronto.vue';
// import Montreal from './views/weather/Montreal.vue';
// import Gallery from './views/Gallery.vue';
// import Contact from './views/Contact.vue';

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
      component: () => import(/* webpackChunkName: "about" */ './views/weather/Toronto.vue'),
    },
    {
      path: '/weather/montreal',
      name: 'Montreal',
      component: () => import(/* webpackChunkName: "about" */ './views/weather/Montreal.vue'),
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
    },
  ],
});
