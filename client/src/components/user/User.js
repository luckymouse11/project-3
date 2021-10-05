import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import RecipeCard from '../recipes/RecipeCard'

const User = ({ growingTree }) => {

  const [ hasError, setHasError ] = useState(false)
  const [ user, setUser ] = useState(null)
  // const [ recipe, setRecipe ] = useState([])


  const { id } = useParams()

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios(`/api/users/${id}`)
        setUser(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getUser()
  }, [id])

  useEffect(() => console.log(user), [user])

  return (
    <>
      { user ? 
        <div className="container mt-4">
          <h2>{user.username}</h2>
          <hr />
          
          <h4>Environmental Impact Score</h4>
          <div className='impact-container d-flex'>
            <div className='factor-display'>
              <h5>Carbon Footprint</h5>
            </div>
            <div className='factor-display'>
              <h5>Land Use</h5>
            </div>
            <div className='factor-display'>
              <h5>Water Pollution</h5>
            </div>
            <div className='factor-display'>
              <h5>Water Use</h5>
            </div>
            <div className='factor-display'>
              <h5>Freshwater Use</h5>
            </div>
            
          </div>
          <hr />
          <h4>{user.username}&apos;s Recipes</h4>
          <div className='row g-3'>
            {user.createdRecipes.length > 0 ?
              user.createdRecipes.map( recipe => {
                console.log(recipe)
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
        </div>
        :
        <>
          {hasError ? 
            <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
            : 
            <img className='growingTree' src={growingTree} alt='GrowingTree gif' />
          }
        </>
      }
    </>
  )

}

export default User