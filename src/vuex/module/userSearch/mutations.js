/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Utils from '@/utils/function';
import state from './state';

const mutations = {

  /**
   * @description Seta o resultado da pesquisa.
   * @param {array} payload O resultado da pesquisa.
   */
  SET_USER_SEARCH_RESULTS(state, payload) {
    state.userSearchResults = payload;
  },
};

export const mutationTypes = Utils.getEnumLike(mutations);

export default mutations;
