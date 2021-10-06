import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ _id, recipeName, image, ingredients }) => {

  return (
    <div className='recipe col-12 col-md-6 col-lg-4'>
      <Link to={`/recipes/${_id}`}>
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
            <p className='btn btn-primary'>View {recipeName} recipe</p>
          </div>
        </div>
      </Link>
      
  
    </div>
  )
}
export default RecipeCard

