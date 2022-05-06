import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../components/UI/buttons/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { chatSelector } from '../redux/reducer/selectors/Selectors'



const ChatsList = () => {
  const chats = useSelector(chatSelector) 

  const dispath = useDispatch()

  const [title, setTitle] = useState('')
  
  const addChat = (name) => {
    name.preventDefault()
    
    const newChat = {
      id: Date.now(),
      name: title
    }
    dispath({type: 'addChat', payload: newChat})
    setTitle('')
  }

     
    return (
    <div style={{paddingTop: 20, display:'flex', flexDirection:'column', alignItems:'center'}}>
     <form>
     <MyInput
        value={title}
        onChange={e=> setTitle(e.target.value)}
        autoFocus={true}
        type='text'
        placeholder="Chat name"
      />
        <MyButton
          onClick={addChat}
          style={{alignItems:'center'}}
         >
            add
        </MyButton>
      </form>
      <div style={{paddingTop: 20, display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Available chats</h1>
            {chats.map((chat) => 
                <div key={chat.id}>{chat.name}
                  {/* <MyButton
                   style={{alignItems:'center'}}
                   onClick={()=> (`/chats/${chat.id}`)}
                   > go to post </MyButton>    */}
                  <MyButton
                    onClick={()=> dispath({type: 'deleteChat', payload: chat.id})}
                    style={{alignItems:'center'}}
                    >
                      delete
                  </MyButton>   
                </div>                           
            )}
      </div>
    </div>
  )
}

export default ChatsList