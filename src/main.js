// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueToastr from '@deveodk/vue-toastr';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import '../static/style/main.sass'; // Styling
import ToastrConfig from './shared/UI/toastr';


Vue.config.productionTip = false;

Vue.use(VueToastr, ToastrConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
