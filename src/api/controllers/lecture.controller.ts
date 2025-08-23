import { Request, Response } from 'express';
import * as lectureService from '../services/lecture.service';

export const createLecture = async (req: Request, res: Response) => {
  try {
    const lecture = await lectureService.createLecture(req.body);
    res.status(201).json({ lecture });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getLectureById = async (req: Request, res: Response) => {
  try {
    const lectureId = Number(req.params.id);
    const lecture = await lectureService.getLectureById(lectureId);
    if (!lecture) return res.status(404).json({ message: 'Lecture not found' });
    res.json({ lecture });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllLectures = async (_req: Request, res: Response) => {
  try {
    const lectures = await lectureService.getAllLectures();
    res.json({ lectures });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateLecture = async (req: Request, res: Response) => {
  try {
    const lectureId = Number(req.params.id);
    const lecture = await lectureService.updateLecture(lectureId, req.body);
    res.json({ lecture });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLecture = async (req: Request, res: Response) => {
  try {
    await lectureService.deleteLecture(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getLecturesByCourse = async (req: Request, res: Response) => {
  try {
    const courseId = Number(req.params.courseId);
    const lectures = await lectureService.getLecturesByCourse(courseId);
    res.json({ lectures });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}; 