import express from 'express'
import { getAllRecipes, createRecipe, getSingleRecipe, updateRecipe, deleteRecipe, addComment, deleteComment } from '../controllers/recipes.js'
import { getMyProfile, getSingleUser } from '../controllers/users.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getAllFactors, getSingleFactor } from '../controllers/environmentalFactors.js'
import { getAllIngredients } from '../controllers/ingredients.js'
const router = express.Router()

router.route('/recipes')
  .get(getAllRecipes)
  .post(createRecipe)


// router.route('/createrecipe')

router.route('/recipes/:id')
  .get(getSingleRecipe)
  .put(secureRoute, updateRecipe)
  .delete(secureRoute, deleteRecipe)

router.route('/recipes/:id/comments')
  .post(secureRoute, addComment)

router.route('/recipes/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getMyProfile)

router.route('/users/:id')
  .get(getSingleUser)

router.route('/environmentalfactors')
  .get(getAllFactors)

router.route('/environmentalfactors/:id')
  .get(getSingleFactor)

router.route('/ingredients')
  .get(getAllIngredients)

export default router