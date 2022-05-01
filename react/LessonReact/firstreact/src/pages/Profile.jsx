import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const friends = useSelector((state) => {
    return state.friends
  })
  const info = useSelector((state) => {
      return state.info
  })
  
    return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Профиль пользователя</h1>
            <div>
                <h2>Пользователь {info.name}</h2>
                <p>{info.age}</p>
                <p>{info.city}</p>
                <p>{info.work}</p>
            </div>
            Друзья: {friends.map((friends) =>  
                <div key={friends.id}>
                    <h3>{friends.name}</h3>
                    <p>{friends.age}</p>
                    <p>{friends.city}</p>
                    <p>{friends.work}</p>
                    <input type='checkbox'/>
                     </div> 
                     
            )}
            

    </div>
  )
}

export default Profile