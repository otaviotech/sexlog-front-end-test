/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Utils from '@/utils/function';
import state from './state';

const mutations = {

  SET_REPOSITORY(state, payload) {
    state.repository = payload;
  },

  /**
   * @description Reseta o state.
   */
  RESET_STATE(state) {
    state.repository = undefined;
  },
};

export const mutationTypes = Utils.getEnumLike(mutations);

export default mutations;
