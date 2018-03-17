import QueryObjectParameterValidator from '@/shared/validators/queryObjectParameter';

describe('QueryObject Parameters Validator', () => {

  let q;
  let order;
  let sort;
  let entity;

  beforeEach(() => {
    q = 'joao';
    sort = 'repositories';
    order = 'asc';
    entity = 'user';
  });

  it('Deve validar corretamente a query', () => {
    const result = QueryObjectParameterValidator.validateQuery(q);
    expect(result).toBeTruthy();
  });

  it('Deve validar corretamente o parametro sort(ordenação)', () => {
    const result = QueryObjectParameterValidator.validateSorting(sort, entity);
    expect(result).toBeTruthy();
  });

  it('Deve validar corretamente o parametro order(ordem crescente/decrescente)', () => {
    const result = QueryObjectParameterValidator.validateOrdering(order);
    expect(result).toBeTruthy();
  });

});
