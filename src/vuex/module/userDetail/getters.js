/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import state from './state';

export default {
  user: state => state.user,
  userRepos: state => state.userRepos,
};
