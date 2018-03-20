import { mutationTypes } from './mutations';

export default {
  showLoading({ commit }, payload) {
    commit(mutationTypes.SHOW_LOADING, payload);
  },

  forceLoading({ commit }, payload) {
    commit(mutationTypes.SET_LOADING, payload);
  },
};
