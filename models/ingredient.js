import mongoose from 'mongoose'

const ingredientSchema = new mongoose.Schema({
  ingredient: { type: String, required: true },
  waterUse: { type: Number, required: true },
  scarcityWeightedWaterUse: { type: Number, required: true },
  landUse: { type: Number, required: true },
  waterPollution: { type: Number, required: true },
  carbonFootprint: { type: Number, required: true }
})

export default mongoose.model('Ingredient', ingredientSchema)