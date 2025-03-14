import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

router.post('/create-product',ProductController.createProduct);
router.get('/get-products',ProductController.getAllProduct);
router.get('/:productId',ProductController.getSingleProduct);
router.put('/:productId',ProductController.updateProduct);
router.delete('/:productId',ProductController.deleteProduct)


export const ProductRoutes = router