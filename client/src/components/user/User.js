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
          <h2>User Profile: {user.username}</h2>
          <hr />
          
          <h4>{user.username}&apos;s environmental Impact Score</h4>
          <div className='impact-container d-flex justify-content-center'>
            <div className='factor-display carbon badge bg-secondary me-1 mb-1'>
              Carbon Footprint
            </div>
            <div className='factor-display land badge bg-secondary me-1 mb-1'>
              Land Use
            </div>
            <div className='factor-display pollution badge bg-secondary me-1 mb-1'>
              Water Pollution
            </div>
            <div className='factor-display water badge bg-secondary me-1 mb-1'>
              Water Use
            </div>
            <div className='factor-display waterscarcity badge bg-secondary me-1 mb-1'>
              Freshwater Use
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