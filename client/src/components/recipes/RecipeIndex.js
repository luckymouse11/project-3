import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from 'react-select'


// Components
import RecipeCard from './RecipeCard'

const RecipeIndex = ({ growingTree }) => {

  // State
  const [ recipes, setRecipes ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  const [ ingredients, setIngredients ] = useState([])
  const [ filteredRecipes, setFilteredRecipes ] = useState([])

  const [formData, setFormData] = useState({
    ingredientOptions: [],
  })



  useEffect(() => {
    const getIngredients = async () => {
      try {
        const { data } = await axios('/api/ingredients')
        setIngredients(data)
        console.log('setIngredients ->', data)
      } catch (err) {
        console.log(err)
      }
    }
    getIngredients()
  }, [])

  const ingredientOptions = ingredients.map(ingredient => (
    { 'value': ingredient.id, 'label': ingredient.ingredient }
  ))



  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios('/api/recipes')
        setRecipes(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getRecipes()
  }, [])

  // const handleChange = (event)=>{
  //   const newObj = { ...formData, [event.target.name]: event.target.value }
  //   setFormData(newObj)
  // }

  const handleMultiSelected = (selected, name) => {
    console.log('selected ->', selected)
    const values = selected ? selected.map(item => item.value) : []
    setFormData({ ...formData, [name]: values })
  }

  const handleFilter = () => {
    const filteredArray = recipes.filter(recipe => recipe.ingredients.includes(ingredients))
    setFilteredRecipes(filteredArray)
    console.log('filteredRecipes ->', filteredRecipes)
  }


  return (
    <section className='recipe-list container mt-4'>
      <div>
        <Link to='/CreateRecipe' className='btn btn-primary mb-4 orange-button add-recipe-button'>Add Your Own Recipe</Link>
        <div className='row justify-content-center mb-4'>
          <Select 
            className='col-12 col-md-8 col-lg-8 center'
            options={ingredientOptions}
            name='ingredients'
            isMulti='true'
            onChange={(selected) => handleMultiSelected(selected, 'ingredients'), handleFilter}
          />
        </div>

      </div>
      <div className='row g-3'>
        {recipes.length > 0 ?
          (filteredRecipes.length > 0 ? filteredRecipes : recipes).map( recipe => {
            const owner = recipe.owner
            console.log(recipe)
            console.log(owner)
            return <RecipeCard key={recipe._id} {...recipe}/>
          })
          :
          <>
            {hasError ? 
              <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
              : 
              <img className='growingTree' src={growingTree} alt='GrowingTree gif' />
            }
          </>
        }
      </div>
    </section>
  )
}

export default RecipeIndex