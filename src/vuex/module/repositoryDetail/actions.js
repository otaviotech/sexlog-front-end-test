import GithubRepository from '@/shared/repositories/github';
import { mutationTypes } from './mutations';

export default {
  async getRepository({ commit, dispatch }, { username, rep }) {
    dispatch('common/showLoading', true, { root: true });
    GithubRepository.Repositories.Get(username, rep)
      .then((res) => {
        dispatch('common/showLoading', false, { root: true });
        commit(mutationTypes.SET_REPOSITORY, res.data);
        return true;
      })
      .catch(() => {
        dispatch('common/showLoading', false, { root: true });
      });
  },
};
