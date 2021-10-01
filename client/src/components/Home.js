import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="hero text-center flex-grow-1 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4">
        <span>GREEN PLATE</span>
      </h1>
      <p className="lead">Site info!</p>
      <Link to="/recipes" className="btn btn-dark">Explore recipes</Link>
    </div>
  )
}

export default Home