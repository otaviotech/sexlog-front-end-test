/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Utils from '@/utils/function';
import state from './state';

const mutations = {

  /**
   * @description Exibe carregando, acrescendo o counter em 1.
   */
  SHOW_LOADING(state, payload) {
    state.loadingCount += (payload ? +1 : -1);
    state.isLoading = state.loadingCount > 0;
  },

  /**
   * @description Força o loader a ser exibido.
   */
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },

  /**
   * @description Reseta o state.
   */
  RESET_STATE(state) {
    state.loadingCount = 0;
    state.isLoading = false;
  },
};

export const mutationTypes = Utils.getEnumLike(mutations);

export default mutations;
