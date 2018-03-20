import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import RepositoriesList from '@/components/UIComponents/RepositoriesList';

describe('RepositoriesList', () => {
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
    wrapper = shallow(RepositoriesList, {
      propsData: {
        repositories: [{
          id: 103862925,
          name: 'arca-challenge',
          full_name: 'otaviotech/arca-challenge',
          owner: {
            login: 'otaviotech',
            id: 23391867,
            avatar_url: 'https://avatars2.githubusercontent.com/u/23391867?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/otaviotech',
            html_url: 'https://github.com/otaviotech',
            followers_url: 'https://api.github.com/users/otaviotech/followers',
            following_url: 'https://api.github.com/users/otaviotech/following{/other_user}',
            gists_url: 'https://api.github.com/users/otaviotech/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/otaviotech/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/otaviotech/subscriptions',
            organizations_url: 'https://api.github.com/users/otaviotech/orgs',
            repos_url: 'https://api.github.com/users/otaviotech/repos',
            events_url: 'https://api.github.com/users/otaviotech/events{/privacy}',
            received_events_url: 'https://api.github.com/users/otaviotech/received_events',
            type: 'User',
            site_admin: false,
          },
          private: false,
          html_url: 'https://github.com/otaviotech/arca-challenge',
          description: 'Job challenge for Arca Solutions.',
          fork: false,
          url: 'https://api.github.com/repos/otaviotech/arca-challenge',
          forks_url: 'https://api.github.com/repos/otaviotech/arca-challenge/forks',
          keys_url: 'https://api.github.com/repos/otaviotech/arca-challenge/keys{/key_id}',
          collaborators_url: 'https://api.github.com/repos/otaviotech/arca-challenge/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/otaviotech/arca-challenge/teams',
          hooks_url: 'https://api.github.com/repos/otaviotech/arca-challenge/hooks',
          issue_events_url: 'https://api.github.com/repos/otaviotech/arca-challenge/issues/events{/number}',
          events_url: 'https://api.github.com/repos/otaviotech/arca-challenge/events',
          assignees_url: 'https://api.github.com/repos/otaviotech/arca-challenge/assignees{/user}',
          branches_url: 'https://api.github.com/repos/otaviotech/arca-challenge/branches{/branch}',
          tags_url: 'https://api.github.com/repos/otaviotech/arca-challenge/tags',
          blobs_url: 'https://api.github.com/repos/otaviotech/arca-challenge/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/otaviotech/arca-challenge/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/otaviotech/arca-challenge/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/otaviotech/arca-challenge/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/otaviotech/arca-challenge/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/otaviotech/arca-challenge/languages',
          stargazers_url: 'https://api.github.com/repos/otaviotech/arca-challenge/stargazers',
          contributors_url: 'https://api.github.com/repos/otaviotech/arca-challenge/contributors',
          subscribers_url: 'https://api.github.com/repos/otaviotech/arca-challenge/subscribers',
          subscription_url: 'https://api.github.com/repos/otaviotech/arca-challenge/subscription',
          commits_url: 'https://api.github.com/repos/otaviotech/arca-challenge/commits{/sha}',
          git_commits_url: 'https://api.github.com/repos/otaviotech/arca-challenge/git/commits{/sha}',
          comments_url: 'https://api.github.com/repos/otaviotech/arca-challenge/comments{/number}',
          issue_comment_url: 'https://api.github.com/repos/otaviotech/arca-challenge/issues/comments{/number}',
          contents_url: 'https://api.github.com/repos/otaviotech/arca-challenge/contents/{+path}',
          compare_url: 'https://api.github.com/repos/otaviotech/arca-challenge/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/otaviotech/arca-challenge/merges',
          archive_url: 'https://api.github.com/repos/otaviotech/arca-challenge/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/otaviotech/arca-challenge/downloads',
          issues_url: 'https://api.github.com/repos/otaviotech/arca-challenge/issues{/number}',
          pulls_url: 'https://api.github.com/repos/otaviotech/arca-challenge/pulls{/number}',
          milestones_url: 'https://api.github.com/repos/otaviotech/arca-challenge/milestones{/number}',
          notifications_url: 'https://api.github.com/repos/otaviotech/arca-challenge/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/otaviotech/arca-challenge/labels{/name}',
          releases_url: 'https://api.github.com/repos/otaviotech/arca-challenge/releases{/id}',
          deployments_url: 'https://api.github.com/repos/otaviotech/arca-challenge/deployments',
          created_at: '2017-09-17T21:22:44Z',
          updated_at: '2017-09-17T21:59:43Z',
          pushed_at: '2017-09-17T22:10:01Z',
          git_url: 'git://github.com/otaviotech/arca-challenge.git',
          ssh_url: 'git@github.com:otaviotech/arca-challenge.git',
          clone_url: 'https://github.com/otaviotech/arca-challenge.git',
          svn_url: 'https://github.com/otaviotech/arca-challenge',
          homepage: '',
          size: 817,
          stargazers_count: 1,
          watchers_count: 0,
          language: 'PHP',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
        },
        {
          id: 125298943,
          name: 'sexlog-front-end-test',
          full_name: 'otaviotech/sexlog-front-end-test',
          owner: {
            login: 'otaviotech',
            id: 23391867,
            avatar_url: 'https://avatars2.githubusercontent.com/u/23391867?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/otaviotech',
            html_url: 'https://github.com/otaviotech',
            followers_url: 'https://api.github.com/users/otaviotech/followers',
            following_url: 'https://api.github.com/users/otaviotech/following{/other_user}',
            gists_url: 'https://api.github.com/users/otaviotech/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/otaviotech/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/otaviotech/subscriptions',
            organizations_url: 'https://api.github.com/users/otaviotech/orgs',
            repos_url: 'https://api.github.com/users/otaviotech/repos',
            events_url: 'https://api.github.com/users/otaviotech/events{/privacy}',
            received_events_url: 'https://api.github.com/users/otaviotech/received_events',
            type: 'User',
            site_admin: false,
          },
          private: false,
          html_url: 'https://github.com/otaviotech/sexlog-front-end-test',
          description: 'Desafio técnico - eSapiens',
          fork: false,
          url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test',
          forks_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/forks',
          keys_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/keys{/key_id}',
          collaborators_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/teams',
          hooks_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/hooks',
          issue_events_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/issues/events{/number}',
          events_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/events',
          assignees_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/assignees{/user}',
          branches_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/branches{/branch}',
          tags_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/tags',
          blobs_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/languages',
          stargazers_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/stargazers',
          contributors_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/contributors',
          subscribers_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/subscribers',
          subscription_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/subscription',
          commits_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/commits{/sha}',
          git_commits_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/git/commits{/sha}',
          comments_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/comments{/number}',
          issue_comment_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/issues/comments{/number}',
          contents_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/contents/{+path}',
          compare_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/merges',
          archive_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/downloads',
          issues_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/issues{/number}',
          pulls_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/pulls{/number}',
          milestones_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/milestones{/number}',
          notifications_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/labels{/name}',
          releases_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/releases{/id}',
          deployments_url: 'https://api.github.com/repos/otaviotech/sexlog-front-end-test/deployments',
          created_at: '2018-03-15T02:03:07Z',
          updated_at: '2018-03-19T04:19:09Z',
          pushed_at: '2018-03-19T04:19:08Z',
          git_url: 'git://github.com/otaviotech/sexlog-front-end-test.git',
          ssh_url: 'git@github.com:otaviotech/sexlog-front-end-test.git',
          clone_url: 'https://github.com/otaviotech/sexlog-front-end-test.git',
          svn_url: 'https://github.com/otaviotech/sexlog-front-end-test',
          homepage: null,
          size: 619,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
        },
        ],
      },
    });
  });

  it('Deve renderizar a quantidade correta de repositórios.', () => {
    const component = wrapper.findAll('.card-body table tbody tr');
    const totalItens = component.length;
    expect(totalItens).toEqual(2);
  });

  it('Deve renderizar incialmente em ordem decrescente do número de estrelas', () => {
    const renderedList = wrapper.findAll('.card-body table tbody tr td:nth-child(3)');

    let isLessThenNext = false;
    let i = 0;
    while (i < renderedList.length - 1) {
      isLessThenNext = Number.parseInt(renderedList.at(i).text(), 10) > Number.parseInt(renderedList.at(i + 1).text(), 10);
      i++;
    }

    expect(isLessThenNext).toBeTruthy();
  });

});
