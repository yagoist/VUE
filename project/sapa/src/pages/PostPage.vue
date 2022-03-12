  <template>
  <div>
    
    <h3 class="title">
      Это история жизни Сапегина, он любит упороться или поработать.
    </h3>

    <my-input
    v-model="SearchPost"
    placeholder='Поиск гадости...'
    />

    <div class="app-btns">
      <my-button
        @click="showDialog">
        Создать злодеяние
      </my-button>
      <my-sorting
        v-model="SelectedSort"
        :options="SortOption"
      />
      
    </div>
    <my-dialog-window
      v-model:show='dialogVisible'>

    <post-form
      @create='createPost'
     />  
    </my-dialog-window>  
    
    <post-list
      :posts='searchAndSortedPosts'
      @remove='removePost'
      v-if="!PostsIsLoading"
    />
    <div class="loading" v-else>Дела грузятся, баблишко мутится, ожидай бро...</div>
  </div>
  <div 
  ref="observer"
  class="observer">

  </div>

  <!-- <div class="page-container">
    <div
     v-for="pageNum in TotalPages"
     :key="pageNum"
     class="page"
     :class="{
       'current-page': PostPage === pageNum
      }"
      @click="changePage(pageNum)"
     >
     {{ pageNum }}
     
    </div>
  </div> -->
</template>

  <script>

  import postList from '@/components/postList.vue'
  import postForm from '@/components/postForm.vue'
  import axios from "axios"
  
  

export default {
    components: {
        postList, 
        postForm
    },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      PostsIsLoading: false,
      SelectedSort: '',
      SortOption: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ],
      SearchPost: '',
      PostPage: 1,
      LimitPost: 10,
      TotalPages: 0,
    };
  },
  methods: {
      createPost(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id) 
      },
      showDialog() {
        this.dialogVisible = true
      },
      async fetchPosts() {
        try {
          this.PostsIsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
              _page: this.PostPage,
              _limits: this.LimitPost,
            }
          });
          this.TotalPages = Math.ceil(response.headers['x-total-count']/this.LimitPost)
          this.posts = response.data
        } catch(err) {
          alert('Упс, ошибочка на сервере')
        } finally {
          this.PostsIsLoading = false
        }
      },
      // changePage(pageNum){
      //   this.PostPage = pageNum
      // }
      async loadMorePosts() {
        try {
          this.PostPage += 1
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
              _page: this.PostPage,
              _limits: this.LimitPost,
            }
          });
          this.TotalPages = Math.ceil(response.headers['x-total-count']/this.LimitPost)
          this.posts = [...this.posts, ...response.data]
        } catch(err) {
          alert('Упс, ошибочка на сервере')
        } 
      },
  },
  mounted() {
    this.fetchPosts()
    this.$refs.observer
    const options = {
    rootMargin: '0px',
    threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.PostPage < this.TotalPages) {
        this.loadMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer);
    },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((p1, p2) => p1[this.SelectedSort]?.localeCompare(p2[this.SelectedSort]))
    },
    searchAndSortedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.SearchPost.toLowerCase()))
    }
  },
  watch: {
    // PostPage() {
    //   this.fetchPosts()
    // }
  }
};
</script>

  <style>

.title {
  width: 350px;
  margin: 0 auto;
  text-align: center;
  border: 3px solid blueviolet;
}

.app-btns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.loading {
  margin-top: 15px;
}
.page-container {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid yellowgreen;
  padding: 10px;
}
.current-page {
  border: 2px solid black;
  background: red;
}
/* .observer { */

/* } */
</style>