import {
  isArray,
  isString,
  isNumber,
} from 'lodash';

import moment from 'moment';

/**
 * @property simpleOperators
 * @desc Os operators do tipo simples.
 */
const simpleOperators = [
  '>', // maior que
  '<', // menor que
  '..*', // menor ou igual a
  '*..', // maior ou igual a
  '>=', // maior ou igual a
  '<=', // menor ou igual a
  '=', // igual a
];

/**
 * @property complexOperators
 * @desc Os operators do tipo complexo.
 */
const complexOperators = [
  '..',
];

/**
 * @property complexOperators
 * @desc Os operators do tipo complexo.
 */
const allOperators = simpleOperators.concat(complexOperators);

/**
 * @function hasNoEmptyIndex
 * @description Informa algum item do array é nulo, undefined ou string vazia.
 * @param {array} arr O array a ser validado.
 * @param {boolean} zeroIsEmpty Informa se deve considerar 0 e '0' como vazio.
 * @returns {boolean} Se algum item do array é nulo, undefined ou string vazia.
 */
const hasNoEmptyIndex = (arr, zeroIsEmpty = false) => {
  let valid = true;
  arr.forEach((value) => {
    if (zeroIsEmpty && ['0', 0].includes(value)) {
      valid = false;
      return;
    }

    if (!value) {
      valid = false;
    }
  });
  return valid;
};

/**
 * @function isValidQualifierData
 * @description Valida os dados de um qualifier.
 * @param {array|string} data Os dados do qualifier.
 * @returns {boolean} Se os dados do qualifier são validos.
 */
const isValidQualifierData = (data) => {
  if (isArray(data)) {
    return data.length && hasNoEmptyIndex(data);
  }
  if (isString(data) || isNumber(data)) {
    return data.toString().length > 0;
  }
  if (moment(data, 'YYYY-MM-DD').isValid()) {
    return true;
  }
  return false;
};

/**
 * @private
 * @function getOperatorType
 * @description Obtém o tipo de um operador de qualifier.
 * @param {string} operator O operador.
 * @returns {string} O tipo do operador.
 */
const getOperatorType = (operator) => {
  if (simpleOperators.includes(operator)) return 'simple';
  if (complexOperators.includes(operator)) return 'complex';
  return undefined;
};

/**
 * @public
 * @function hasValidOperator
 * @param {object} qualifierObject O qualifier para ser validado.
 */
const hasValidOperator = qualifierObject => allOperators.includes(qualifierObject.operator);

/**
 * @public
 * @function hasValidData
 * @param {object} qualifierObject O qualifier para ser validado.
 */
const hasValidData = (qualifierObject) => {
  if (!hasValidOperator(qualifierObject) || !isValidQualifierData(qualifierObject.data)) {
    return false;
  }

  const operatorType = getOperatorType(qualifierObject.operator);

  if (operatorType === 'simple') {
    return isValidQualifierData(qualifierObject.data) && isString(qualifierObject.data);
  }

  if (operatorType === 'complex') {
    return isArray(qualifierObject.data) && qualifierObject.data.length === 2;
  }

  return false;
};

const isValidQualifierType = type => isString(type);

const isValidQualifierObject = qualifier => qualifier.type && qualifier.operator && qualifier.data;


/**
 * @function hasSimpleOperator
 * @description Informa se o operador é do tipo simples.
 * @param {object} qualifierObject O qualifier.
 * @returns {boolean} Se o operador é do tipo simples.
 */
const hasSimpleOperator = qualifierObject => getOperatorType(qualifierObject.operator) === 'simple';

/**
 * @function allIndexesAreNumbers
 * @description Informa se todos os itens de um array são números.
 * @param {array} arr Array para validar.
 * @returns {boolean} Se todos os itens do array são númreros.
 */
const allIndexesAreNumbers = (arr) => {
  let result = true;
  arr.forEach((i) => {
    if (!isNumber(i)) {
      result = false;
    }
  });
  return result;
};

/**
 * @function hasComplexOperator
 * @description Informa se o operador é do tipo complexo.
 * @param {object} qualifierObject O qualifier.
 * @returns {boolean} Se o operador é do tipo complexo.
 */
const hasComplexOperator = qualifierObject => getOperatorType(qualifierObject.operator) === 'complex';

const isValidQualifier = (qualifier) => {
  const typeIsValid = isValidQualifierType(qualifier.type);
  const dataIsValid = hasValidData(qualifier);
  const operatorIsValid = hasValidOperator(qualifier);

  if (!typeIsValid || !dataIsValid || !operatorIsValid) {
    return false;
  }

  if (hasComplexOperator(qualifier)) {
    if (moment(qualifier.data[0]).isValid()) {
      return moment(qualifier.data[0]).isValid() && moment(qualifier.data[1]).isValid();
    }
    return isArray(qualifier.data) && qualifier.data.length === 2 && allIndexesAreNumbers(qualifier.data);
  }

  if (hasSimpleOperator(qualifier)) {
    return true;
  }

  return false;
};

const QualifierValidator = {
  hasValidOperator,
  hasValidData,
  isValidQualifierType,
  isValidQualifierObject,
  hasSimpleOperator,
  hasComplexOperator,
  isValidQualifier,
};

export default QualifierValidator;
