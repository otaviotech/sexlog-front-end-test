import axios from 'axios';

const GithubClient = axios.create({
  // baseURL: process.env.GITHUB_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  },
});

const BASE_SEARCH_URL = '/search';
const BASE_USER_URL = '/users';
const BASE_REPOSITORY_URL = '/repos';
const BASE_USER_SEARCH_URL = `${BASE_SEARCH_URL}${BASE_USER_URL}?`;

/**
 * @function searchUsers
 * @description Pesquisa usuários na api do github.
 * @param {string} queryString A querystring da pesquisa.
 * @returns {promise} Promise do axios.
 */
const searchUsers = (queryString) => {
  const url = `${process.env.GITHUB_API_BASE_URL}${BASE_USER_SEARCH_URL}${queryString}`;
  const result = GithubClient.get(url);
  return result;
};

/**
 * @function getUser
 * @description Obtém as informações de um usuário especifico.
 * @param {string} username O username do usuário.
 * @returns {promise} Promise do axios.
 */
const getUser = (username) => {
  const url = `${process.env.GITHUB_API_BASE_URL}${BASE_USER_URL}/${username}`;
  const result = GithubClient.get(url);
  return result;
};

/**
 * @function getUserRepos
 * @description Obtém a lista de repositórios de um usuário especifico.
 * @param {string} username O username do usuário.
 * @returns {promise} Promise do axios.
 */
const getUserRepos = (username) => {
  const url = `${process.env.GITHUB_API_BASE_URL}${BASE_USER_URL}/${username}/repos`;
  const result = GithubClient.get(url);
  return result;
};

/**
 * @function getRepository
 * @description Obtém as informações de um repositório específico.
 * @param {string} username O username do usuário.
 * @param {string} rep O nome do repositório.
 * @returns {promise} Promise do axios.
 */
const getRepository = (username, rep) => {
  const url = `${process.env.GITHUB_API_BASE_URL}${BASE_REPOSITORY_URL}/${username}/${rep}`;
  const result = GithubClient.get(url);
  return result;
};

/**
 * @property Users
 * @description Contém as ações na api de usuários do Github.
 */
const Users = {
  Search: searchUsers,
  Get: getUser,
  GetUserRepos: getUserRepos,
};

/**
 * @property Repositories
 * @description Contém as ações na api de usuários do Github.
 */
const Repositories = {
  Get: getRepository,
};

/**
 * @property GithubRepository
 * @description API pública.
 * @default
 */
const GithubRepository = {
  Users,
  Repositories,
  GithubClient,
};

export default GithubRepository;
