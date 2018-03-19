<template>
  <div class="cabecalho-octocat">
    <div>
      <img src="@/assets/Octocat/Octocat.png" alt="github-octocat-logo">
    </div>
    <div>
      <p>Olá, eu trarei informações do <a href="https://github.com">Github</a> para você!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CabecalhoOctocat',
};
</script>

<style lang="sass">
  .cabecalho-octocat
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-around
    margin: 0 10px

  .cabecalho-octocat img
    display: block
    margin: 0 auto
    max-width: 300px
    flex: 1

  .cabecalho-octocat p
    flex: 1
    text-align: center
    font-size: 1.4em
    padding: 3px 5px
    margin: 3px 5px
</style>
