/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import state from './state';

export default {
  query: state => state.query,
  userSearchResults: state => state.userSearchResults,
};
