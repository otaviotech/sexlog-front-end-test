<template>
  <div class="badge">
    <div class="badge-description">
      <div>
        <i :class="'fa fa-' + icon"></i> {{ description }}
      </div>
    </div>
    <div class="badge-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    icon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass">

  @import '~open-color/open-color.scss'

  .badge
    display: flex
    background-color: transparent
    flex-direction: row
    justify-content: space-between
    border: solid 2px $oc-gray-7
    border-radius: 10px
    height: 35px
    font-weight: bold
    margin: 15px

  .badge-description
    flex: 1
    display: flex
    background-color: #EDF1F5
    text-align: center
    justify-content: center
    border-radius: 10px 0 0 10px
    align-items: center
    border-right: solid 2px $oc-gray-7

  .badge-description i
    margin: 0 10px

  .badge-value
    background-color: #FAFBFC
    flex: 1
    display: flex
    border-radius: 0 10px 10px 0px
    text-align: center
    justify-content: center
    align-items: center

</style>
