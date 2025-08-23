import { Router } from 'express';
import * as usersController from '../controllers/user.controller';
import { uploadUserImage } from '../middlewares/upload.middleware';

const usersRouter = Router();

usersRouter.post('/', usersController.createUser);
usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id', usersController.deleteUser);
usersRouter.patch('/:id/image', uploadUserImage.single('image'), usersController.updateUserImage);

export default usersRouter; 