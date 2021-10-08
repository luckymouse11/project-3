import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const RecipeShow = ({ growingTree }) => {

  // State
  const [ recipe, setRecipe ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  // const { attributes: { recipeName, recipeDescription, url, image }, relationships } = recipe.data
  // const ingredients = recipe.ingredients.populated ? recipe.included.filter(included => included.type === 'ingredients') : []
  
  // Params
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios(`/api/recipes/${id}`)
        setRecipe(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getRecipe()
  }, [id])

  //function to access each ingredient.carbonfootprint (or whichever env factor), and put into an array (useState?)
  //then map using an acc to get total carbonfootprint of recipe

  useEffect(() => console.log(recipe), [recipe])

  return (
    <>
      { recipe ? 
        <div className='recipe-show container mt-4'>
          <h2>{recipe.recipeName}</h2>
          <hr />
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img src={recipe.image} alt={recipe.name} className='col-12'/>
            </div>
            <div className='col-12 col-md-6'>
              <div className ='environmental-factors text-center'>
                <h2>Environmental Impact</h2>
                <div className='factors d-flex justify-content-between'>
                  <Link to={'/environmentalfactors/615eea9353fed8cb12ab3314'} className ='btn'>
                    <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432484/Green%20Plate/co2-image_txzm1d.svg' alt='co2-image'/>
                    <p>Carbon Footprint</p>
                    <p>{recipe.ingredients.reduce((total,ingredient) => total += ingredient.carbonFootprint, 0)}kg</p>
                  </Link>
                  <Link to={'/environmentalfactors/615eea9353fed8cb12ab3315'} className ='btn'>
                    <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432484/Green%20Plate/land-use_dki2em.png' alt='land-image'/>
                    <p>Land Use</p>
                    <p>{recipe.ingredients.reduce((total,ingredient) => total += ingredient.landUse, 0)}m<sup>2</sup></p>
                  </Link>
                  <Link to={'/environmentalfactors/615eea9353fed8cb12ab3316'} className ='btn'>
                    <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432324/Green%20Plate/water-image_seblhm.png' alt='water-image'/>
                    <p>Water Usage</p>
                    <p>{recipe.ingredients.reduce((total,ingredient) => total += ingredient.waterUse, 0)}kg</p>
                  </Link>
                  <Link to={'/environmentalfactors/615eea9353fed8cb12ab3318'} className ='btn'>
                    <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432570/Green%20Plate/Screenshot_2021-10-05_at_12.16.00_jf1kjx.png' alt='pollution-image'/>
                    <p>Water Pollution</p>
                    <p>{recipe.ingredients.reduce((total,ingredient) => total += ingredient.waterPollution, 0)}g</p>
                  </Link>
                  <Link to={'/environmentalfactors/615eea9353fed8cb12ab3317'} className ='btn'>
                    <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432613/Green%20Plate/Screenshot_2021-10-05_at_12.16.43_vuhbc4.png' alt='scarcity-image'/>
                    <p>Water Scarcity</p>
                    <p>{recipe.ingredients.reduce((total,ingredient) => total += ingredient.scarcityWeightedWaterUse, 0)}kg</p>
                  </Link>
                </div>
                <h6><em>Measurements are per kilogram of food product</em></h6>
                <hr />
              </div>
              <h4><span>🍽</span> Key Ingredients</h4>
              {recipe.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.ingredient}</li>)}
              <hr />
              <h4><span>🌍</span> Link to full recipe instructions</h4>
              <p>This recipe is from: <a href={recipe.url}>{recipe.url}</a></p>
              <hr />
              <h4><span>📝</span> Overview</h4>
              <p>{recipe.recipeDescription}</p>
              <hr />
              <h4><span>🧑‍🍳</span> Added by</h4>
              <p><Link to={`/users/${recipe.owner._id}`}>{recipe.owner.username}</Link></p>
              <hr />
              <Link to='/recipes' className='btn btn-primary orange-button'>Back to recipes</Link>
            </div>
          </div>
          {/* <div className='comment-section container row mt-4 border'>
            <p>Comments Section</p>
          </div> */}
        </div>
        
        :
        <>
          {hasError ? 
            <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
            : 
            <img className='growingTree' src={growingTree} alt='Growing Tree gif' />
          }
        </>
      }
    </>
  )
}

export default RecipeShow