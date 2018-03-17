import QualifierValidator from '@/shared/validators/qualifier';
import {
  isArray,
} from 'lodash';

const qualifierTypes = ['type', 'in', 'repos', 'location', 'language', 'created', 'followers'];
const implictQualifiers = ['='];
const derivedOperators = ['..*'];

/**
 * @function stringifySimpleQualifier
 * @param {object} qualifier O qualifier.
 * @returns {string} A query string do qualifier com operador simples.
 */
const stringifySimpleQualifier = (qualifier) => {
  const data = isArray(qualifier.data) ? qualifier.data[0] : qualifier.data;
  const operator = implictQualifiers.includes(qualifier.operator) ? '' : qualifier.operator;
  return derivedOperators.includes(qualifier.operator) ?
    `+${qualifier.type}:${data}${operator}` :
    `+${qualifier.type}:${operator}${data}`;
};

/**
 * @function stringifyComplexQualifier
 * @param {object} qualifier O qualifier.
 * @returns {string} A query string do qualifier com operador complexo.
 */
const stringifyComplexQualifier = (qualifier) => {
  const complexOperation = `${qualifier.data[0]}${qualifier.operator}${qualifier.data[1]}`;
  return `+${qualifier.type}:${complexOperation}`;
};

/**
 * @function stringifyQualifier
 * @description Extrai a query string do qualifier a partir de um array de qualifier.
 * @param {object} qualifier
 * @returns {string} A query string gerada.
 */
const stringifyQualifier = (qualifier) => {
  if (!QualifierValidator.isValidQualifier(qualifier)) {
    return '';
  }

  if (QualifierValidator.hasSimpleOperator(qualifier)) {
    return stringifySimpleQualifier(qualifier);
  }

  return stringifyComplexQualifier(qualifier);
};

/**
 * @function stringifyQualifiers
 * @description Extrai a query string dos qualifiers a partir de um array de qualifiers.
 * @param {array|object} qualifiers Os qualifiers a serem transformados em uma query string.
 * @returns {string} A query string gerada.
 */
const stringifyQualifiers = (qualifiers) => {
  let queryString = '';
  qualifiers.forEach((q) => {
    queryString += stringifyQualifier(q);
  });
  return queryString;
};
/**
 * @function stringifyParameters
 * @description extrai a query string de um objeto de parametros.
 * @param {*} parameters os parametros a serem transformados em querystring.
 * @param {boolean} omitQuery Omitir a propriedade q da query string.
 */
const stringifyParameters = (parameters, omitQuery = false) => {
  const sort = parameters.sort ? `&sort=${parameters.sort}` : '';
  const ordering = parameters.order ? `&order=${parameters.order}` : '';
  let queryString = omitQuery ? '' : `q=${parameters.q}`;
  queryString += `${sort}${ordering}`;
  return queryString;
};

const stringifyQueryObject = (queryObject) => {
  const parametersString = stringifyParameters(queryObject.parameters, true);
  const qualifiersString = stringifyQualifiers(queryObject.qualifiers);
  const queryString = `q=${queryObject.parameters.q}${qualifiersString}${parametersString}`;
  return queryString;
};

const QueryBuilder = {
  qualifierTypes,
  stringifyQualifiers,
  stringifyQualifier,
  // validateQualifierObject,
  stringifyParameters,
  stringifyQueryObject,
};

export default QueryBuilder;
