import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/input/MyInput";
import ListOfPosts from './components/ListOfPosts'



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description', },
    { id: 2, title: 'JS', body: 'Description', },
    { id: 3, title: 'JS', body: 'Description', }
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">

      <div style={{flexGrow: '1'}}>
        <ListOfPosts post={posts}   />
      </div>
      <span style={{flexGrow: '3'}}>
        <form>
          <MyInput
            autoFocus={true}
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })}
            type='text'
            placeholder="Post name"
          />
          <MyInput
            value={post.body}
            onChange={e => setPost({ ...post, body: e.target.value })}
            type='text'
            placeholder="Post description" />
          <MyButton onClick={addNewPost} style={{ marginTop: '10px' }} >Create post</MyButton>
        </form>
        <PostList posts={posts} title='Post list 1' />
      </span>


    </div>
  );
}

export default App;
