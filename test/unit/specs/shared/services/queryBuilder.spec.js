import QueryBuilder from '@/shared/services/queryBuilder';
import QueryObjectFixture from '../../../../fixtures/queryObject';
import QualifierObjectFixture from '../../../../fixtures/qualifierObject';
import ParameterObjectFixture from '../../../../fixtures/parameterObject';

describe('QueryBuilder (service)', () => {
  describe('Contruir uma query string corretamente', () => {
    describe('Construir a query string completa', () => {
      it('Deve obter a query string correta a partir de um objeto de query', () => {
        const queryObject = new QueryObjectFixture();
        const expectedUrl = 'q=joao+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort=repositories&order=asc';
        const resultUrl = QueryBuilder.stringifyQueryObject(queryObject);
        expect(resultUrl).toEqual(expectedUrl);
      });
    });

    describe('Construir a query string dos parametros', () => {
      it('Deve construir a query string dos parametros corretamente', () => {
        const parametersObject = new ParameterObjectFixture();
        const result = QueryBuilder.stringifyParameters(parametersObject);
        const expectedResult = 'q=joao&sort=repositories&order=asc';
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Construir corretamente a query string dos qualifiers', () => {
      it('Deve obter a query string correta a partir de um objeto de qualifier simples implicito', () => {
        const qualifierObject = new QualifierObjectFixture('type', '=', 'user');
        const expectedQueryString = '+type:user';
        const resultQueryString = QueryBuilder.stringifyQualifier(qualifierObject);
        expect(resultQueryString).toEqual(expectedQueryString);
      });

      it('Deve obter a query string correta a partir de um objeto de qualifier complexo', () => {
        const qualifierObject = new QualifierObjectFixture('created', '..', ['2000-01-01', '2020-01-01']);
        const expectedQueryString = '+created:2000-01-01..2020-01-01';
        const resultQueryString = QueryBuilder.stringifyQualifier(qualifierObject);
        expect(resultQueryString).toEqual(expectedQueryString);
      });


      it('Deve retornar uma string vazia caso o objeto passado seja inválido.', () => {
        const qualifierObject = new QualifierObjectFixture(false);
        const expectedQueryString = '';
        const resultQueryString = QueryBuilder.stringifyQualifier(qualifierObject);
        expect(resultQueryString).toEqual(expectedQueryString);
      });
    });

  });
});
