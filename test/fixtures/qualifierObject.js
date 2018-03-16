export default class QualifierObjectFixture {
  /**
   * @constructor
   * @param {string} type O tipo do qualifier.
   * @param {string} operator O operador do qualifier.
   * @param {array|object} data Os dados do qualifier.
   */
  constructor(type, operator, data) {
    this.type = type;
    this.operator = operator;
    this.data = data;
  }
}
