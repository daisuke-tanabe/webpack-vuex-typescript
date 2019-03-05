// import: node_modules
import Vue from 'vue';
import Router from 'vue-router';

// import: pages component
const Top = () => import(/* webpackChunkName: 'top' */ './components/pages/Top/index.vue');
const Posts = () => import(/* webpackChunkName: 'posts' */ './components/pages/Posts/index.vue');
const PostsDetail = () => import(/* webpackChunkName: 'postsDetail' */ './components/pages/Posts/detail.vue');
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
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/posts/:id',
      name: 'postsDetail',
      component: PostsDetail,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
    },
  ],
});
