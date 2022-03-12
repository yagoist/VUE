<template>
  <div class="navbar">
      <div @click="$router.push('/')">Хулигань!</div>
      <div class="navbar-btns">
          <my-button @click="$router.push('/posts')">К злодеяниям</my-button>
          <my-button style="margin-left: 20px" @click="$router.push('/About')">О приложении</my-button>
      </div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar-btns {
    margin-left: auto;
}
</style>