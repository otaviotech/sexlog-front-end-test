import QualifierValidator from '@/shared/validators/qualifier';
import { isArray } from 'lodash';

/**
 * @function stringifySimpleQualifier
 * @param {object} qualifier O qualifier.
 * @returns {string} A query string do qualifier com operador simples.
 */
const stringifySimpleQualifier = (qualifier) => {
  const data = isArray(qualifier.data) ? qualifier.data[0] : qualifier.data;
  return `${qualifier.type}:${qualifier.operator}${data}`;
};

/**
 * @function stringifyComplexQualifier
 * @param {object} qualifier O qualifier.
 * @returns {string} A query string do qualifier com operador complexo.
 */
const stringifyComplexQualifier = (qualifier) => {
  const complexOperation = `${qualifier.data[0]}${qualifier.operator}${qualifier.data[1]}`;
  return `${qualifier.type}:${complexOperation}`;
};

const QueryBuilder = {

  qualifierTypes: ['type', 'in', 'repos', 'location', 'language', 'created', 'followers'],

  /**
   * @function stringifyQualifiers
   * @description Extrai a query string dos qualifiers a partir de um array de qualifiers.
   * @param {array|object} qualifiers
   * @returns {string} A query string gerada.
   */
  stringifyQualifiers(qualifiers) {
    return qualifiers;
  },

  /**
   * @function stringifyQualifier
   * @description Extrai a query string do qualifier a partir de um array de qualifier.
   * @param {object} qualifier
   * @returns {string} A query string gerada.
   */
  stringifyQualifier(qualifier) {
    if (!QualifierValidator.isValidQualifier(qualifier)) {
      return '';
    }

    if (QualifierValidator.hasSimpleOperator(qualifier)) {
      return stringifySimpleQualifier(qualifier);
    }

    return stringifyComplexQualifier(qualifier);
  },

  /**
   * @function validateQualifierObject
   * @description Valida um QualifierObject.
   * @param {object} qualifierObject O QualifierObject a ser validado.
   * @returns {boolean} Se o QualifierObject é válido ou não.
   */
  validateQualifierObject(qualifierObject) {
    if (!QualifierValidator.isValidQualifierObject(qualifierObject)) return false;

    return true;
  },
};

export default QueryBuilder;
