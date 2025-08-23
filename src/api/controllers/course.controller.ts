import { Request, Response } from 'express';
import * as courseService from '../services/course.service';

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json({ course });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const courseId = Number(req.params.id);
    const course = await courseService.getCourseById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ course });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json({ courses });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const courseId = Number(req.params.id);
    const course = await courseService.updateCourse(courseId, req.body);
    res.json({ course });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    await courseService.deleteCourse(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getCoursesByTeacher = async (req: Request, res: Response) => {
  try {
    const teacherId = Number(req.params.teacherId);
    const courses = await courseService.getCoursesByTeacher(teacherId);
    res.json({ courses });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}; 