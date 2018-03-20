import { mapActions, mapGetters } from 'vuex';
import { MODULE_NAME } from './index';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  computed: mapGetters(MODULE_NAME, Object.keys(getters)),
  methods: { ...mapActions(MODULE_NAME, Object.keys(actions)) },
};
