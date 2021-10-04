import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ _id, recipeName, image, username }) => {
  return (
    <div className='recipe col-12 col-md-6 col-lg-4 mb-4'>
      <Link to={`/recipes/${_id}`}>
        <div className='container d-flex justify-content-between'>
          <div className='card text-center h-100'>
            <div className='card-header'>
              <p>{recipeName}</p>
            </div>
            <div className='card-image'>
              <img src={image}/>
            </div>
            <div className='card-text mt-auto'>
              Recipe added by {username}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default RecipeCard

