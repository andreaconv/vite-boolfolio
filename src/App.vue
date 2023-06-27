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