<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>PNT2 - TP7</h1>
      <br>

      <Navbar/>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
