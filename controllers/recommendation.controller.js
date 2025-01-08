// import UserModel from "../models/user.model.js";
// import RecommendationModel from "../models/recommendation.model.js";
// import ProductModel from "../models/product.model.js";
// import InteractionModel from "../models/interaction.model.js";


// /**
//  * Retrieve product recommendations for a user.
//  */
// export const getRecommendations = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         // Validate input
//         if (!userId) {
//             return res.status(400).json({ message: 'User ID is required.' });
//         }

//         // Find cached recommendations for the user
//         const userRecommendations = await RecommendationModel.findOne({ userId });
//         if (!userRecommendations) {
//             return res.status(404).json({ message: 'No recommendations found for this user.' });
//         }

//         res.status(200).json(userRecommendations.recommendations);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving recommendations.', error });
//     }
// };

// /**
//  * Add or update user interaction data.
//  */
// export const addInteraction = async (req, res) => {
//     try {
//         const { userId, productId, type } = req.body;

//         // Validate input
//         if (!userId || !productId || !type) {
//             return res.status(400).json({ message: 'User ID, product ID, and interaction type are required.' });
//         }

//         // Create and save the interaction
//         const interaction = new InteractionModel({ userId, productId, type });
//         await interaction.save();

//         res.status(201).json({ message: 'Interaction logged successfully.' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error adding interaction.', error });
//     }
// };

// /**
//  * Generate collaborative filtering recommendations (stub).
//  */
// const collaborativeFiltering = async (userId) => {
//     // TODO: Implement actual collaborative filtering logic
    
//     return [
//         { productId: 'product1', strategy: 'collaborative', score: 0.9 },
//         { productId: 'product2', strategy: 'collaborative', score: 0.8 },
//     ];
// };

// /**
//  * Generate content-based filtering recommendations (stub).
//  */
// const contentBasedFiltering = async (userId) => {
//     // TODO: Implement actual content-based filtering logic
//     return [
//         { productId: 'product3', strategy: 'content-based', score: 0.95 },
//         { productId: 'product4', strategy: 'content-based', score: 0.85 },
//     ];
// };

// /**
//  * Update recommendations for a user.
//  */
// export const updateRecommendations = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         // Validate input
//         if (!userId) {
//             return res.status(400).json({ message: 'User ID is required.' });
//         }

//         // Generate recommendations using both strategies
//         const collaborativeResults = await collaborativeFiltering(userId);
//         const contentBasedResults = await contentBasedFiltering(userId);

//         const recommendations = [...collaborativeResults, ...contentBasedResults];

//         // Upsert recommendations into the database
//         const updatedRecommendations = await Recommendation.findOneAndUpdate(
//             { userId },
//             { recommendations, updatedAt: new Date() },
//             { upsert: true, new: true }
//         );

//         res.status(200).json({ message: 'Recommendations updated successfully.', data: updatedRecommendations });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating recommendations.', error });
//     }
// };

// /**
//  * Helper function to fetch user interaction data (optional).
//  */
// export const getUserInteractions = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         // Validate input
//         if (!userId) {
//             return res.status(400).json({ message: 'User ID is required.' });
//         }

//         // Retrieve user interactions from the database
//         const interactions = await InteractionModel.find({ userId });

//         res.status(200).json(interactions);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving interactions.', error });
//     }
// };



import * as RecommendationService from "../services/recommendation.service.js";

// Get recommendations for a user
export const getRecommendations = async (req, res) => {
  const { userId } = req.params;

  try {
    const recommendations = await RecommendationService.getRecommendations(userId);
    return res.status(200).json({ success: true, data: recommendations });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Add user interaction data
export const addInteraction = async (req, res) => {
  const { userId, productId, type } = req.body;

  try {
    const interaction = await RecommendationService.addInteraction(userId, productId, type);
    return res.status(201).json({ success: true, data: interaction });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update recommendations for a user
export const updateRecommendations = async (req, res) => {
  const { userId } = req.params;
  const { recommendations } = req.body;

  try {
    const updatedRecommendations = await RecommendationService.updateRecommendations(userId, recommendations);
    return res.status(200).json({ success: true, data: updatedRecommendations });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get user interaction data
export const getUserInteractions = async (req, res) => {
  const { userId } = req.params;

  try {
    const interactions = await RecommendationService.getUserInteractions(userId);
    return res.status(200).json({ success: true, data: interactions });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
