<template>
  <div class="foo">
    <div class="card">
      <div class="card-header">
        <span><b>Repositórios</b></span>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th><a href="#" @click="sortBy('name')">Nome</a></th>
              <th><a href="#" @click="sortBy('watchers_count')">Watchs</a></th>
              <th><a href="#" @click="sortBy('stargazers_count')">Estrelas</a></th>
              <th><a href="#" @click="sortBy('forks_count')">Forks</a></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rep in sortedRepos" :key="rep.id">
              <td>{{ rep.name }}</td>
              <td>{{ rep.watchers_count }}</td>
              <td>{{ rep.stargazers_count }}</td>
              <td>{{ rep.forks_count }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: 'RepositoriesList',
  props: {
    repositories: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sortedRepos: [],
  }),
  methods: {
    sortBy(criteria) {
      this.sortedRepos = orderBy(this.repositories, criteria);
    },
  },
  beforeMount() {
    this.sortedRepos = this.repositories;
  },
};
</script>

<style lang="sass">
  @import '~open-color/open-color.scss'

  .foo
    width: 90%
    margin: 0 auto

  .card
    display: flex
    flex-wrap: wrap
    flex-direction: column
    // width: 100%

  .card .card-header
    background-color: $oc-gray-4
    padding: 0 10px
    height: 40px
    display: flex
    justify-content: center
    align-items: center
    // flex: 1

  .card .card-header a
    text-decoration: none
    color: $oc-cyan-8
    padding: 3px 7px
    margin: 0 3px

  table
    color: $oc-gray-9
    border-collapse: collapse
    width: 100%

  table td, table th
    text-align: center
    border: 1px solid #ddd
    padding: 8px

  table tr:nth-child(even)
    background-color: #f2f2f2

  table tr:hover
    background-color: #ddd

  table th
    padding-top: 12px
    padding-bottom: 12px
    text-align: center
    background-color: $oc-gray-4


</style>
