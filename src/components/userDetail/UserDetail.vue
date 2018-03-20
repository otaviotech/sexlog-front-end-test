<template>
  <div class="wrapper">
    <h1 v-if="user">{{ user.name }} ({{ user.login }})</h1>
    <div class="user-info">
      <div class="user-badges" v-if="user">
        <badge  description="Seguidores"
                icon="users"
                :value="user.followers.toString()"
                class="user-badge"></badge>
        <badge description="Seguindo"
               icon="star"
               :value="user.following.toString()"
               class="user-badge"></badge>
        <badge description="Email"
               icon="at" :value="user.email || '-'"
               class="user-badge"></badge>
      </div>
      <div class="user-bio" v-if="user">
        <p v-html="user.bio || ''">
        </p>
      </div>
    </div>
    <img v-if="user" :src="user.avatar_url" :alt="user.login">
    <repositories-list :repositories="userRepos" v-if="userRepos.length"></repositories-list>
    <div class="voltar-wrapper">
      <button class="btn primary" @click="voltar">Voltar para a busca</button>
    </div>
  </div>
</template>

<script>
import UserDetailMixin from '@/vuex/module/userDetail/mixin';
import RepositoriesList from '@/components/UIComponents/RepositoriesList';
import Badge from '@/components/UIComponents/Badge';

export default {
  name: 'UserDetail',
  mixins: [
    UserDetailMixin,
  ],
  components: {
    [RepositoriesList.name]: RepositoriesList,
    [Badge.name]: Badge,
  },
  methods: {
    voltar() {
      this.$router.replace({ path: '/' });
    },
  },
  beforeMount() {
    this.getUser(this.$route.params.username);
    this.getUserRepos(this.$route.params.username);
  },
};
</script>

<style lang="sass" scoped>
  @import '~open-color/open-color.scss'

  .wrapper h1
    color: $oc-gray-7
    text-align: center
    font-size: 3em

  .user-info
    display: flex
    flex-direction: column

  .user-bio
    display: flex
    flex-direction: column
    padding: 20px

  .user-badges
    display: flex
    flex-direction: row
    justify-content: center
    flex-wrap: wrap

  .user-badge
    flex: 1
    min-width: 350px

  img
    margin: 0 auto
    max-width: 300px

  .wrapper
    padding-top: 20px

  .voltar-wrapper
    display: flex
    flex-direction: row
    justify-content: flex-end
    padding: 20px
</style>
