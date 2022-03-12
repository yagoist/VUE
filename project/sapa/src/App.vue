<template>
 <nav-bar></nav-bar>
  <div  class="container">
    
    <router-view> </router-view>
  </div>
</template>

<script>
import NavBar from '@/components/UI/NavBar.vue'
export default {
components: {
  NavBar
}
}
</script>

<style>

* {
  padding: 0;
  box-sizing: border-box;
}
.container {
  padding: 15px;
}
</style>