<template>
  <div class="gh-card">
    <div class="img-wrapper">
      <img :src="avatarUrl" :alt="login + '-avatar'" class="gh-card-avatar-img">
    </div>
    <div class="information-wrapper">
      <p class="username">
        <router-link :to="{ name: 'UserDetail', params: { username: login } }">
          @{{ login }}
        </router-link>
      </p>
      <hr />
      <ul>
        <li>
          <a :href="githubPageLink" target="_blank" class="gh-card-gh-pl">Pagina no Github</a><br>
        </li>
        <li>
          <router-link :to="{ name: 'UserDetail', params: { username: login } }">
            Detalhes
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GithubUserCard',
  props: {
    name: {
      type: String,
      required: false,
    },
    login: {
      type: String,
      required: true,
    },
    githubPageLink: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass">
  @import '~open-color/open-color.scss'

  .gh-card
    background-color: transparent
    margin: 8px
    height: 100px
    max-width: 100%0.9em
    display: flex
    flex-direction: row
    justify-content: space-around

  .gh-card .img-wrapper
    width: 90px
    background-color: transparent

  .gh-card .img-wrapper img
    height: 100px
    border: solid 4px $oc-gray-5
    border-radius: 00px 0px 0 10px

  .gh-card .information-wrapper
    flex: 1
    padding: 10px
    background-color: $oc-gray-1
    border: solid 2px $oc-gray-5
    border-left: none
    border-radius: 0px 10px 0px 0px

  .gh-card .information-wrapper .username
    text-align: center
    font-weight: bold

  .gh-card .information-wrapper ul li
    padding: 3px 5px
    text-align: center

  .gh-card .information-wrapper ul li a
    font-size: 0.9em

  p a
    color: $oc-gray-8
    font-weight: 600
    transition: 0.3s
    &:hover
      color: $oc-gray-6
      transition: 0.3s

  a
    color: $oc-gray-6
    transition: 0.3s
    &:hover
      color: $oc-gray-8
</style>
