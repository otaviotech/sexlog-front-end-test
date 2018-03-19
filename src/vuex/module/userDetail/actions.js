import GithubRepository from '@/shared/repositories/github';
import { mutationTypes } from './mutations';

export default {
  async getUser({ commit }, payload) {
    // dispatch('common/mostrarCarregando', true, { root: true });
    GithubRepository.Users.Get(payload)
      .then((res) => {
        // dispatch('common/mostrarCarregando', true, { root: true });
        commit(mutationTypes.SET_USER, res.data);
        return true;
      })
      .catch(() => false);
  },

  async getUserRepos({ commit }, payload) {
    // dispatch('common/mostrarCarregando', true, { root: true });
    GithubRepository.Users.GetUserRepos(payload)
      .then((res) => {
        // dispatch('common/mostrarCarregando', true, { root: true });
        commit(mutationTypes.SET_USER_REPOS, res.data);
        return true;
      })
      .catch(() => false);
  },
};
