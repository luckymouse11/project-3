import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import EnvironmentalFactor from './EnvironmentalFactor'

const AllEnvironmentalFactors = ({ growingTree }) => {

  // State
  const [ allEnvFactors, setAllEnvFactors ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {
    const getAllEnvFactors = async () => {
      try {
        const { data } = await axios('/api/environmentalfactors')
        setAllEnvFactors(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getAllEnvFactors()
  }, [])

  return (
    <section className="recipe-list container mt-4">
      <div className="row">
        {allEnvFactors.length > 0 ?
          allEnvFactors.map( recipe => {
            console.log(recipe)
            return <EnvironmentalFactor key={allEnvFactors._name} {...allEnvFactors} />
          })
          :
          <>
            {hasError ? 
              <h2 className="display-5 text-center">Uh oh... Something went wrong</h2> 
              : 
              <img className="growingTree" src={growingTree} alt="GrowingTree gif" />
            }
          </>
        }
      </div>
    </section>
  )
}

export default AllEnvironmentalFactors