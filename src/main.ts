// import: node_modules
import Vue from 'vue';
import App from './App.vue';

// import: router
import router from './router';

// import: store
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
