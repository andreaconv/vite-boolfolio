  <script>

  import MyHeader from './partials/MyHeader.vue';


  export default {
    name: 'App',

    components: {
      MyHeader
    },

  }
  </script>

<template>

  <!-- TODO: Aggiungete un elenco di  bottoni per i tipi  e le tecnologie, Questi bottoni verranno stampati a seguito di chiamate axios dedicate. -->

  <div class="body bg-dark text-white">

    <MyHeader />
  
    <router-view></router-view>

  </div>

  
</template>

<style lang="scss" scoped>

  .body{
  min-height: 100vh;
  }

</style>