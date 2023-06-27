  <script>
  export default {
    name: 'ProjectCard',
    
    props:{
      project: Object,
    },

    data(){
      return{
        color: ''
      }
    },

    methods: {
      formatData(dateString){
        const d = new Date(dateString);
        // TODO: aggiungere lo 0 quando non c'è
        return d.toLocaleDateString()
      }
    },

    computed: {
      type(){
        if(!this.project.type){
          this.color = 'maroon'
          return ' - no type - '
        } 
        this.color = this.project.type.color
        return this.project.type.name
        },

      }

  }
  </script>

<template>
  <!-- :class="'badge text-bg-' + project.type.color" -->

<div class="card bg-dark text-white border-danger mb-5" >
  <div class="card-body">
    <h5 class="card-title">Titolo: <span class="title">{{ project.name }}</span></h5>
    <h6 class="card-title">Tipo: <span :class="'badge text-bg-' + this.color">{{ type }}</span></h6>
    <p class="card-text">Categoria: {{ project.category }}</p>
    <h6 class="card-title">Tecnologia: ---</h6>
    <p class="card-text">{{ formatData(project.date_creation) }}</p>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
.card{
  width: 22%;
  span.title{
    color: brown;
  }

  span.badge.text-bg-violet{
    background-color: #6e2cf2;
  }

  span.badge.text-bg-maroon{
    background-color: #800000;
  }
}
</style>