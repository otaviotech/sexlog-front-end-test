import QueryBuilderService from '@/shared/services/queryBuilder';
import GithubRepository from '@/shared/repositories/github';
import { mutationTypes } from './mutations';

export default {
  searchUser({ commit }, payload) {
    // dispatch('common/mostrarCarregando', true, { root: true });
    const queryString = QueryBuilderService.stringifyQueryObject(payload);

    GithubRepository.Users.Search(queryString)
      .then((res) => {
        // dispatch('common/mostrarCarregando', true, { root: true });
        commit(mutationTypes.SET_USER_SEARCH_RESULTS, res.data.items);
      })
      .catch(() => {
        // dispatch('common/mostrarCarregando', true, { root: true });
        // err.foo();
      });
  },
};
