import express from 'express';
import { addProductController, getProductsController, updateProductController } from '../controllers/productController.js';

const productRoutes = express.Router();

productRoutes.post('/', addProductController);
productRoutes.get('/', getProductsController);
productRoutes.put('/:productId', updateProductController);

export default productRoutes;
