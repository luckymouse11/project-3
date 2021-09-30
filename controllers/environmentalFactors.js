import EnvironmentalFactor from '../models/environmentalFactor.js'

export const getAllFactors = async (req, res) => {
  const factors = await EnvironmentalFactor.find()
  console.log('Get Factors ->', factors)
  return res.status(200).json(factors)
}

// GET /environmentalfactors/:id
// Return a single factors based on their ID
export const getSingleFactor = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const factor = await EnvironmentalFactor.findById(id)
    return res.status(200).json(factor)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Environmental factor not found', errors: err })
  }
}