import { addProduct, getProducts, updateProduct } from '../services/productService.js';

export const addProductController = async (req, res) => {
  try {
    const product = await addProduct(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getProductsController = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const product = await updateProduct(req.params.productId, req.body);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
