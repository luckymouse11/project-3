import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import EnvironmentalFactorCard from './EnvironmentalFactorCard'

const AllEnvironmentalFactors = () => {

  // State
  const [ allEnvFactors, setAllEnvFactors ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {

    const getAllEnvFactors = async () => {
      try {
        const { data } = await axios('/api/environmentalfactors/')
        setAllEnvFactors(data)
        console.log('allEnvFactors ->', data)
      } catch (err) {
        setHasError(true)
      }
    }
    getAllEnvFactors()
  }, [])

  return (
    <>
      <section className='envfactors container'>
        <article className='article mt-4'>
          <h3>Why do we need to think about the environment when we choose ingredients?</h3>
          <p>94% of mammal biomass (the total quantity of animals on the planet), excluding humans, is livestock. This means livestock outweigh wild mammals by a factor of 15-to-1.4.</p>
          <p>Of the 28,000 species evaluated to be threatened with extinction on the IUCN Red List, agriculture and aquaculture is listed as a threat for 24,000 of them.</p>
          <p>Food, therefore, lies at the heart of trying to tackle climate change, reducing water stress, pollution, restoring lands back to forests or grasslands, and protecting the world’s wildlife</p>
        </article>
        
        <div className="envfactors-container mt-4">
          <h3>Environmental Factors</h3>
          <div className="envfactors-list row g-3">
    
            {allEnvFactors.length > 0 ?
    
              allEnvFactors.map( envFactor => {
                console.log(envFactor)
                return <EnvironmentalFactorCard key={envFactor._id} {...envFactor} />
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
          <div>
            <h3>Data compiled from</h3>
            <div><a href='https://ourworldindata.org/environmental-impacts-of-food#'>Our World in Data</a></div>
            <div><a href='https://www.sciencedirect.com/topics/engineering/water-withdrawal'>Science Direct</a></div>
          </div>
        </div>
      </section>
    </>
  )


}

export default AllEnvironmentalFactors