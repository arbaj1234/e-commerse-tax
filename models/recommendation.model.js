import mongoose from 'mongoose';

const recommendationSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    recommendations: [
        {
            productId: { type: String, required: true },
            strategy: {
                type: String,
                required: true,
                enum: ['collaborative', 'content-based']
            },
            score: { type: Number, required: true } // Confidence score
        }
    ]
}, { timestamps: true });

const RecommendationModel = mongoose.model('Recommendation', recommendationSchema);
export default RecommendationModel;
