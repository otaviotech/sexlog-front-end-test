import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

export const MODULE_NAME = 'repositoryDetail';
export const MODULE_NAMESPACE = 'RepositoryDetail';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
