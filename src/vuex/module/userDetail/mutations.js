/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Utils from '@/utils/function';
import state from './state';

const mutations = {

  /**
   * @description Seta o resultado da pesquisa.
   * @param {array} payload O resultado da pesquisa.
   */
  SET_USER(state, payload) {
    state.user = payload;
  },

  SET_USER_REPOS(state, payload) {
    state.userRepos = payload;
  },

  /**
   * @description Reseta o state.
   */
  RESET_STATE(state) {
    state.user = undefined;
  },
};

export const mutationTypes = Utils.getEnumLike(mutations);

export default mutations;
