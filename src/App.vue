<template>
 <div id="App">
    <router-view></router-view>
    <main-tabbar/>
 </div>
</template>

<script>
import MainTabbar from "./components/content/mainTabbar/mainTabbar.vue";

export default {
  name: 'App',
  components: {
    MainTabbar,
  }
}
</script>

<style>
@import "~assets/css/base.css";


</style>
