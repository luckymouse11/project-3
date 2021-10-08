//cheeseCard

import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EnvironmentalFactorCard = ({   _id , name, image }) => {
  const params = useParams()
  console.log(params, 'params message')
  return (
    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-around'>
      <Link to={`/environmentalfactors/${_id}`}>
        <div className='env-factor-card'>
          <div className='env-factor-card-title'>
            <h5>{name}</h5>
          </div>
          <img src={image} alt={name} className='envfactor-card-image card-image w-100'></img>
        </div>
      </Link>
    </div>
  )
}
export default EnvironmentalFactorCard