import {
  isString,
} from 'lodash';

const userSortingParameters = [
  'followers',
  'joined',
  'repositories',
];

/**
 * @function validateQuery
 * @param {string} q A query.
 * @returns {boolean} Se a query é valida ou não.
 */
const validateQuery = q => isString(q) && q.length > 0;

/**
 * @function getSortingParametersForEntity
 * @description Retorna as possiveis ordenações para um certo tipo de entidade.
 * @param {string} entity
 * @returns {array} Array de strings das ordenações.
 */
const getSortingParametersForEntity = (entity) => {
  if (entity === 'user') return userSortingParameters;
  return [];
};

/**
 * @function validateSorting
 * @param {string} sort A ordenação desejada.
 * @param {string} entity A entidade a qual se deseja ordenar.
 * @returns {boolean} Se a ordenação é valida ou não.
 */
const validateSorting = (sort, entity) => getSortingParametersForEntity(entity).includes(sort);

/**
 * @function validateOrdering
 * @param {string} ordering A ordem (crescente ou decrescente)
 * @returns {boolean} Se a ordem é valida ou não.
 */
const validateOrdering = ordering => isString(ordering) && ['asc', 'desc'].includes(ordering);


const QueryObjectParameterValidator = {
  validateQuery,
  validateSorting,
  validateOrdering,
};

export default QueryObjectParameterValidator;
