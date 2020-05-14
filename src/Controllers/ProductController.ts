import { Request, Response } from 'express'

import Product from '../schemas/Product'

class ProductController {
  public async index (req: Request, res: Response): Promise<Response> {
    const products = await Product.find()

    return res.json(products)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const products = await Product.create(req.body)

    return res.json(products)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(product)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await Product.findByIdAndRemove(req.params.id)

    return res.json({ message: 'Product Deleted' })
  }
}

export default new ProductController()
