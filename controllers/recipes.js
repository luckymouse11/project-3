import Recipe from '../models/recipe.js'

// GET /recipes
// Return all recipes
export const getAllRecipes = async (_rec, res) => {
  const recipes = await Recipe.find()
  console.log('Get Recipes ->', recipes)
  return res.status(200).json(recipes)
}

// POST /recipes
// Create a new recipe
export const createRecipe = async (req, res) => {
  const currentUser = req.user
  try {
    console.log('req.currentUser', currentUser)
    console.log('req.body ->', req.body)
    const recipeWithOwner = { ...req.body, owner: currentUser._id }
    console.log('recipeWithOwner', recipeWithOwner)
    const recipeToAdd = await Recipe.create(recipeWithOwner)
    res.status(201).json(recipeToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

// GET /recipes/:id
// Return a single recipe based on their ID
export const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const recipe = await Recipe.findById(id).populate('owner').populate('comments.owner')
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Recipe not found', errors: err })
  }
}

// PUT /recipes/:id
// Update a recipe
export const updateRecipe = async (req, res) => {
  const { id } = req.params
  try {
    const recipeToUpdate = await Recipe.findById(id)
    if (!recipeToUpdate) throw new Error()
    if (!recipeToUpdate.owner.equals(req.currentUser._id)) throw new Error('Unauthorised')
    console.log(recipeToUpdate)
    await recipeToUpdate.update(req.body)
    return res.status(202).json(recipeToUpdate)
  } catch (err) {
    console.log('recipe not updated')
    console.log(err)
    return res.status(404).json(err)
  }
}

// DELETE /recipes/:id
// Delete an recipe from the collection
export const deleteRecipe = async (req, res) => {
  const { id } = req.params
  try {
    const recipeToDelete = await Recipe.findById(id)
    if (!recipeToDelete) throw new Error('Recipe not found')
    if (!recipeToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorised')
    await recipeToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log('Recipe has not been deleted')
    console.log(err)
    return res.status(404).json({ message: 'recipe in hiding', errors: err.message })
  }
}

// POST /recipes/:id/comments
// Add a review to a specific recipe
export const addComment = async (req, res) => {
  const { id } = req.params
  try {
    const recipe = await Recipe.findById(id)                        // Find recipe with id in params
    if (!recipe) throw new Error()
    const newComment = { ...req.body, owner: req.currentUser._id } // Create comment based on req.body and req.currentUser
    recipe.comments.push(newComment)                                 // Pushing comment to the comments array on the recipe document
    await recipe.save()                                            // Saving the recipe document
    return res.status(200).json(recipe)                            // Return recipe to user
  } catch (err) {
    console.log('Comment not added')
    console.log(err)
  }
}

// DELETE /recipes/:id/comments/:commentId
// Find a specific recipe and find relevant commentId
// If review is owned by requester then -> delete
export const deleteComment = async (req, res) => {
  const { id, commentId } = req.params
  try {
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error('Recipe not found')
    const commentToDelete = recipe.comments.id(commentId)
    if (!commentToDelete) throw new Error('Comment not found')
    if (!commentToDelete.owner.equals(req.currentUser._id) && !recipe.owner.equals(req.currentUser._id)) throw new Error('Unauthorised')
    await commentToDelete.remove()
    await recipe.save()
    return res.sendStatus(204)
  } catch (err) {
    console.log('Comment not deleted!')
    console.log(err.message)
    return res.status(404).json(err.message)
  }
}