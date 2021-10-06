import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/Auth.js'
import Select from 'react-select'
import ImageUpload from '../helpers/ImageUpload.js'


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
    { 'value': ingredient.id, 'label': ingredient.ingredient }
  ))

  const [formData, setFormData] = useState({
    recipeName: '',
    ingredients: [],
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
      console.log(data)
      history.push('/recipes')
    } catch (err) {
      console.log(err)
    }
  }
  const handleMultiSelected = (selected, name) => {
    console.log('selected ->', selected)
    const values = selected ? selected.map(item => item.value) : []
    setFormData({ ...formData, [name]: values })
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, image: url })
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
                <input type='text' className='form-control' name='recipeName' placeholder='Apple Pie' value ={FormData.recipeName} onInput={handleChange}/>
                <label htmlFor='ingredients' className='form-label'>Ingredients</label>
                <Select
                  options={ingredientOptions}
                  name='ingredients'
                  isMulti
                  onChange={(selected) => {
                    handleMultiSelected(selected, 'ingredients')
                  }}
                />
                <label htmlFor='description' className='form-label'>Recipe Description</label>
                <input type='textarea' className='form-control' name='recipeDescription' placeholder='Write a description of your recipe here or a short version of the recipe' value ={FormData.recipeDescription} onInput={handleChange}/>
                <label htmlFor='url' className='form-label'>Link to Full Recipe</label>
                <input type='text' className='form-control' name='url' placeholder='www.applepie.com' value ={FormData.url} onInput={handleChange}/>
                <label htmlFor='image' className='form-label'>Image</label>
                <div className='field'>
                  <ImageUpload value={formData.image} name='image' handleImageUrl={handleImageUrl}/>
                </div>

                <button className='submit btn'>Add Recipe</button>
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