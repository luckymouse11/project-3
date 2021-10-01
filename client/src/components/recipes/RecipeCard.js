import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = () => {
  return (
    <div className="recipe">
      <Link to='/recipes'>
        <div className="card text-center h-100">
          <div className="card-header">
            <p>Recipe name</p>
          </div>
          <div className="card-image">
            <p>Recipe image</p>
          </div>
          <div className="card-text mt-auto">
            Recipe added by
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard