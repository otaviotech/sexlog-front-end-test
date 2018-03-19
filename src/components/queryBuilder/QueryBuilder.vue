<template>
  <div class="query-builder">
    <div class="inputs-wrapper">

      <div class="query-builder-item">
        <app-input  labelText="Pesquise um usuário"
                    class="classeDoInput"
                    inputId="idDoInput"
                    inputPlaceholder="Pesquise um usuário"
                    v-model="query.parameters.q"></app-input>
      </div>

      <div class="query-builder-item">
        <app-select label-text="Pesquisar em"
                    inputPlaceholder="Selecione o filtro"
                    :options="inFilterOptions"
                    input-id="asdf"
                    v-model="inFilter"
                    :initValue="inFilter"></app-select>
      </div>

      <div class="query-builder-item">
        <app-select label-text="Ordenar por"
                    inputPlaceholder="Selecione o filtro"
                    :options="userSortingOptions"
                    input-id="asdf"
                    v-model="query.parameters.sort"
                    :initValue="query.parameters.sort"></app-select>
      </div>

      <div class="query-builder-item">
        <app-select label-text="Ordem"
                    inputPlaceholder="Selecione o filtro"
                    :options="orderingOptions"
                    input-id="asdf"
                    v-model="query.parameters.order"
                    :initValue="query.parameters.order"></app-select>
      </div>
    </div>
      <button class="btn primary perform-search-button btn-block"
              type="button"
              @click="submit">
              Pesquisar
      </button>
  </div>
</template>
<style lang="sass" scoped>
  .query-builder
    padding-top: 20px
    display: flex
    flex-diretion: row
    flex-wrap: wrap
    justify-content: space-between
    align-items: center

  .inputs-wrapper
    flex: 1
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-around
    align-content: flex-start

  .query-builder-item
    // flex: 1
    // max-width: 300px
    max-width: 300px
    min-width: 300px
    // min-width: 10%
    // align-items: center
    margin-right: 5px
    // flex-wrap: wrap

  @media only screen and (min-width : 1224px)
    .btn-block
      margin: 0 15px

</style>
<script>
import AppInput from '@/components/UIComponents/Input';
import AppSelect from '@/components/UIComponents/AppSelect';

export default {
  name: 'QueryBuilder',
  components: {
    [AppInput.name]: AppInput,
    [AppSelect.name]: AppSelect,
  },
  data: () => ({
    query: {
      parameters: {
        q: '', // The search terms.
        sort: 'followers', // followers | repositories | joined
        order: 'desc', // asc | desc
      },
      qualifiers: [],
    },
    inFilterOptions: [
      { label: 'Login', value: 'login' },
      { label: 'Nome', value: 'fullname' },
      { label: 'Email', value: 'email' },
    ],
    userSortingOptions: [
      { label: 'Seguidores', value: 'followers' },
      { label: 'Repositórios', value: 'repositories' },
      { label: 'Usuário desde', value: 'joined' },
    ],
    orderingOptions: [
      { label: 'Crescente', value: 'asc' },
      { label: 'Decrescente', value: 'desc' },
    ],
    inFilter: 'login',
  }),
  methods: {
    onInFilterInput(newValue) {
      this.inFilter = newValue;
    },
    submit() {
      this.$emit('submit', this.query);
    },
  },
};
</script>
