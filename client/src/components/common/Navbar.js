import React, { useEffect } from 'react'
import { Link , useHistory , useLocation } from 'react-router-dom'

const Nav = () => {

  const history = useHistory()
  const location = useLocation()

  useEffect(()=>{
  }, [location.pathname])

  const getTokenFromLocalStorage = ()=>{
    return window.localStorage.getItem('token')
  }

  const getPayload = ()=>{
    const token = getTokenFromLocalStorage()
    if (!token) return
    const splitToken = token.split('.')
    if (splitToken.length < 3) return
    return JSON.parse(atob(splitToken[1]))
  }

  const userIsAuthenticated = ()=>{
    const payload = getPayload()
    if (!payload) return
    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div className="navbar-header">
          <Link to='/' className='navbar-brand'>HOME</Link>
        </div>
      
        <div className='nav navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item m-2'>
            <Link to='/recipes' className='nav-link'>Recipes</Link>
          </li>
          <li className='nav-item m-2'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          
          
          {
            userIsAuthenticated() ?

            // if isAuthenticated is true:
              <>
                <li className='nav-item m-2'>
                  <Link to='/users/' className='nav-link'>Profile</Link>
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