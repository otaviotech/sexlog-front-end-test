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
              <th><span @click="sortBy('name')">Nome</span></th>
              <th><span @click="sortBy('watchers_count')">Watchs</span></th>
              <th><span @click="sortBy('stargazers_count')">Estrelas</span></th>
              <th><span @click="sortBy('forks_count')">Forks</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rep in sortedRepos" :key="rep.id">
              <td><a :href="rep.html_url" target="_blank">{{ rep.name }}</a></td>
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
    sortingStatus: {
      name: 'asc',
      watchers_count: 'asc',
      stargazers_count: 'asc',
      forks_count: 'asc',
    },
  }),
  methods: {
    sortBy(criteria) {
      this.sortingStatus[criteria] = this.sortingStatus[criteria] === 'asc' ? 'desc' : 'asc';
      this.sortedRepos = orderBy(this.repositories, [criteria], this.sortingStatus[criteria]);
    },
  },
  beforeMount() {
    this.sortBy('stargazers_count');
  },
};
</script>

<style lang="sass">
  @import '~open-color/open-color.scss'

  .foo
    padding: 20px
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

  table th span
    cursor: pointer
    transition: 0.3s
    &:hover
      color: $oc-gray-6
      transition: 0.3s

  table tbody tr td a
    color: $oc-gray-8

  .card-body
    overflow-y: auto

</style>
