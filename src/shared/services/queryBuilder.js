import { isArray } from 'lodash';

const QueryBuilder = {

  qualifierTypes: ['type', 'in', 'repos', 'location', 'language', 'created', 'followers'],

  /**
   * @function stringifyQualifiers
   * @description Extrai a query string dos qualifiers a partir de um array de qualifiers.
   * @param {array|object} qualifiers
   * @returns {string} A query string gerada.
   */
  stringifyQualifiers(qualifiers) {

  },

  /**
   * @function stringifyQualifier
   * @description Extrai a query string do qualifier a partir de um array de qualifier.
   * @param {object} qualifier
   * @returns {string} A query string gerada.
   */
  stringifyQualifier(qualifier) {

    if (!qualifier) {
      return '';
    }

    let queryString = '';

  }

  /**
   * @function validateQualifierObject
   * @description Valida um QualifierObject.
   * @param {object} qualifierObject O QualifierObject a ser validado.
   * @returns {boolean} Se o QualifierObject é válido ou não.
   */
  validateQualifierObject(qualifierObject) {
    if (!qualifierObject) return false;



  }

}

export default QueryBuilder;
