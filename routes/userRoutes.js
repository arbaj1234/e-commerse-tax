import express from 'express';
import { addUserController, getUsersController, updateUserController } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/', addUserController);
userRoutes.get('/', getUsersController);
userRoutes.put('/:userId', updateUserController);

export default userRoutes;
