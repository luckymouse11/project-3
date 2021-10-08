import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/Auth.js'
import Select from 'react-select'
import 'dotenv/config'


const CreateRecipe = () => {

  const history = useHistory()

  const [ ingredients, setIngredients ] = useState([])

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const { data } = await axios('/api/ingredients')
        setIngredients(data)
      } catch (err) {
        console.log(err)
      }
    }
    getIngredients()
  }, [])

  const ingredientOptions = ingredients.map(ingredient => (
    { value: ingredient.ingredient, label: ingredient.ingredient, id: ingredient._id }
  ))

  const [formData, setFormData] = useState({
    recipeName: '',
    ingredients: [],
    recipeDescription: '',
    url: '',
    image: '',
  })
  
  const handleMultiSelected = (selected) => {
    console.log('selected ->', selected)
    const selectedIngredients = selected ? selected.map(item => item.value) : []
    console.log(selectedIngredients)
    setFormData({ ...formData, ingredients: selected })
  }

  const handleImageChange = async (e) => {
    const dataToSend = new FormData()
    dataToSend.append('file', e.target.files[0])
    dataToSend.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, dataToSend)
    setFormData({ ...formData, image: data.url })
  }
  const handleNameChange = (event ) => {
    setFormData({ ...formData, recipeName: event.target.value })
  }
  const handleDescriptionChange = (event) => {
    setFormData({  ...formData, recipeDescription: event.target.value })
  }
  const handleUrlChange = (event) => {
    setFormData({  ...formData, url: event.target.value })
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    console.log(formData)
    try {
      const { data } = await axios.post('/api/recipes', formData)
      console.log(data)
      history.push('/recipes')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    
    <>
      { userIsAuthenticated() ?
      // if isAuthenticated is true:
        <section className='form-page'>
          <div className='container'>
            <div className='row justify-content-center'>
              <form onSubmit={handleSubmit} className='col col col-lg-6 col-md-7 col-sm-11'>
                
                <h2>Add New Recipe</h2>

                <div className='form-field'>
                  <label htmlFor='recipe-name' className='form-label'>Recipe Name</label>
                  <input type='text' className='form-control' name='recipeName' placeholder='Apple Pie' value ={FormData.recipeName} onChange ={handleNameChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='ingredients' className='form-label'>Ingredients included in recipe</label>
                  <Select
                    options={ingredientOptions}
                    name='ingredients'
                    isMulti
                    onChange={(selected) => handleMultiSelected(selected)}
                  />
                </div>
                <div className='form-field'>
                  <label htmlFor='description' className='form-label'>Recipe Description</label>
                  <input type='textarea' className='form-control' name='recipeDescription' placeholder='Write a description of your recipe here or a short version of the recipe' value ={FormData.recipeDescription} onChange ={handleDescriptionChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='url' className='form-label'>Link to Full Recipe</label>
                  <input type='text' className='form-control' name='url' placeholder='www.applepie.com' value ={FormData.url} onChange ={handleUrlChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='image' className='form-label'>Add an image</label>
                  <input type="file" name='image' className='input' onChange={handleImageChange} />
                </div>
                

                <button className='submit btn btn-primary orange-button'>Add Recipe</button>
              </form>
            
            </div>
          </div>
        </section>
        :
        // if isAuthenticated is false:
        <>
          <h2 className='display-5 text-center'>Oh no!</h2>
          <div>
            <p>Please <Link to='/register'>register as a user</Link> to add a recipe.</p>
            <p>Already registered? <Link to='/login'>Login</Link></p>
          </div>
        </>
      }
    </>
  )
}

export default CreateRecipe