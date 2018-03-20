<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade">
      <loading v-show="isLoading"></loading>
    </transition>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/UIComponents/AppHeader';
import Loading from '@/components/UIComponents/Loading';
import CommonMixin from '@/vuex/module/common/mixin';

export default {
  name: 'App',
  mixins: [
    CommonMixin,
  ],
  components: {
    [AppHeader.name]: AppHeader,
    [Loading.name]: Loading,
  },
};
</script>

<style lang="sass">

</style>
