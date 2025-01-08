import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // userId: { type: String, required: true, unique: true },
    // name: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    // preferences: { type: [String], default: [] }, // Array of user preferences
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    preferences: { type: [String], default: [] },
}, { timestamps: true});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
