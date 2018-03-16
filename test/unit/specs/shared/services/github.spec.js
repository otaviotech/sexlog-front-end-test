import GithubService from '@/shared/services/github';

describe('Github Service', () => {
  beforeEach(() => {
    process.env.GITHUB_API_BASE_URL = '"https://api.github.com"';
  });

  it('Deve existir.', () => {
    expect(GithubService).toBeDefined();
  });

  it('Deve informar a url base da API pública do Github corretamente.', () => {
    const serviceUrl = GithubService.getBaseUrl();
    expect(serviceUrl).toEqual(process.env.GITHUB_API_BASE_URL);
  });

  it('Deve construir a query string da url corretamente a partir de um objeto de query.', () => {

    const queryObject = {
      parameters: {
        q: 'otaviotech', // The search terms.
        sort: 'repositories', // followers | repositories | joined
        order: 'asc', // asc | desc
      },
      qualifiers: {
        type: 'user', // user | org
        in: 'login', // login | fullname | email
        repos: '>1', // numeric
        location: 'Brazil', // country
        language: 'php', // programming language
        created: '>2000-01-01', // numeric(date)
        followers: '>=0', // numeric
      }
    };

    const url = GithubService.buildUserSearchUrl(queryObject);

    const expectedURL = `${process.env.GITHUB_API_BASE_URL}/search/users?q=otavio+in:login`;

    expect(url).toEqual(expectedURL);
  });
});
