import React from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import User from './components/user/User'
import MyProfile from './components/user/MyProfile'

import RecipeIndex from './components/recipes/RecipeIndex'
import RecipeShow from './components/recipes/RecipeShow'

import AddRecipe from './components/auth/AddRecipe'

import EnvironmentalFactor from './components/environmentalfactors/EnvironmentalFactor'
import About from './components/about/About'

// Images
import growingTree from './images/growingTree.gif'

function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/addrecipe'>
            <AddRecipe />
          </Route>
          <Route exact path='/recipes'>
            <RecipeIndex growingTree={growingTree}/>
          </Route>
          <Route path='/recipes/:id'>
            <RecipeShow growingTree={growingTree}/>
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <MyProfile growingTree={growingTree}/>
          </Route>
          <Route path='/users/:id'>
            <User />
          </Route>
          <Route path='/environmentalfactor'>
            <EnvironmentalFactor />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
