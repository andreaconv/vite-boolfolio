  <script>

  import { store } from './data/store.js';
  import axios from 'axios';

  export default {
    name: 'Home',

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
              })
        ;
      }
    },

    mounted(){
      this.getApi();
    }
  
  }
  </script>

<template>

  <div class="main-wrapper bg-dark text-white">

    <div class="container">
    
      <h1>Home</h1>

    </div>

  </div>
  
</template>

<style lang="scss" scoped>

.main-wrapper{
  min-height: 100vh;
}

</style>