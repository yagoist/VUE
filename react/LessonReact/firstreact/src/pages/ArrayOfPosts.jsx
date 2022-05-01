// import React, { useState } from 'react'
// import MyButton from '../components/UI/buttons/MyButton'
// import MyInput from '../components/UI/input/MyInput'

// const ArrayOfPosts = () => {

//     const [arrOfPosts, setArrOfPosts] = useState({ title: '', body: '' })
   
//     setArrOfPosts((item) => [[...arrOfPosts], item], [])

//     const readArrOfPosts = (chatIndex) => arrOfPosts.map((element, index) => {
//       if(chatIndex === index) { } )
       
   
//       const addNewArrOfPosts = (e) => {
//         e.preventDefault()
//         const newArrOfPosts = {
//           ...arrOfPosts, id: Date.now()
//         }
//         readArrOfPosts(newArrOfPosts)
//         setArrOfPosts({ title: '', body: '' })
//       }
    
//   return (
//     <div>
//       <form>
//       <MyInput
//         autoFocus={true}
//         value={arrOfPosts.title}
//         onChange={e => setArrOfPosts({ title: e.target.value })}
//         type='text'
//         placeholder="Post name"
//       />
//       <MyInput
//         value={arrOfPosts.body}
//         onChange={e => setArrOfPosts({ body: e.target.value })}
//         type='text'
//         placeholder="Post description" />
//       <MyButton onClick={addNewArrOfPosts} style={{ marginTop: '10px' }} >Create post</MyButton>
//     </form>

//       <form type='text' ></form>
//         <MyButton>Добавить чат</MyButton>

//     </div>
//   )
// }

// export default ArrayOfPosts