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
    <div className='navbar'>
      <div className='container'>
        <div className='home-logo'>
          <Link to='/'>HOME</Link>
        </div>
        <div className='nav'>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users/'>Profile</Link>
          </li>
          <li>
            <Link to='/environmentalfactors/'>Environmental Factors</Link>
          </li>
          {
            userIsAuthenticated() ?

            // if isAuthenticated is true:
              <li>
                <span className='logout-link' onClick={handleLogout}>Logout</span>
              </li>

              :

              //isAuthenticated is false:
              <> 
                <li>
                  <Link to='/register'>Register</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Nav