import GithubService from '@/shared/services/github';
import QueryObjectFixture from '../../../../fixtures/queryObject';

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

    const queryObject = new QueryObjectFixture();

    const url = GithubService.buildUserSearchUrl(queryObject);

    const expectedURL = `${process.env.GITHUB_API_BASE_URL}/search/users?q=joao+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc`;

    expect(1).toEqual(1);
  });
});
