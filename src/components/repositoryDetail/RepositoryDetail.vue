<template>
  <div class="repo-info" v-if="repository">
    <h1>{{ repository.name }}
      <a :href="repository.html_url" target="_blank">
        <i class="fa fa-external-link-alt"></i>
      </a>
    </h1>
    <div class="repo-badges">
        <badge description="Estrelas"
               icon="star"
               :value="repository.stargazers_count.toString()"
               class="repository-badge"></badge>
    </div>
    <p v-html="repository.description"></p>
    <div class="voltar-wrapper">
      <button class="btn primary" @click="voltar">Voltar para o usuário</button>
    </div>
  </div>
</template>

<script>
import Badge from '@/components/UIComponents/Badge';
import RepositoryDetailMixin from '@/vuex/module/repositoryDetail/mixin';

export default {
  name: 'RepositoryDetail',
  mixins: [
    RepositoryDetailMixin,
  ],
  components: {
    [Badge.name]: Badge,
  },
  methods: {
    voltar() {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    this.getRepository({
      username: this.$route.params.username,
      rep: this.$route.params.repository,
    });
  },
};
</script>

<style lang="sass">
  @import '~open-color/open-color.scss'

  h1
    color: $oc-gray-7
    text-align: center
    font-size: 3em

  h1 a
    text-decoration: none
    color: $oc-gray-3

  p
    padding: 20px
    text-align: center

  .repo-badges
    margin: 0 auto
    max-width: 300px
    min-width: 300px

  .repo-info
    padding: 20px
    display: flex
    flex-direction: column

  .voltar-wrapper
    max-width: 300px
    margin: 0 auto
</style>
