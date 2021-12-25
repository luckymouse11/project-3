import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { userIsAuthenticated, getTokenFromLocalStorage } from '../helpers/Auth.js'
import Select from 'react-select'
import 'dotenv/config'


const CreateRecipe = () => {

  const history = useHistory()

  const [ ingredients, setIngredients ] = useState([])

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const { data } = await axios('/api/ingredients/')
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

  const [ errors, setErrors ] = useState({
    recipeName: '',
    ingredients: '',
    recipeDescription: '',
    url: '',
    image: '',
  })
  
  const handleMultiSelected = (selected) => {
    console.log('selected ->', selected)
    const selectedIngredients = selected ? selected.map(item => item.id) : []
    console.log(selectedIngredients)
    setFormData({ ...formData, ingredients: selectedIngredients })
    setErrors({ ...errors, ingredients: 'ingredient not chosen' })
  }
  //console.log(req.body)!!!!!!

  const handleImageChange = async (e) => {
    const dataToSend = new FormData()
    dataToSend.append('file', e.target.files[0])
    dataToSend.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, dataToSend)
    setFormData({ ...formData, image: data.url })
    setErrors({ ...errors, image: 'image not added' })
  }
  const handleNameChange = (event ) => {
    setFormData({ ...formData, recipeName: event.target.value })
    setErrors({ ...errors, recipeName: 'recipe name not added' })
  }
  const handleDescriptionChange = (event) => {
    setFormData({  ...formData, recipeDescription: event.target.value })
    setErrors({ ...errors, recipeDescription: 'description not added' })
  }
  const handleUrlChange = (event) => {
    setFormData({  ...formData, url: event.target.value })
    setErrors({ ...errors, url: '' })
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    console.log(formData)
    try {
      const { data } = await axios.post(
        '/api/recipes/', 
        formData,
        { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` } })
      console.log(data)
      history.push('/recipes')
    } catch (err) {
      if (err.response.data.errors) setErrors(err.response.data.errors)
      console.log(err.response.data)
    }
  }

  return (
    
    <>
      { userIsAuthenticated() ?
      // if isAuthenticated is true:
        <div className='container full-height'>
          <div className='form-container row justify-content-center'>
            <div className='col col col-lg-6 col-md-7 col-sm-11'>
              <form onSubmit={handleSubmit} className='form-field createrecipe flex-column align-items-center'>
                <h2>Add New Recipe</h2>
                <label htmlFor='recipe-name' className='form-label'>Recipe Name</label>
                <input type='text' className='form-control' name='recipeName' placeholder='Apple Pie' value ={FormData.recipeName} onChange ={handleNameChange}/>
                {errors.name && <p className="error">{errors.recipeName}</p>}
                <label htmlFor='ingredients' className='form-label'>Ingredients included in recipe</label>
                <Select
                  options={ingredientOptions}
                  name='ingredients'
                  isMulti
                  onChange={(selected) => handleMultiSelected(selected)}
                />
                {errors.name && <p className="error">{errors.ingredients}</p>}
                <label htmlFor='description' className='form-label'>Recipe Description</label>
                <input type='textarea' className='form-control' name='recipeDescription' placeholder='Write a description of your recipe here or a short version of the recipe' value ={FormData.recipeDescription} onChange ={handleDescriptionChange}/>
                {errors.name && <p className="error">{errors.description}</p>}
                <label htmlFor='url' className='form-label'>Link to Full Recipe</label>
                <input type='text' className='form-control' name='url' placeholder='www.applepie.com' value ={FormData.url} onChange ={handleUrlChange}/>
                {errors.name && <p className="error">{errors.url}</p>}
                <label htmlFor='image' className='form-label'>Add an image</label>
                <br />
                <input type='file' name='image' className='input' onChange={handleImageChange} />
                {errors.name && <p className="error">{errors.image}</p>}

                <button className='submit btn btn-primary orange-button'>Add Recipe</button>
              </form>
            </div>
            
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

export default CreateRecipe