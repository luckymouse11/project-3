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
    <div className='container full-height'>
      <div className='form-container row justify-content-center'>
        <div className='col col col-lg-6 col-md-7 col-sm-11'>
          <form onSubmit={handleSubmit} className='form-field login flex-column align-items-center'>
            <h2>Log in</h2>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' className='form-control' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='text' className='form-control' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
            <button className='submit btn'>Log in</button>
            <p>Don&apos;t have an account? <Link to='/register'>Register here</Link></p>
          </form>
        </div>
        
      </div>
    </div>
    
  )
}

export default Login