import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className='footer navbar navbar-expand navbar-light bg-light flex-column mt-2 fixed-bottom'>
      <div className='align-items-center'>
        <ul className='footer-nav nav navbar-nav mb-1 mb-lg-0'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/recipes' className='nav-link'>Recipes</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </div>
      <div className='container-fluid justify-content-center'>
        <p>&copy; designed and built by Kate Westbrook, Victor Liew and Megan Sowa, 2021.</p>
      </div>
    </footer>
  )
}

export default Footer