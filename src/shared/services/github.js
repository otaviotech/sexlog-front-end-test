const GithubService = {
  /**
   * @function getBaseUrl
   * @description Retorna a URL base da API pública do Github.com.
   * @returns {string} A URL base da API pública do Github.com.
   */
  getBaseUrl: () => process.env.GITHUB_API_BASE_URL,

  /**
   * @function buildUserSearchUrl
   * @description Constrói a url para realizar uma pesquisa a partir de um objeto de query.
   * @param {object} queryObject O objeto de query.
   * @returns {string} A URL completa da pesquisa.
   */
  buildUserSearchUrl(queryObject) {

  },

  search: {
    Users(query = {}) {
      console.log(query);
    },
  },
  searchUser(query) {
    console.log(query);
  },
};

export default GithubService;
