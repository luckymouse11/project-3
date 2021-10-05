import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userIsAuthenticated } from '../helpers/Auth'
import RecipeCard from '../recipes/RecipeCard'


const MyProfile = ({ growingTree }) => {
  console.log('hello????')

  const [ hasError, setHasError ] = useState(false)
  const [ myProfile, setMyProfile ] = useState(null)
  // const [ recipe, setRecipe ] = useState([])


  useEffect(() => {
    const getMyProfile = async () => {
      
      try {
        const { data } = await axios.get('/api/profile')
        setMyProfile(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getMyProfile()
  }, [])
  

  // useEffect(() => console.log(myProfile), [myProfile])

  return (
    <>
      { userIsAuthenticated ? 
        <div className="container mt-4">
          <h2>My Profile</h2>
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
          <h4>My Recipes</h4>
          <div className='row g-3'>
            {myProfile.createdRecipes.length > 0 ?
              myProfile.createdRecipes.map( recipe => {
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

export default MyProfile