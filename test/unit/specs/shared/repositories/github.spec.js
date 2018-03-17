import MockAdapter from 'axios-mock-adapter';
import GithubRepository from '@/shared/repositories/github';
import QueryObjectFixture from '../../../../fixtures/queryObject';

describe('Github Repository', () => {
  let githubClientMock;
  let queryString;
  let baseGithubApiUrlRegex;

  beforeAll(() => {
    queryString = new QueryObjectFixture().queryString;
    process.env.GITHUB_API_BASE_URL = 'https://api.github.com';
    baseGithubApiUrlRegex = new RegExp(`/${process.env.GITHUB_API_BASE_URL}.+/`);
    githubClientMock = new MockAdapter(GithubRepository.GithubClient);
  });

  afterEach(() => {
    githubClientMock.reset();
  });

  describe('API de usuários.', () => {
    const username = 'joao';

    describe('Pesquisar um usuário', () => {
      it('Deve requisitar a url da api do Github corretamente.', () => {
        const searchUsersUrlRegex = new RegExp(`${process.env.GITHUB_API_BASE_URL}/search/users?.+`);

        githubClientMock.onGet(searchUsersUrlRegex).reply(200, {
          total_count: 0,
          incomplete_results: false,
          items: [],
        });

        GithubRepository.Users.Search(queryString).then((res) => {
          expect(res.data).toEqual({
            total_count: 0,
            incomplete_results: false,
            items: [],
          });
        }).catch((err) => {
          expect(err.status).not.toMatch(/2\d\d/);
        });
      });
    });

    describe('Obter informações de um usuário especifico', () => {
      it('Deve requisitar a url da api do Github corretamente', () => {
        const getUsersUrlRegex = new RegExp(`${process.env.GITHUB_API_BASE_URL}/users/.+`);

        githubClientMock.onGet(getUsersUrlRegex).reply(200, {
          login: username,
          id: '23391867',
          foo: 'bar',
        });

        GithubRepository.Users.Get(username).then((res) => {
          expect(res.data).toEqual({
            login: username,
            id: '23391867',
            foo: 'bar',
          });
        }).catch((err) => {
          expect(err.status).not.toMatch(/2\d\d/);
        });
      });
    });

    describe('Obter a lista de repositórios de um usuário especifico', () => {
      it('Deve requisitar a url da api do Github corretamente', () => {
        const getUserReposUrlRegex = new RegExp(`${process.env.GITHUB_API_BASE_URL}/users/${username}/repos`);

        githubClientMock.onGet(getUserReposUrlRegex).reply(200, [{
          id: 103862925,
          name: 'hello-world',
          full_name: `${username}/hello-world`,
          owner: {
            login: username,
          },
        }]);

        GithubRepository.Users.GetUserRepos(username).then((res) => {
          expect(res.data).toEqual([{
            id: 103862925,
            name: 'hello-world',
            full_name: `${username}/hello-world`,
            owner: {
              login: username,
            },
          }]);
        }).catch((err) => {
          expect(err.response.status.toString()).not.toMatch(/2\d\d/);
        });
      });
    });
  });
});
