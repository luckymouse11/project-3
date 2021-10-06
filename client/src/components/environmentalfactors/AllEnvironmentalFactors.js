// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// // State
// const [ allEnvFactors, setAllEnvFactors ] = useState([])
// const [ hasError, setHasError ] = useState(false)

// useEffect(({ growingTree }) => {
//   const getAllEnvFactors = async () => {
//     try {
//       const { data } = await axios('/api/environmentalfactors')
//       setAllEnvFactors(data)
//       console.log(allEnvFactors)
//       console.log(data)
//     } catch (err) {
//       setHasError(true)
//     }
//   }
//   getAllEnvFactors()
// }, [])

const AllEnvironmentalFactors = () => {
  
  return (
    <section className='envfactors'>
      <div className='container'>
  
        <article className='article'>
          <h2>Environmental Factors</h2>
          <p>94% of mammal biomass (the total quantity of animals on the planet), excluding humans, is livestock. This means livestock outweigh wild mammals by a factor of 15-to-1.4.
            <br></br>
            <br></br>
            Of the 28,000 species evaluated to be threatened with extinction on the IUCN Red List, agriculture and aquaculture is listed as a threat for 24,000 of them. 
            <br></br>
            <br></br>
            Food, therefore, lies at the heart of trying to tackle climate change, reducing water stress, pollution, restoring lands back to forests or grasslands, and protecting the world’s wildlife</p>
        </article>
      </div>

      <div className="grid-container">
        <div className="pos-1"> 
          <p>How does...</p>
        </div>
        <div className="pos-2">
          <h5>Carbon Footprint</h5>
          <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432484/Green%20Plate/co2-image_txzm1d.svg'/>
        </div>
        <div className="pos-3">
          <h5>Land Use</h5>
          <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432484/Green%20Plate/land-use_dki2em.png'/>
        </div>
        <div className="pos-4">
          <h5>Water Use</h5>
          <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432324/Green%20Plate/water-image_seblhm.png'/>
        </div>
        <div className="pos-5">
          <h5>Water Pollution</h5>
          <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432570/Green%20Plate/Screenshot_2021-10-05_at_12.16.00_jf1kjx.png'/>
        </div>
        <div className="pos-6">
          <h5>Water Scarcity</h5>
          <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432613/Green%20Plate/Screenshot_2021-10-05_at_12.16.43_vuhbc4.png'/>
        </div>
        <div className="pos-7">
          <p>affect the planet?</p>
        </div>
      </div>  
      <>
      </>
    </section>
  )
}

export default AllEnvironmentalFactors

{/* {hasError ? 
            <h5 className="display-5 text-center">Uh oh... Something went wrong</h5> 
            : 
            <img className="growingTree" src={ growingTree } alt="GrowingTree gif" />
          } */}

