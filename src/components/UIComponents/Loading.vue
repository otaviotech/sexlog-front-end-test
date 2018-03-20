<template>
  <div class="text-center loader">
    <div style="position: relative; top: 40%;">
      <div style="color: #f6d860; margin: 0 auto" class="la-pacman la-3x icon-wrapper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
};
</script>
<style lang="sass">
  @import 'load-awesome/css/pacman.css'

  .loader
    position: fixed
    top: 0
    left: 0
    z-index: 3000
    height: 100%
    width: 100%
    overflow: hidden
    background: rgba(255,255,255,0.8)
</style>
