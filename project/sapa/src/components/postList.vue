<template>
    <div
    v-if="posts.length > 0"
    >
      <h3>Мои великие дела</h3>
      <transition-group name="post-sort">
        <post-item 
          v-for="posted in posts"
          :posted="posted"
          :key="posted.id"
          @remove="$emit('remove', posted)"
        />
      </transition-group>
        
    </div>
    <h2 v-else style="color: purple">
      Твои злодеяния еще отсутствуют, скорее творить дичь!
    </h2>
</template>

<script>
import postItem from '@/components/postItem'
export default {
  components: { postItem },

  props: {
      posts: {
        type: Array,
        required: true
      }
    }
}
</script>


<style scoped>

.post-sort-item {
  display: inline-block;
  margin-right: 10px;
}
.post-sort-enter-active,
.post-sort-leave-active {
  transition: all 1s ease;
}
.post-sort-enter-from,
.post-sort-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.post-sort-move {
  transition: transform 0.4s ease;
}



</style>