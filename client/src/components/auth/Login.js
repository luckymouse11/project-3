import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event)=>{
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:4000/login', formData)
      setTokenToLocalStorage(data.token)
      history.push('/recipes')
    } catch (err) {
      // could add an error message to user here? window pop up? or animate box?
      console.log(err)
    }
  }
  const setTokenToLocalStorage = (token)=>{
    window.localStorage.setItem('token',token)
  }

  

  return (
    <div className='container'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type='text' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
          <button className='submit'>Log in</button>
        </form>
      </div>
    </div>
    
  )
}

export default Login