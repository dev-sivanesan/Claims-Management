import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import validate from '../middlewares/validation.js';
import userSchemas from '../schemas/userSchemas.js';

const router = express.Router();

router.post('/users', validate(userSchemas.registerSchema), createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', validate(userSchemas.updateSchema), updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login',validate(userSchemas.loginSchema));
export default router;
