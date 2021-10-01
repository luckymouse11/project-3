import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const RecipeShow = ({ growingTree }) => {

  // State
  const [ recipe, setRecipe ] = useState(null)
  const [ hasError, setHasError ] = useState(false)
  
  // Params
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios('https://ga-cheesebored.herokuapp.com/cheeses')
        setRecipe(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getRecipe()
  }, [id])

  useEffect(() => console.log(recipe), [recipe])

  return (
    <>
      { recipe ? 
        <div className="container mt-4">
          <h2>Recipe Name</h2>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={growingTree} />
            </div>
            <div className="col-12 col-md-6">
              <h4><span>🍽</span> Recipe Name</h4>
              <p>Recipe notes</p>
              <hr />
              <h4><span>🌍</span> Type of Cuisine</h4>
              <p className="lead"></p>
              <hr />
              <h4><span>🧑‍🍳</span> Added by</h4>
              <p className="lead">Recipe added by: xxxxxxxxx</p>
              <hr />
              <Link to="/recipes" className="btn btn-lg btn-yellow">Back to recipes</Link>
            </div>
          </div>
        </div>
        :
        <>
          {hasError ? 
            <h2 className="display-5 text-center">Oh! Something went wrong</h2> 
            : 
            <img className="growingTree" src={growingTree} alt="Growing Tree gif" />
          }
        </>
      }
    </>
  )
}

export default RecipeShow