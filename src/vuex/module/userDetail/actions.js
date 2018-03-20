import GithubRepository from '@/shared/repositories/github';
import { mutationTypes } from './mutations';

export default {
  async getUser({ commit, dispatch }, payload) {
    dispatch('common/showLoading', true, { root: true });
    GithubRepository.Users.Get(payload)
      .then((res) => {
        dispatch('common/showLoading', false, { root: true });
        commit(mutationTypes.SET_USER, res.data);
        return true;
      })
      .catch(() => {
        dispatch('common/showLoading', false, { root: true });
      });
  },

  async getUserRepos({ commit, dispatch }, payload) {
    dispatch('common/showLoading', true, { root: true });
    GithubRepository.Users.GetUserRepos(payload)
      .then((res) => {
        dispatch('common/showLoading', false, { root: true });
        commit(mutationTypes.SET_USER_REPOS, res.data);
        return true;
      })
      .catch(() => {
        dispatch('common/showLoading', false, { root: true });
      });
  },
};
