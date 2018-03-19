<template>
  <div>
    <h1 v-if="user">{{ user.name }} ({{ user.login }})</h1>
    <repositories-list :repositories="userRepos"></repositories-list>
  </div>
</template>

<script>
import UserDetailMixin from '@/vuex/module/userDetail/mixin';
import RepositoriesList from '@/components/UIComponents/RepositoriesList';

export default {
  name: 'UserDetail',
  mixins: [
    UserDetailMixin,
  ],
  components: {
    [RepositoriesList.name]: RepositoriesList,
  },
  beforeMount() {
    this.getUser(this.$route.params.username);
    this.getUserRepos(this.$route.params.username);
  },
};
</script>

<style lang="sass" scoped>
  @import '~open-color/open-color.scss'

  h1
    color: $oc-gray-7
    text-align: center
    font-size: 3em

</style>
