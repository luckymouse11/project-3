import React from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import User from './components/user/User'

import Recipes from './components/recipes/Recipes'
import Recipe from './components/recipes/Recipe'

import AddRecipe from './components/recipes/AddRecipe'

import EnvironmentalFactor from './components/environmentalfactors/EnvironmentalFactor'
import About from './components/about/About'

function App() {
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
          <Recipes />
        </Route>
        <Route path='/recipes/:id'>
          <Recipe />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
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
}

export default App
