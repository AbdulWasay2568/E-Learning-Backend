import { Request, Response } from 'express';
import * as progressService from '../services/progress.service';

export const createProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.createProgress(req.body);
    res.status(201).json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProgressById = async (req: Request, res: Response) => {
  try {
    const progressId = Number(req.params.id);
    const progress = await progressService.getProgressById(progressId);
    if (!progress) return res.status(404).json({ message: 'Progress not found' });
    res.json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProgress = async (_req: Request, res: Response) => {
  try {
    const progress = await progressService.getAllProgress();
    res.json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProgress = async (req: Request, res: Response) => {
  try {
    const progressId = Number(req.params.id);
    const progress = await progressService.updateProgress(progressId, req.body);
    res.json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProgress = async (req: Request, res: Response) => {
  try {
    await progressService.deleteProgress(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProgressByUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const progress = await progressService.getProgressByUser(userId);
    res.json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProgressByLecture = async (req: Request, res: Response) => {
  try {
    const lectureId = Number(req.params.lectureId);
    const progress = await progressService.getProgressByLecture(lectureId);
    res.json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProgressByUserAndLecture = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const lectureId = Number(req.params.lectureId);
    const progress = await progressService.getProgressByUserAndLecture(userId, lectureId);
    res.json({ progress });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}; 