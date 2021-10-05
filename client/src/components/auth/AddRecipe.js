import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/Auth.js'


const AddRecipe = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    recipeName: '',
    ingredients: '',
    recipeDescription: '',
    url: '',
    image: '',
  })

  const handleChange = (event)=>{
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/recipes', formData)
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

  // recipeName: 'applepie',
  //   ingredients: 'apple',
  //   recipeDescription: 'apple pie',
  //   url: 'applepie.com',
  //   image: 'applepie.jpg'

  return (
    
    <>
      { userIsAuthenticated() ?
      // if isAuthenticated is true:
        <div className='container'>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
              <label htmlFor='password'>Password</label>
              <input type='text' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
              <button className='submit'>Log in</button>
            </form>
          </div>
        </div>
        :
        // if isAuthenticated is false:
        <>
          <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
        </>
      }
    </>
  )
}

export default AddRecipe