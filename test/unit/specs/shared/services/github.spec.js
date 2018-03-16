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
        q: 'joao', // The search terms.
        sort: 'repositories', // followers | repositories | joined
        order: 'asc', // asc | desc
      },
      qualifiers: [
        {
          type: 'type', // user | org
          operator: '=',
          data: ['user'],
        },
        {
          type: 'in',
          operator: '=',
          data: ['login'], // login | fullname | email
        },
        {
          type: 'repos',
          operator: '>',
          data: ['0'], // numeric
        },

        {
          type: 'location',
          operator: '=',
          data: ['Brazil'], // country name
        },
        {
          type: 'language',
          operator: '=',
          data: ['php'], // programming language
        },
        {
          type: 'created',
          operator: '..', // numeric (date) > | < | = | >= | <= | ..* | *.. | ..
          data: ['2000-01-01', '2020-01-01'], // numeric (date)
        },
        {
          type: 'followers',
          operator: '..*', // numeric (date) > | < | = | >= | <= | ..* | *.. | ..
          data: ['0'], // numeric
        },
      ],
    };

    const url = GithubService.buildUserSearchUrl(queryObject);

    const expectedURL = `${process.env.GITHUB_API_BASE_URL}/search/users?q=joao+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc`;

    expect(url).toEqual(expectedURL);
  });
});
