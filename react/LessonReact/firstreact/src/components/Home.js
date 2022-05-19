import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutInititate } from '../redux/reducer/actions/actions'
import MyButton from './UI/buttons/MyButton'

const Home = () => {
    const dispatch = useDispatch()
    const user =useSelector(state => state.user.user)
    const navigate = useNavigate()

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInititate)
        }
        setTimeout(() => {
            navigate('/login')
        }, 1000)    
    }

    return (
    <div>
        Home
        <MyButton onClick={handleAuth}>logout</MyButton>

    </div>
  )
}

export default Home