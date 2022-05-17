import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginInitiate } from '../redux/reducer/actions/actions'
import MyButton from './UI/buttons/MyButton'

const Login = () => {

  const [userMail, setUserMail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if(user) {
      navigate('/home')
    }
  }, [user, navigate])

  const handleSubmit = (e => {
    e.preventDefault();
    if(!userMail || !userPassword) {
      return
    }
    dispatch(loginInitiate(userMail, userPassword))

  })

  return (
    <div>Login
      <form onSubmit={handleSubmit}>
        <input value={userMail} onChange={(e) => setUserMail(e.target.value)}/>
        <input type='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
        <MyButton type='submit'>sign in</MyButton>
      </form>
    </div>
  )
}

export default Login