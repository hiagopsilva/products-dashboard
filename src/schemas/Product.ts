import { Schema, model, Document } from 'mongoose'

interface ProductInterface extends Document {
  id ?: number,
  name ?: string,
  description ?: string,
  price ?: number
}

const ProductSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number
}, {
  timestamps: true
})

export default model<ProductInterface>('Product', ProductSchema)
