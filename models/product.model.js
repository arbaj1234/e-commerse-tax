import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     productId: { type: String, required: true, unique: true },
//     name: { type: String, required: true },
//     description: { type: String },
//     category: { type: String, required: true },
//     price: { type: Number, required: true },
//     features: { type: Map, of: String },
// }, { timestamps: true });


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    features: { type: [String], default: [] },
    // createdAt: { type: Date, default: Date.now }, // Timestamp of product creation
  }, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;
