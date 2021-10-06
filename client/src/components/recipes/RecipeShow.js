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
            <div className='col-6'>
              <img src={recipe.image} alt={recipe.name} className='col-12'/>
            </div>
            <div className='col-12 col-md-6'>
              <div className ='environmental-impact text-center'>
                <h2>Environmental Impact</h2>
                <div className='factors d-flex justify-content-between'>
                  <div className ='CO2'></div>
                  <div className ='Water'>Water</div>
                  <div className ='Land'>Land</div>
                </div>
                <hr />
              </div>
              <h4><span>🍽</span> </h4>
              {recipe.ingredients.map(item =>
                <div className="badge bg-secondary me-1 mb-1" key={item.id}>
                  {item.attributes.ingredient}
                </div>
              )}
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
              <Link to='/recipes' className='btn btn-lg'>Back to recipes</Link>
            </div>
          </div>
          <div className='comment-section container row mt-4 border'>
            <p>Comments Section</p>
          </div>
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