  <script>
  export default {
    name: 'ProjectCard',
    
    props:{
      project: Object,
    },

    methods: {
      formatData(dateString){
        const d = new Date(dateString);
        // TODO: aggiungere lo 0 quando non c'è
        return d.toLocaleDateString()
      }
    }

  }
  </script>

<template>

<div class="card bg-dark text-white border-danger mb-5" >
  <div class="card-body">
    <h5 class="card-title">Titolo: {{ project.name }}</h5>
    <p class="card-text">Categoria: {{ project.category }}</p>
    <p class="card-text">{{ formatData(project.date_creation) }}</p>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
.card{
  width: 22%;
}
</style>