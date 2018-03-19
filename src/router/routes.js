import UserSearch from '@/components/userSearch/UserSearch';
import UserDetail from '@/components/userDetail/UserDetail';
import RepositoryDetail from '@/components/repositoryDetail/RepositoryDetail';

const routes = [
  {
    path: '/',
    name: 'UserSearch',
    component: UserSearch,
  },
  {
    path: '/usuario/:username/detalhes',
    name: 'UserDetail',
    component: UserDetail,
  },
  {
    path: '/repositorio/:username/:repository',
    name: 'RepositoryDetail',
    component: RepositoryDetail,
  },
];

export default routes;
