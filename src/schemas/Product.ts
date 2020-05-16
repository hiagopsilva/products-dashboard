import { Schema, model, Document } from 'mongoose'

interface ProductInterface extends Document {
  title ?: string,
  brandName ?: string,
  itemModel ?: string,
  color ?: string,
  memorySize ?: number,
  hardDiskSize ?: string,
  displayResolution ?: string,
  graphicsCard ?: string,
  processor ?: string,
  description ?: string,
  price ?: number
}

const ProductSchema = new Schema({
  title: String,
  brandName: String,
  itemModel: String,
  color: String,
  memorySize: Number,
  hardDiskSize: String,
  displayResolution: String,
  graphicsCard: String,
  processor: String,
  description: String,
  price: Number
}, {
  timestamps: true
})

export default model<ProductInterface>('Product', ProductSchema)
