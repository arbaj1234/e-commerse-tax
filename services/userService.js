import User from '../models/user.model.js';

export const addUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const getUsers = async () => {
  return await User.find();
};

export const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};
