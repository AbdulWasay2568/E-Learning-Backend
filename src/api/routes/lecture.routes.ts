import { Router } from 'express';
import * as lectureController from '../controllers/lecture.controller';

const lectureRouter = Router();

lectureRouter.post('/', lectureController.createLecture);
lectureRouter.get('/', lectureController.getAllLectures);
lectureRouter.get('/:id', lectureController.getLectureById);
lectureRouter.put('/:id', lectureController.updateLecture);
lectureRouter.delete('/:id', lectureController.deleteLecture);

lectureRouter.get('/course/:courseId', lectureController.getLecturesByCourse);

export default lectureRouter; 