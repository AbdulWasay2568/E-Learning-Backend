import { Router } from 'express';
import * as progressController from '../controllers/progress.controller';

const progressRouter = Router();

progressRouter.post('/', progressController.createProgress);
progressRouter.get('/', progressController.getAllProgress);
progressRouter.get('/:id', progressController.getProgressById);
progressRouter.put('/:id', progressController.updateProgress);
progressRouter.delete('/:id', progressController.deleteProgress);

progressRouter.get('/user/:userId', progressController.getProgressByUser);
progressRouter.get('/lecture/:lectureId', progressController.getProgressByLecture);
progressRouter.get('/user/:userId/lecture/:lectureId', progressController.getProgressByUserAndLecture);

export default progressRouter; 