import User from '../models/userModels.js';
import logger from '../config/logger.js';
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create({ data: req.body.data });
    logger.info('User created successfully', { user: newUser });
    res.status(201).json(newUser);
  } catch (error) {
    logger.error('Error creating user', { error: error.message });
    res.status(500).send(error.message);
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    logger.info('Fetched all users');
    res.json(users);
  } catch (error) {
    logger.error('Error fetching users', { error: error.message });
    res.send(error);
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      logger.error('User not found', { userId: req.params.id });
      return res.status(404).send('User not found');
    }
    logger.info('Fetched user by ID', { user });

    res.status(200).json(user);
  } catch (error) {
    logger.error('Error fetching user by ID', { error: error.message });
    res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update({ data: req.body.data }, {
      where: { id: req.params.id },
    });

    if (!updated) {
      logger.error('User not found for update', { userId: req.params.id });
      return res.status(404).send(error);
    }

    const updatedUser = await User.findByPk(req.params.id);
    logger.info('User updated successfully', { user: updatedUser });

    res.status(200).json(updatedUser);
  } catch (error) {
    logger.error('Error updating user', { error: error.message });
    res.status(500).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      logger.error('User not found for deletion', { userId: req.params.id });
      return res.status(404).send('User not found');
    }

    logger.info('User deleted successfully', { userId: req.params.id });
    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting user', { error: error.message });
    res.status(500).send(error);
  }
};
