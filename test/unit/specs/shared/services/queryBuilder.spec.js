import QueryBuilder from '@/shared/services/queryBuilder';
import QueryObjectFixture from '../../../../fixtures/queryObject';
import QualifierObjectFixture from '../../../../fixtures/qualifierObject';

describe('QueryBuilder (service)', () => {
  it('Deve obter a query string correta a partir de um objeto de query', () => {
    const queryObject = new QueryObjectFixture();
    const expectedUrl = '+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc';
    const resultUrl = QueryBuilder.stringifyQualifiers(queryObject.qualifiers);
    expect(resultUrl).toEqual(expectedUrl);
  });

  it('Deve obter a query string correta a partir de um objeto de qualifier', () => {
    const qualifierObject = new QualifierObjectFixture();
    const expectedQueryString = '+type:user+in:login+repos:>0+location:Brazil+language:php+created:2000-01-01..2020-01-01+followers:0..*&sort:repositories&order=asc';
    const resultQueryString = QueryBuilder.stringifyQualifier(qualifierObject);
    expect(resultQueryString).toEqual(expectedQueryString);
  });

  it('Deve validar um qualifier simples corretamente', () => {
    let qualifierObject = new QualifierObjectFixture('in', '=', ['login']);
    let resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    qualifierObject = new QualifierObjectFixture('in', '', 'login');
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    qualifierObject = new QualifierObjectFixture('', '=', 'login');
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    qualifierObject = new QualifierObjectFixture('', '', 'login');
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    qualifierObject = new QualifierObjectFixture('in', '=', '');
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();


    qualifierObject = new QualifierObjectFixture('', '', '');
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();
  });

  it('Deve validar um qualifier numérico corretamente', () => {
    let qualifierObject = new QualifierObjectFixture('created', '..*', ['2000-01-01']);
    let resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    // Testa se valida um range qualifier.
    qualifierObject = new QualifierObjectFixture('created', '..', ['2000-01-01', '2018-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    qualifierObject = new QualifierObjectFixture('created', '..', ['2018-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    // Testa os qualifiers simples.
    qualifierObject = new QualifierObjectFixture('created', '*..', ['2018-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    qualifierObject = new QualifierObjectFixture('created', '*..', ['2018-01-01', '2016-01-02']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    // >
    qualifierObject = new QualifierObjectFixture('created', '>', ['2000-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    qualifierObject = new QualifierObjectFixture('created', '>', ['2018-01-01', '2016-01-02']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    // <
    qualifierObject = new QualifierObjectFixture('created', '<', ['2000-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    qualifierObject = new QualifierObjectFixture('created', '<', ['2000-01-01', '2000-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    // =
    qualifierObject = new QualifierObjectFixture('created', '=', ['2000-01-01']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeTruthy();

    // Quantidade de parametros inconsistente.
    qualifierObject = new QualifierObjectFixture('created', '=', ['2000-01-01', '2001-01-02']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();

    // tipos diferentes
    qualifierObject = new QualifierObjectFixture('created', '=', ['2000-01-01', '2']);
    resultValidation = QueryBuilder.validateQualifierObject(qualifierObject);
    expect(resultValidation).toBeFalsy();
  });
});
