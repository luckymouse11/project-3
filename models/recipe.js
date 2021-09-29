import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  satisfaction: { type: Number, required: true, min: 1, max: 10 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true, maxlength: 50 },
  ingredients: [{ type: String, required: true }],
  recipeDescription: { type: String, required: true, maxlength: 1000 },
  url: { type: String },
  image: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
})

recipeSchema.virtual('avgRating')
  .get(function(){
    if (!this.comments.length) return 'Not yet rated'
    const sum = this.comments.reduce((acc, comment) => {
      return acc + comment.satisfaction
    }, 0)
    return (sum / this.comments.length).toFixed(1)
  })

recipeSchema.set('toJSON', { virtuals: true })

export default mongoose.model('Recipe', recipeSchema)