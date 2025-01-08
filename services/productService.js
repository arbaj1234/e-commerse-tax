import Product from '../models/product.model.js';

export const addProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

export const getProducts = async () => {
  return await Product.find();
};

export const updateProduct = async (productId, updateData) => {
  return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};
