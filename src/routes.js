import { Router } from 'express'

import ProductController from './Controllers/ProductController'

const routes = Router()

routes.get('/dashboard', ProductController.index)
routes.post('/newProduct', ProductController.store)
routes.get('/listProduct/:id', ProductController.show)

export default routes
