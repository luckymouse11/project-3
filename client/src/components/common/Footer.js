import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-nav'>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </div>
        <div>
          <p>&copy; designed and built by Kate Westbrook, Victor Liew and Megan Sowa, 2021.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer