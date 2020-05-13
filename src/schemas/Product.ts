import { Schema, model, Document } from 'mongoose'

interface ProductInterface extends Document {
  title ?: string,
  brandName ?: string,
  ItemModel ?: string,
  Color ?: string,
  MemorySize ?: number,
  HardDiskSize ?: string,
  DisplayResolution ?: string,
  GraphicsCard ?: string,
  processor ?: string,
  description ?: string,
  price ?: number
}

const ProductSchema = new Schema({
  title: String,
  brandName: String,
  ItemModel: String,
  Color: String,
  MemorySize: Number,
  HardDiskSize: String,
  DisplayResolution: String,
  GraphicsCard: String,
  description: String,
  processor: String,
  price: Number
}, {
  timestamps: true
})

export default model<ProductInterface>('Product', ProductSchema)
