import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../components/UI/buttons/MyButton';
import Loader from '../components/UI/Loader/Loader';
import { loadPosts } from '../redux/reducer/chatsReducer';
import { chatsLoading, loadingError, postSelector } from '../redux/reducer/selectors/Selectors';

const ChatsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postSelector)
    const loading = useSelector(chatsLoading)
    const error = useSelector(loadingError)

    useEffect(() => {
        dispatch(loadPosts())
    }, [])

    const rebootPosts = () => {
      dispatch(loadPosts())
      chatsLoading = false
    }

    if(loading) {
      return (
      <>
      <Loader/>
      </>
      )
    }

    if(error) {
      return (
        <div>
        <h1>ОШИБКА ЗАГРУЗКИ! {error}</h1>
        <MyButton onClick={rebootPosts} >перезагрузить</MyButton>
        </div>
      )
    }
  
  return (
    <div>{
        posts.map((item) => (
          <div key={item.id}>
            <div style={{display:'flex', border: '1px solid red'}}>
              {item.title}
            </div>
          </div>
        ))
      }</div>
  )
}

export default ChatsList;


// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import MyButton from '../components/UI/buttons/MyButton'
// import MyInput from '../components/UI/input/MyInput'
// // import { botAnswer } from '../redux/reducer/actions/BotAnswer'
// import { chatSelector } from '../redux/reducer/selectors/Selectors'



// const ChatsList = () => {
//   const chats = useSelector(chatSelector)

//   const dispatch = useDispatch()

//   const [title, setTitle] = useState('')

//   const addChat = (name) => {
//     name.preventDefault()

//     const newChat = {
//       id: Date.now(),
//       name: title
//     }
//     dispatch({ type: 'addChat', payload: newChat })
//     setTitle('')
//     //ответ бота на добавление чата
//   }

 
//   return (
//     <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <form>
//         <MyInput
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           autoFocus={true}
//           type='text'
//           placeholder="Chat name"
//         />
//         <MyButton
//           onClick={addChat}
//           style={{ alignItems: 'center' }}
//         >
//           add
//         </MyButton>
//       </form>
//       <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <h1>Available chats</h1>
//         {chats.map((chat) =>
//           <div key={chat.id}>{chat.name}
//             {/* <MyButton
//                    style={{alignItems:'center'}}
//                    onClick={()=> (`/chats/${chat.id}`)}
//                    > go to post </MyButton>    */}
//             <MyButton
//               onClick={() => dispatch({ type: 'deleteChat', payload: chat.id })}
//               style={{ alignItems: 'center' }}
//             >
//               delete
//             </MyButton>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ChatsList