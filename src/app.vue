<template>
  <div id="app">
    <epet-header></epet-header>
    <router-view></router-view>

  </div>
</template>

<script>
  import header from './components/header/header.vue'


  export default {
    name: 'app',
    components: {
      'epet-header': header,

    }
  }
</script>

<style>

</style>
