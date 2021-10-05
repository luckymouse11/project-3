import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { getPayload } from '../helpers/Auth'


const MyProfile = ({ growingTree }) => {
  console.log('hello????')

  const [ hasError, setHasError ] = useState(false)
  const [ myProfile, setMyProfile ] = useState(null)
  // const [ recipe, setRecipe ] = useState([])


  const { id } = useParams()

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
  }, [id])

  useEffect(() => console.log(myProfile), [myProfile])

  return (
    <>
      { myProfile ? 
        <div className="container mt-4">
          <h2>My Profile - {myProfile.username}</h2>
          <hr />
          <div>IMAGE HERE!</div>
          <div>USER SCORE HERE!</div>
          <div>
            <div>{myProfile.createdRecipes}</div>
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

export default MyProfile