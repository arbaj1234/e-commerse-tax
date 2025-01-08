import mongoose from 'mongoose';

const interactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
    required: true,
  },
  type: { 
    type: String, 
    required: true, 
    enum: ["click", "purchase"] 
  }, // Type of interaction
  timestamp: { type: Date, default: Date.now }, // When the interaction occurred
});


const InteractionModel = mongoose.model('Interaction', interactionSchema);
export default InteractionModel;
