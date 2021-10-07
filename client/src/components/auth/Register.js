import React, { useState } from 'react'
import { useHistory , Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) =>{
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const history = useHistory()

  const handleSubmit = async(event) =>{
    event.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err){
      //error message set
      setErrors(err.response.data.errors)
      console.log(errors)
    }
  }

  return (
    <div className='container'>
      <div className='form-container row justify-content-center'>
        <div className='col col-lg-6 col-md-7 col-sm-11'>
          <form onSubmit={handleSubmit} className='form-field register flex-column align-items-center'>
            <h2>Register</h2>
            <label htmlFor='username' className='form-label'>Username</label>
            <input type='text' className='form-control' name='username' placeholder='Username' value ={FormData.username} onInput={handleChange}/>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
            <label htmlFor='passwordConfirmation' className='form-label'>Confirm Password</label>
            <input type='password' className='form-control' name='passwordConfirmation' placeholder='Password again' value ={FormData.passwordConfirmation} onInput={handleChange}/>
            <button className='submit btn'>Register</button>
            <p>Already registered? <Link to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Register