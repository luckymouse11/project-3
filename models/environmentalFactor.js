import mongoose from 'mongoose'

const envFactorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  totalGraph: { type: String, required: true },
  secondGraphic: { type: String, required: true },
  description: { type: String, required: true }
})

export default mongoose.model('EnvironmentalFactor', envFactorSchema)