<script>
export default {
  name: 'MyHeader'
}
</script>

<template>
  <header>
    <nav class="container py-3">
      <ul>

        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'projects' }">Progetti</router-link>
        </li>

      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

ul{
  list-style: none;
  display: flex;
  li{
    margin: 0 20px;
    a{
      text-decoration: none;
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>