<template>
  <div class="header-bg">
    <a href="https://www.esapiens.com.br/">Desafio técnico eSapiens / Sexlog</a>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="sass">
  @import '~open-color/open-color.scss'

  .header-bg
    background-color: $oc-indigo-4
    display: flex
    justify-content: center
    height: 40px
    align-items: center
    position: -webkit-sticky;  // required for Safari
    position: sticky;
    top: 0; // required as well.

  .header-bg a
    text-decoration: none
    color: $oc-gray-9
    transition: 0.3s
    &:hover
      color: #FFF
      transition: 0.3s

</style>
