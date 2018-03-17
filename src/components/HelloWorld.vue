<template>
  <div class="hello">
    <h1 :class="username.length ? 'fadein' : 'hidden'">{{ 'Depois' }}</h1>
    <h2 :class="!username.length ? 'fadein' : 'hidden'">Antes</h2>
  </div>
</template>

<script>
import GithubService from '@/shared/services/github';
import GithubRepository from '@/shared/repositories/github';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      githubUrl: GithubService.getBaseUrl(),
      username: '',
    };
  },
  beforeCreate() {
    GithubRepository.Users.Get('otaviotech').then((res) => { this.username = res.data.login; });
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  /* h1 { display: block; }; */

  .fadein {
    transition: 0.6s;
    animation-delay: 0.6s;
    height: 10px;
    opacity: 100;
  }

  .hidden {
    height: 0px;
    animation-delay: 0.6s;
    opacity: 0;
    transition: 0.6s;
  }

</style>
