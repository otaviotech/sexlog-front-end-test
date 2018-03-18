<template>
  <div>
    <form>
      <app-input  labelText="Pesquise um usuário"
                  class="classeDoInput"
                  inputId="idDoInput"
                  inputPlaceholder="Pesquise um usuário"
                  v-model="query.params.q"></app-input>
      <app-select label-text="Pesquisar em"
                  inputPlaceholder="Selecione o filtro"
                  :options="inFilterOptions"
                  input-id="asdf"
                  v-model="inFilter"
                  :initValue="inFilter"></app-select>

      <app-select label-text="Ordenar por"
                  inputPlaceholder="Selecione o filtro"
                  :options="userSortingOptions"
                  input-id="asdf"
                  v-model="query.params.sort"
                  :initValue="query.params.sort"></app-select>

      <app-select label-text="Ordem"
                  inputPlaceholder="Selecione o filtro"
                  :options="orderingOptions"
                  input-id="asdf"
                  v-model="query.params.order"
                  :initValue="query.params.order"></app-select>

      <button class="btn primary">Pesquisar</button>

    </form>
  </div>
</template>

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
      params: {
        q: '', // The search terms.
        sort: 'followers', // followers | repositories | joined
        order: 'desc', // asc | desc
      },
    },
    texto: '',
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
  },
};
</script>

<style>


</style>
