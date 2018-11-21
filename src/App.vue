<template>
  <div id="app">
       <header-app></header-app>
       <div class="container" id="wrapper">
              <router-view></router-view>
       </div>
  </div>
</template>

<script>
import HeaderApp from './components/Header'
import HomeApp from './components/Home'
export default {
  name: 'app',
  created(){
    this.$store.dispatch('initStocks')
  },
  components: {
    HeaderApp,
    HomeApp
  }
}
</script>

<style>
#wrapper{
  padding-top: 20px;
}
</style>
