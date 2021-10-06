import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="hero text-center flex-grow-1 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <img src='https://res.cloudinary.com/mesowa/image/upload/v1633551455/Green%20Plate/landing_l6kl6h.png' className="img-fluid" alt="Responsive image"/>
      <Link to="/recipes" className="btn btn-dark">Explore recipes</Link>
    </div>
  )
}

export default Home