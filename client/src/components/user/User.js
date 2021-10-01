import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const User = ({ growingTree }) => {

  const [ hasError, setHasError ] = useState(false)
  const [ user, setUser ] = useState(null)
  // const [ recipe, setRecipe ] = useState([])


  const { id } = useParams()

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios('/users/:id')
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
          <div>IMAGE HERE!</div>
          <div>USER SCORE HERE!</div>
          <div>
            <div>{user.createdRecipes}</div>
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

export default User