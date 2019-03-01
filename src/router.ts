// import: node_modules
import Vue from 'vue';
import Router from 'vue-router';

// import: pages component
const Top = () => import(/* webpackChunkName: 'top' */ './components/pages/Top/index.vue');
const Calculator = () => import(/* webpackChunkName: 'calculator' */ './components/pages/Calculator/index.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
    },
  ],
});
