<template>
  <div>
      <h1>Страница злодеяния № {{ $route.params.id }}</h1>
      <p>Суть злодеяния: {{ $route.posted.body}} </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>