import QueryBuilderService from '@/shared/services/queryBuilder';
import GithubRepository from '@/shared/repositories/github';
import { mutationTypes } from './mutations';

export default {
  searchUser({ commit, dispatch }, payload) {
    dispatch('common/showLoading', true, { root: true });
    const queryString = QueryBuilderService.stringifyQueryObject(payload);

    GithubRepository.Users.Search(queryString)
      .then((res) => {
        dispatch('common/showLoading', false, { root: true });
        commit(mutationTypes.SET_USER_SEARCH_RESULTS, res.data.items);
      })
      .catch(() => {
        dispatch('common/showLoading', false, { root: true });
      });
  },
};
