import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import EnvironmentalFactor from './EnvironmentalFactor'

const EnvironmentalFactorIndex = () => {

  // State
  const [ allEnvFactors, setAllEnvFactors ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {

    const getAllEnvFactors = async () => {
      try {
        const { data } = await axios('/api/environmentalfactors')
        setAllEnvFactors(data)
        console.log(allEnvFactors)
        console.log(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getAllEnvFactors()
  }, [])

  return (
    <section className="envfactors-list container mt-4">
      <div className="row">

        {allEnvFactors.length > 0 ?

          allEnvFactors.map( envFactor => {
            console.log(envFactor)
            return <EnvironmentalFactor key={envFactor._id} {...envFactor} />
          })

          :

          <>
            {hasError ? 
              <h2 className="display-5 text-center">Uh oh... something went wrong!</h2> 
              : 
              <p>Error</p>
            }
          </>
      
        }

      </div>
    </section>
  )


}

export default EnvironmentalFactorIndex