import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerInitiate } from '../redux/reducer/actions/actions'
import MyButton from './UI/buttons/MyButton'

const Register = () => {

  const [userName, setUserName] = useState('')
  const [userMail, setUserMail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if(user) {
      navigate('/home')
    }
  }, [user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(userPassword !== userPasswordConfirm) {
      return;
    }
    dispatch(registerInitiate(userMail, userPassword, userName))
  }

  return (
    <div>
      <h1>Registration form</h1>

      <form onSubmit={handleSubmit}>
        <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input value={userMail} onChange={(e) => setUserMail(e.target.value)}/>
        <input type='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
        <input type='password' value={userPasswordConfirm} onChange={(e) => setUserPasswordConfirm(e.target.value)}/>
        <MyButton type={'submit'}> submit </MyButton>
      </form>
    </div>
  )
}

export default Register