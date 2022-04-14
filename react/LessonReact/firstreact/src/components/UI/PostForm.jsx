import React, { useState } from 'react';
import MyInput from './input/MyInput';
import MyButton from './buttons/MyButton';


const PostForm = ({ create }) => {

  const [post, setPost] = useState({ title: '', body: '' })


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
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
  )
}

export default PostForm
