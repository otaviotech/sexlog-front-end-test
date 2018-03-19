import GithubRepository from '@/shared/repositories/github';
import { mutationTypes } from './mutations';

export default {
  async getRepository({ commit }, { username, rep }) {
    // dispatch('common/mostrarCarregando', true, { root: true });
    GithubRepository.Repositories.Get(username, rep)
      .then((res) => {
        // dispatch('common/mostrarCarregando', true, { root: true });
        commit(mutationTypes.SET_REPOSITORY, res.data);
        return true;
      })
      .catch(() => false);
  },
};
