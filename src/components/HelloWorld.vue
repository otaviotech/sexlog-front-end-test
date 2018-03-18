<template>
  <div>
    <!-- <h1 :class="username.length ? 'fadein' : 'hidden'">{{ 'Depois' }}</h1>
    <h2 :class="!username.length ? 'fadein' : 'hidden'">Antes</h2> -->
    <div class="c">
      <query-builder></query-builder>
    </div>

  </div>
</template>

<script>
import GithubService from '@/shared/services/github';
import QueryBuilder from './queryBuilder/QueryBuilder';
// import GithubRepository from '@/shared/repositories/github';

export default {
  name: 'HelloWorld',
  components: {
    [QueryBuilder.name]: QueryBuilder,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      githubUrl: GithubService.getBaseUrl(),
      username: '',
    };
  },
  beforeCreate() {
    // GithubRepository.Users.Get('otaviotech').then((res) => { this.username = res.data.login; });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.c
  width: 90%
  margin: 0 auto;

</style>
