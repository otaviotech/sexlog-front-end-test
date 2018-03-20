/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import state from './state';

export default {
  isLoading: state => state.isLoading,
  loadingCount: state => state.loadingCount,
};
