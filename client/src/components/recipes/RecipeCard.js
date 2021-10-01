import React from 'react'
import { Link } from 'react-router-dom'
// import RecipeIndex from './RecipeIndex'

const RecipeCard = ({ recipeName }) => {
  return (
    <div className="recipe col-12 col-md-6 col-lg-4 mb-4">
      <Link to='/recipes'>
        <div className="card text-center h-100">
          <div className="card-header">
            <p>{recipeName}</p>
          </div>
          <div className="card-image">
            <img src='../images/growingTree.gif'/>
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