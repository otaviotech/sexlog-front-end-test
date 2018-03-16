import QueryBuilder from '@/shared/services/queryBuilder';
import QueryObjectFixture from '../../../../fixtures/queryObject';
import QualifierObjectFixture from '../../../../fixtures/qualifierObject';

describe('QueryBuilder (service)', () => {
  describe('Contruir uma query string corretamente', () => {
    describe('Construir a query string completa', () => {
      it('Deve obter a query string correta a partir de um objeto de query', () => {
        const queryObject = new QueryObjectFixture();
        const expectedUrl = '+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc';
        const resultUrl = QueryBuilder.stringifyQualifiers(queryObject.qualifiers);
        expect(resultUrl).toEqual(expectedUrl);
      });
    });

    describe('Construir corretamente a query string dos qualifiers', () => {
      it('Deve obter a query string correta a partir de um objeto de qualifier', () => {
        const qualifierObject = new QualifierObjectFixture();
        const expectedQueryString = '+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc';
        const resultQueryString = QueryBuilder.stringifyQualifier(qualifierObject);
        expect(resultQueryString).toEqual(expectedQueryString);
      });

      it('Deve retornar uma string vazia caso o objeto passado seja inválido.', () => {
        const qualifierObject = new QualifierObjectFixture(false);
        const expectedQueryString = '+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc';
        const resultQueryString = QueryBuilder.stringifyQualifier(qualifierObject);
        expect(resultQueryString).toEqual(expectedQueryString);
      });
    });
  });
});
