import QualifierValidator from '@/shared/validators/qualifier';
import QualifierObjectTexture from '../../../../fixtures/qualifierObject';

describe('Qualifier Validator', () => {
  it('Deve validar corretamente um objeto de qualifier com operator simples', () => {
    const validQualifier = new QualifierObjectTexture('in', '=', 'login');
    const result = QualifierValidator.isValidQualifier(validQualifier);
    expect(result).toBeTruthy();
  });

  it('Deve validar corretamente um objeto de qualifier com operator complexo', () => {
    const validQualifier = new QualifierObjectTexture('created', '..', ['2010-01-01', '2015-01-01']);
    const result = QualifierValidator.isValidQualifier(validQualifier);
    expect(result).toBeTruthy();
  });
});
