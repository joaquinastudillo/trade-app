<template>
  <div id="app">
       <header-app></header-app>
      <header-menu-app></header-menu-app>
       <div class="container" id="wrapper">
         <transition name="slide" mode="out-in">
           <router-view></router-view>
         </transition>
       </div>
  </div>
</template>

<script>
import HeaderApp from "./components/Header";
import HeaderMenuApp from "./components/HeaderMenu"
import HomeApp from "./components/Home";
export default {
  name: "app",
  created() {
    this.$store.dispatch("initStocks");
  },
  components: {
    HeaderApp,
    HeaderMenuApp,
    HomeApp
  },
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  }
};
</script>

<style>
#wrapper {
  padding-top: 20px;
}
.slide-enter-active{
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active{
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in{
  from{
      transform: translateY(-30px);
      opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out{
  from{
      transform: translateY(0px);
      opacity: 1;
  }
  to{
    transform: translateY(-30);
    opacity: 0;
  }
}

</style>
