<template>
  <div class="container">
    <div class="user-search column">
      <cabecalho-octocat></cabecalho-octocat>
      <hr />
      <query-builder @submit="performSearch"></query-builder>
      <div v-if="userSearchResults" class="result-grid">
        <div v-for="res in userSearchResults" :key="res.id" class="card-wrapper">
          <github-user-card
            :login="res.login"
            :githubPageLink="res.html_url"
            :repositoriesPageLink="res.repos_url"
            :avatarUrl="res.avatar_url">
          </github-user-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSearchMixin from '@/vuex/module/userSearch/mixin';
import CabecalhoOctocat from '@/components/UIComponents/CabecalhoOctocat';
import GithubUserCard from '@/components/UIComponents/GithubUserCard';
import QueryBuilder from '../queryBuilder/QueryBuilder';

export default {
  name: 'UserSearch',
  components: {
    [QueryBuilder.name]: QueryBuilder,
    [CabecalhoOctocat.name]: CabecalhoOctocat,
    [GithubUserCard.name]: GithubUserCard,
  },
  mixins: [
    UserSearchMixin,
  ],
  data: () => ({
    // searchResults: [],
  }),
  methods: {
    performSearch(query) {
      if (!query.parameters.q.length) {
        this.$toastr('info', 'Você tem que me dizer o que pesquisar!');
        return;
      }

      if (!query.parameters.order || !query.parameters.sort) {
        this.$toastr('info', 'Preencha os campos corretamente.');
        return;
      }

      this.searchUser(query);
    },
  },
};
</script>

<style lang="sass">
  .user-search
    display: flex
    margin: 0 auto
    flex-wrap: wrap

  .result-grid
    display: flex
    flex-wrap: wrap
    flex-direction: row
    align-items: center
    justify-content: center

  .card-wrapper
    min-width: 300px

</style>
