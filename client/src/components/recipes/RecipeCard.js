import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ _id, recipeName, image, ingredients }) => {

  return (
    <div className='recipe col-12 col-md-6 col-lg-4'>
      
      <div className='card h-100 text-center'>
        <div className='card-header'>
          <h5>{recipeName}</h5>
        </div>
        <img src={image} alt={recipeName} className='card-image'></img>
        <div className='card-text'>
          <p>
            Carbon Footprint: 
            {ingredients.carbonFootprint}
          </p>
          <Link to={`/recipes/${_id}`} className='btn btn-primary card-button mb-2'>View {recipeName} recipe</Link>
        </div>
      </div>
  
    </div>
  )
}
export default RecipeCard

