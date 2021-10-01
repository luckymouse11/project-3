import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="hero text-center flex-grow-1 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4">
        <span>🧀</span> Cheesebored <span>🧀</span>
      </h1>
      <p className="lead">This site has information about cheeses from all across the world.</p>
      <Link to="/recipes" className="btn btn-dark">Explore cheeses</Link>
    </div>
  )
}

export default Home