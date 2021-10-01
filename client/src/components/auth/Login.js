import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

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
      const { data } = await axios.post('/api/login', formData)
      setTokenToLocalStorage(data.token)
      history.push('/api/recipes')
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
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form-field register'>
          <h2>Log in</h2>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type='text' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
          <button className='submit btn'>Log in</button>
        </form>
        <p>Don&apos;t have an account? <Link to='/register'>Register here</Link></p>
      </div>
    </div>
    
  )
}

export default Login