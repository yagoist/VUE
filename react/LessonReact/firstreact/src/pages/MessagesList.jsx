import React from 'react'
import { useSelector } from 'react-redux'
import MyButton from '../components/UI/buttons/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { messageSelector } from '../redux/reducer/selectors/Selectors'

const MessagesList = () => {
    const message = useSelector(messageSelector) 

    
  return (
    <div style={{paddingTop: 20, display:'flex', flexDirection:'column', alignItems:'center'}}>
     <form>
     <MyInput
        
        autoFocus={true}
        type='text'
        placeholder="Chat name"
      />
        <MyButton style={{alignItems:'center'}}> add </MyButton>
      </form>
      <div style={{paddingTop: 20, display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Chat about {message.id}</h1>
            {message.map((message) => 
                <p key={message.id}>{message.userName}: {message.body}</p>                               
            )}
      </div>
    </div>
  )
}

export default MessagesList