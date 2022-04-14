import React, { useState, useEffect } from 'react'

import MyButton from './UI/buttons/MyButton'

const ArrayOfPosts = () => {

    const [arrOfPosts, setArrOfPosts] = useState([])
   
    setArrOfPosts((props) => [[...arrOfPosts], props], [])

    const readChats = (chatIndex) => arrOfPosts.map((element, index) => {
        if (chatIndex === index) return arrOfPosts[index]
    }) 
    
    useEffect(() => {
        setArrOfPosts()
        readChats()
      }, [arrOfPosts])

    
  return (
    <div>
        <MyButton>Добавить чат</MyButton>

    </div>
  )
}

export default ArrayOfPosts