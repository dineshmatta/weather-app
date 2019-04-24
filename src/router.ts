import Vue from 'vue';
import Router from 'vue-router';
import Toronto from './views/weather/Toronto.vue';
import Montreal from './views/weather/Montreal.vue';
import Gallery from './views/Gallery.vue';
import Contact from './views/Contact.vue';

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
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
