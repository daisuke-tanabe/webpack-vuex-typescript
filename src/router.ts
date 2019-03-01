// import: node_modules
import Vue from 'vue';
import Router from 'vue-router';

// import: pages component
import Top from './components/pages/Top/index.vue';
import Calculator from './components/pages/Calculator/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Top,
    },
    {
      path: '/calculator',
      component: Calculator,
    },
  ],
});
