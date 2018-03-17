// import QueryBuilder from '@/shared/services/queryBuilder';

/**
 * @function getBaseUrl
 * @description Retorna a URL base da API pública do Github.com.
 * @returns {string} A URL base da API pública do Github.com.
 */
const getBaseUrl = () => process.env.GITHUB_API_BASE_URL;

/**
 * @function buildUserSearchUrl
 * @description Constrói a url para realizar uma pesquisa a partir de um objeto de query.
 * @param {object} queryObject O objeto de query.
 * @returns {string} A URL completa da pesquisa.
 */
const buildUserSearchUrl = queryObject => queryObject;

const searchUser = query => query;

const GithubService = {
  getBaseUrl,
  buildUserSearchUrl,
  searchUser,
};

export default GithubService;
