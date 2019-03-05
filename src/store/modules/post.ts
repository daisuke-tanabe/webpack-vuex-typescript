import axios from 'axios';

interface State {
  post:
    | {
        id: number;
        title: string;
        description: string;
      }
    | {};
}

const state: State = {
  post: {},
};

const getters = {
  post(_state: State) {
    return _state.post;
  },
};

const mutations = {
  fetchPost(_state: State, { post }: { post: State }) {
    _state.post = post;
  },
};

const actions = {
  async fetchPost({ commit }: { commit: any }, { id }: { id: number }) {
    const post = await axios.get(`http://localhost:3031/posts/${id}`).then((res) => res.data);
    commit('fetchPost', { post });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
