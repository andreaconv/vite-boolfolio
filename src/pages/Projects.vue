<script>

import { store } from '../data/store.js';
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'Projects',

  components: {
    ProjectCard
  },

  data(){
    return{
      projects: [],
    }

  },

  methods: {
    getApi(){
      axios.get(store.apiUrl + 'projects')
            .then(results => {
              this.projects = results.data;
              console.log(this.projects)
            });
    },

  },

  mounted(){
    this.getApi();
  }

}
</script>

<template>

<!-- TODO: -->
<!-- 1. Gestire la paginazione dei risultati -->

<div class="main-wrapper bg-dark text-white">

  <div class="container py-5">
  
    <h1 class="mb-3">Elenco Progetti</h1>

    <div class="cards-container d-flex flex-wrap justify-content-between">

      <ProjectCard
        v-for="project in projects"
        :key="project.id" 
        :project="project"/>

    </div>

    <!-- <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Tipo</th>
          <th scope="col">Categoria</th>
          <th scope="col">Tecnologia</th>
          <th scope="col">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="project in projects"
          :key="project.id">

          <th scope="row">{{ project.id }}</th>
          <td>{{ project.name }}</td>
          <td>--tipo--</td>
          <td>{{ project.category }}</td>
          <td>--tecnologia--</td>
          <td>{{ formatData(project.date_creation) }}</td>

        </tr>
      </tbody>
    </table> -->

  </div>

</div>

</template>

<style lang="scss" scoped>

.main-wrapper{
min-height: 100vh;
}

</style>