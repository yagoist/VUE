// import React, { useState, useEffect } from "react";
// import '../styles/App.css';
// import PostList from "../components/PostList"
// import PostForm from "../components/UI/PostForm";
// import PostFilter from "../components/UI/PostFilter";
// import MyModal from "../components/UI/MyModal/MyModal";
// import MyButton from "../components/UI/buttons/MyButton";
// import { usePosts } from "../hooks/usePosts";
// import PostService from "../API/PostService";
// import Loader from "../components/UI/Loader/Loader";
// import { useFetching } from "../hooks/useFetching";
// import { getPageCount, getPagesArray } from "../util/pages";
// import Pagination from "../components/UI/pagination/Pagination";

// function Posts() {

//   const [posts, setPosts] = useState([])
//   const [filter, setFilter] = useState({ sort: '', query: '' })
//   const [modal, setModal] = useState(false)
//   const [totalPages, setTotalPages] = useState(0)
//   const [limit, setLimit] = useState(10)
//   const [page, setPage] = useState(1)
//   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
//   const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
//     const response = await PostService.getAll(limit, page)
//     setPosts(response.data)
//     const totalCount = response.headers['x-total-count']
//     setTotalPages(getPageCount(totalCount, limit))
//   })

//   useEffect(() => {
//     fetchPosts()
//   }, [fetchPosts, page])

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//     setModal(false)
//   }

//   const removePost = (post) => {
//     setPosts(posts.filter(p => p.id !== post.id))
//   }

//   const changePage = (page) => {
//     setPage(page)
//   }

//   return (
//     <div className="App">

//       <MyButton onClick={() => setModal(true)} style={{ marginTop: 30 }}>
//         Create post
//       </MyButton>

//       <MyModal
//         visible={modal}
//         setVisible={setModal}>

//         <PostForm
//           create={createPost}
//         />

//       </MyModal>


//       <hr style={{ margin: '15px 0' }} />

//       <PostFilter
//         filter={filter}
//         setFilter={setFilter}
//       />
//       {postError &&
//         <h1>Error ${postError}</h1>}
//       {isPostsLoading
//         ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
//         : <PostList
//           remove={removePost}
//           posts={sortedAndSearchedPosts}
//           title='Post list 1'
//         />
//       }
//       <Pagination
//         page={page}
//         changePage={changePage}
//         totalPages={totalPages}
//       />
//     </div>
//   );
// }

// export default Posts;