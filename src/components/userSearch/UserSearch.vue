<template>
  <div class="container">
    <div class="user-search column">
      <cabecalho-octocat></cabecalho-octocat>
      <hr />
      <query-builder @submit="performSearch"></query-builder>
      <github-user-card
        name="Otávio Araújo"
        login="otaviotech"
        githubPageLink=""
        repositoriesPageLink=""
        avatarUrl="https://avatars2.githubusercontent.com/u/23391867?v=4">
      </github-user-card>
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

</style>
