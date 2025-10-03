import { Router } from 'express';
import * as groupController from '../controllers/group.controller';

const groupRouter = Router();

groupRouter.post('/', groupController.createGroup);
groupRouter.get('/', groupController.getAllGroups);
//added
groupRouter.get('/user/:userId', groupController.getGroupsByUser);
//
groupRouter.get('/:id', groupController.getGroupById);
groupRouter.put('/:id', groupController.updateGroup);
groupRouter.delete('/:id', groupController.deleteGroup);
//added
// groupRouter.get("/groups/user/:userId", groupController.getGroupsByUser);

export default groupRouter; 