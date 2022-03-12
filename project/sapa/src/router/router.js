import Main from '@/pages/Main'
import { createRouter, createWebHistory } from "vue-router"
import PostPage from "@/pages/PostPage"
import About from "@/pages/About"
import PostPageID from "@/pages/PostPageID"
// import PostItem from "@/components/postItem"



const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostPageID, //PostItem
    },
    
    
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;