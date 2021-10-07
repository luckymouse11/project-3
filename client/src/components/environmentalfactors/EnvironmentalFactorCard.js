import React from 'react'
import { Link } from 'react-router-dom'

const EnvironmentalFactorCard = ({  name, image, _id }) => {

  return (
    <Link to={`/environmentalfactors/${_id}`}>
      <div className='env-factor-card'>
        <div className='env-factor-card-title'>
          <h5>{name}</h5>
        </div>
        <img src={image} alt={name} className='envfactor-card-image'></img>
      </div>
    </Link>
  )
}
export default EnvironmentalFactorCard