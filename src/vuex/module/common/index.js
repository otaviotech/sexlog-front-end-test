import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

export const MODULE_NAME = 'common';
export const MODULE_NAMESPACE = 'Common';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
