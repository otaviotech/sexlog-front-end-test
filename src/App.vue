<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/UIComponents/AppHeader';

export default {
  name: 'App',
  components: {
    [AppHeader.name]: AppHeader,
  },
};
</script>

<style lang="sass">

</style>
