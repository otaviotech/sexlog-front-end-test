import { shallow } from '@vue/test-utils';
import AppInput from '@/components/UIComponents/Input';

describe('App Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(AppInput, {
      propsData: {
        wrapperClass: 'wrapper-class',
        inputClass: 'input-class',
        inputId: 'input-id',
        inputWrapperClass: 'input-wrapper-class',
        inputPlaceholder: 'input placeholder',
        labelText: 'label text',
        labelClass: 'label-class',
        labelId: 'label-id',
        labelWrapperClass: 'label-wrapper-class',
      },
    });
  });

  it('Deve renderizar o a classe do wrapper corretamente.', () => {
    const component = wrapper.find('.wrapper-class');
    const wrapperClass = component.attributes().class;
    expect(wrapperClass).toEqual('wrapper-class');
  });

  it('Deve renderizar o a classe do input.', () => {
    const component = wrapper.find('.input-class');
    const inputClass = component.attributes().class;
    expect(inputClass).toEqual('input-class');
  });

  it('Deve renderizar o id do input corretamente.', () => {
    const component = wrapper.find('#input-id');
    const inputId = component.attributes().id;
    expect(inputId).toEqual('input-id');
  });

  it('Deve renderizar a class do wrapper do input corretamente.', () => {
    const component = wrapper.find('.input-wrapper-class');
    const inputWrapperClass = component.attributes().class;
    expect(inputWrapperClass).toEqual('input-wrapper-class');
  });

  it('Deve renderizar o placeholder do input corretamente.', () => {
    const component = wrapper.find('#input-id');
    const placeholder = component.attributes().placeholder;
    expect(placeholder).toEqual('input placeholder');
  });

  it('Deve renderizar o texto da label do input corretamente.', () => {
    const component = wrapper.find('#label-id');
    const label = component.text();
    expect(label).toEqual('label text');
  });

  it('Deve renderizar a classe da label do input corretamente.', () => {
    const component = wrapper.find('.label-class');
    const labelClass = component.attributes().class;
    expect(labelClass).toEqual('label-class');
  });

  it('Deve renderizar o id da label do input corretamente.', () => {
    const component = wrapper.find('#label-id');
    const labelId = component.attributes().id;
    expect(labelId).toEqual('label-id');
  });

  it('Deve renderizar a classe da wrapper da label do input corretamente.', () => {
    const component = wrapper.find('.label-wrapper-class');
    const labelWrapperClass = component.attributes().class;
    expect(labelWrapperClass).toEqual('label-wrapper-class');
  });
});
