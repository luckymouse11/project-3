import Ingredient from '../models/ingredient.js'

export const getAllIngredients = async (req, res) => {
  const ingredients = await Ingredient.find()
  console.log('Get Ingredients ->', ingredients)
  return res.status(200).json(ingredients)
}