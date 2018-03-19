import UserSearch from '@/components/userSearch/UserSearch';
import UserDetail from '@/components/userDetail/UserDetail';

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
];

export default routes;
