import { shallow } from '@vue/test-utils';
import AppInput from '@/components/UIComponents/Input';

describe('App Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((AppInput, {
      propsData: {
        wrapperClass: 'wrapper-class',
        inputClass: 'input-class',
        inputId: 'input-id',
        inputWrapperClass: 'input-wrapper-class',
        inputPlaceholder: 'input-placeholder',
        labelText: 'label-text',
        labelClass: 'label-class',
        labelId: 'label-id',
        labelWrapperClass: 'label-wrapper-class',
      },
    }));
  });

  it('Deve renderizar todas as propriedades corretamente.', () => {
    const component = wrapper.find(AppInput);
    expect(component).toBeDefined();
  });
});
