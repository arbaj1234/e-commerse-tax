// import Interaction from "../models/Interaction.js";
// import User from "../models/User.js";
// import Product from "../models/Product.js";

// // Get product recommendations for a user
// export const getRecommendations = async (userId) => {
//   const user = await User.findOne({ userId });
//   if (!user) throw new Error("User not found");

//   // Simple recommendation logic based on preferences
//   const recommendations = await Product.find({ category: { $in: user.preferences } })
//     .limit(10)
//     .exec();
//   return recommendations;
// };

// // Add or update a user interaction
// export const addInteraction = async (userId, productId, type) => {
//   const user = await User.findOne({ userId });
//   const product = await Product.findOne({ productId });

//   if (!user || !product) throw new Error("User or Product not found");

//   const interaction = await Interaction.create({ userId: user._id, productId: product._id, type });
//   return interaction;
// };

// // Update recommendations (manual update feature)
// export const updateRecommendations = async (userId, recommendations) => {
//   const user = await User.findOne({ userId });
//   if (!user) throw new Error("User not found");

//   // Placeholder: Custom logic to update recommendations if needed
//   return recommendations;
// };

// // Get user interaction data
// export const getUserInteractions = async (userId) => {
//   const user = await User.findOne({ userId });
//   if (!user) throw new Error("User not found");

//   const interactions = await Interaction.find({ userId: user._id }).populate("productId", "name price category");
//   return interactions;
// };



import Interaction from "../models/interaction.model.js";
import User from "../models/user.model.js";
import Product from "../models/product.model.js";

// Get product recommendations for a user
export const getRecommendations = async (userId) => {
  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    // Recommendation logic: Fetch products based on user preferences
    const recommendations = await Product.find({
      category: { $in: user.preferences }, // Match product categories with user preferences
    })
      .limit(10) // Limit the number of recommendations
      .exec();

    return recommendations;
  } catch (error) {
    throw new Error(`Error fetching recommendations: ${error.message}`);
  }
};

// Add or update a user interaction
export const addInteraction = async (userId, productId, type) => {
  try {
    // Validate user and product existence
    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user) throw new Error("User not found");
    if (!product) throw new Error("Product not found");

    // Create or update interaction
    const interaction = await Interaction.create({
      userId: user._id,
      productId: product._id,
      type,
    });

    return interaction;
  } catch (error) {
    throw new Error(`Error adding interaction: ${error.message}`);
  }
};

// Update recommendations manually
export const updateRecommendations = async (userId, recommendations) => {
  try {
    // Validate user existence
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    // Placeholder: Custom logic to update recommendations in future
    return `Recommendations updated for user ${userId}`;
  } catch (error) {
    throw new Error(`Error updating recommendations: ${error.message}`);
  }
};

// Get user interaction data
export const getUserInteractions = async (userId) => {
  try {
    // Validate user existence
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    // Fetch user interactions
    const interactions = await Interaction.find({ userId: user._id })
      .populate("productId", "name price category")
      .exec();

    return interactions;
  } catch (error) {
    throw new Error(`Error fetching interactions: ${error.message}`);
  }
};
