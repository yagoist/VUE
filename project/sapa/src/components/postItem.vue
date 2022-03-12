<template>
  <div class="post">
      <div>
    <div>{{ posted.id }}</div>
    <div><strong>Краткое описание:</strong> {{ posted.title }}</div>
    <div><strong>Подробно:</strong> {{ posted.body }}</div>
    </div>
    <div class="post-btn">
      <my-button
      @click="$router.push(`/posts/${posted.id}`)"
      >
      Отворить
      </my-button>
      <my-button
      @click="$emit('remove', posted)"
      >
      Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
props: {
    posted: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid black;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-btn {
  display: flex;
}
</style>