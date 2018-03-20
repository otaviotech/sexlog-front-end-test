import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import GithubUserCard from '@/components/UIComponents/GithubUserCard';

describe('Github User Card', () => {
  let wrapper;
  let routerView;

  beforeAll(() => {
    // mock
    routerView = {
      name: 'router-link',
      render: h => h('div'),
    };

    Vue.component('router-link', routerView);
  });

  beforeEach(() => {
    wrapper = shallow(GithubUserCard, {
      propsData: {
        login: 'joaologin',
        githubPageLink: 'https://github.com/joaologin',
        avatarUrl: 'https://github.com/avatardojoao',
      },
    });
  });

  // it('Deve renderizar o username corretamente.', () => {
  //   const component = wrapper.find('.username');
  //   const name = component.text();
  //   expect(name).toEqual('joaologin');
  // });

  it('Deve renderizar imagem do avatar corretamente.', () => {
    const component = wrapper.find('.gh-card-avatar-img');
    const avatarUrl = component.attributes().src;
    expect(avatarUrl).toEqual('https://github.com/avatardojoao');
  });

  it('Deve renderizar a tag de acessibilidade(alt) da imagem corretamente.', () => {
    const component = wrapper.find('.gh-card-avatar-img');
    const altTagContent = component.attributes().alt;
    expect(altTagContent).toEqual('joaologin-avatar');
  });

  it('Deve renderizar o link da pagina do usuário no Github corretamente.', () => {
    const component = wrapper.find('.gh-card-gh-pl');
    const githubPageLink = component.attributes().href;
    expect(githubPageLink).toEqual('https://github.com/joaologin');
  });
});
