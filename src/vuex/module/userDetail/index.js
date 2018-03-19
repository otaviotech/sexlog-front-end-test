import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

export const MODULE_NAME = 'userDetail';
export const MODULE_NAMESPACE = 'UserDetail';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
