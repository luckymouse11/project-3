import React, { useEffect } from 'react'
import { Link , useHistory , useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/Auth.js'

const Nav = () => {

  const history = useHistory()
  const location = useLocation()

  useEffect(()=>{
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    
    <nav className='navbar navbar-expand-sm navbar-light bg-light justify-content-between bb-3'>
      <div className='container-fluid'>
        <div className="navbar-header">
          <Link to='/' className='navbar-brand'><img src='https://res.cloudinary.com/mesowa/image/upload/v1633551454/Green%20Plate/logo_twyfzc.png' className="navimg"/> </Link>
        </div>
      
        <div className='nav navbar-nav mb-1 mb-lg-0'>
          <li className='nav-item m-2'>
            <Link to='/recipes' className='nav-link'>Recipes</Link>
          </li>
          <li className='nav-item m-2'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li className='nav-item m-2'>
            <Link to='/environmentalfactors'  className='nav-link'>Environmental Factors</Link>
          </li>
          {
            userIsAuthenticated() ?

            // if isAuthenticated is true:
              <>
                <li className='nav-item m-2'>
                  <Link to={'/profile'} className='nav-link'>Profile</Link>
                </li>
                <li className='nav-item m-2'>
                  <span className='logout-link nav-link' onClick={handleLogout} >Logout</span>
                </li>
              </>

              :

              //isAuthenticated is false:
              <> 
                <li className="nav-item m-2 dropdown">
                  <Link to='/login' className="dropdown-toggle nav-link" data-toggle="dropdown">Login/Register<span className="caret"></span></Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to='/register' className="dropdown-item">Register</Link></li>
                    <li><Link to='/login' className="dropdown-item">Login</Link></li>
                  </ul>
                </li>
              </>
          }
        </div>
      
      </div>
    </nav>
  )
}

export default Nav