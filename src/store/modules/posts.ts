import axios from 'axios';

interface State {
  posts:
    | [
        {
          id: number;
          title: string;
          description: string;
        }
      ]
    | [];
}

const state: State = {
  posts: [],
};

const getters = {
  posts(_state: State) {
    return _state.posts;
  },
};

const mutations = {
  fetchPosts(_state: State, { posts }: { posts: State }) {
    _state.posts = posts;
  },
};

const actions = {
  async fetchPosts({ commit }: { commit: any }) {
    const posts = await axios.get('http://localhost:3031/posts').then((res) => res.data);
    commit('fetchPosts', { posts });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
