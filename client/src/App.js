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

import CreateRecipe from './components/auth/CreateRecipe'

import EnvironmentalFactor from './components/environmentalfactors/EnvironmentalFactor'
import AllEnvironmentalFactors from './components/environmentalfactors/AllEnvironmentalFactors'

import About from './components/about/About'

// Images
import growingTree from './images/growingTree.gif'
import EnvironmentalFactorCard from './components/environmentalfactors/EnvironmentalFactorCard'

function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/createrecipe'>
            <CreateRecipe />
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
          <Route exact path='/environmentalfactors'>
            <AllEnvironmentalFactors />
          </Route>
          <Route path='/environmentalfactors/:id'>
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
