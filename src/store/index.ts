import Vue from 'vue';
import Vuex from 'vuex';

import posts from './modules/posts';
import post from './modules/post';
import calculator from './modules/calculator';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    post,
    calculator,
  },
});
