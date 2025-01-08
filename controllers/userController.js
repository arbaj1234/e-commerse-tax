import { addUser, getUsers, updateUser } from '../services/userService.js';

export const addUserController = async (req, res) => {
  try {
    const user = await addUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const user = await updateUser(req.params.userId, req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
