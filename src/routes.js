import { Router } from 'express'

import ProductController from './Controllers/ProductController'

const routes = Router()

routes.get('/dashboard', ProductController.index)
routes.get('/listProduct/:id', ProductController.show)
routes.post('/newProduct', ProductController.store)
routes.put('/product/:id', ProductController.update)
routes.delete('/deleteProduct/:id', ProductController.destroy)

export default routes
