import express from 'express';
import {
    getRecommendations,
    addInteraction,
    updateRecommendations,
    getUserInteractions,
} from '../controllers/recommendation.controller.js';

const recommendationRouter = express.Router();

// Get recommendations for a user
recommendationRouter.get('/:userId', getRecommendations);

// Add user interaction data
recommendationRouter.post('/interactions', addInteraction);

// Update recommendations for a user
recommendationRouter.put('/:userId', updateRecommendations);

// Get user interaction data (optional)
recommendationRouter.get('/interactions/:userId', getUserInteractions);

export default recommendationRouter;
