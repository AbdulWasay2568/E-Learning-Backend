import { prisma } from '../../prisma/client';
import { CreateLectureDto, UpdateLectureDto } from '../interfaces/lecture.interface';

export const createLecture = async (data: CreateLectureDto) => {
  return prisma.lecture.create({ data });
};

export const getLectureById = async (id: number) => {
  return prisma.lecture.findUnique({
    where: { id },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
        }
      },
      notes: true,
      progress: true,
      comments: true,
    }
  });
};

export const getAllLectures = async () => {
  return prisma.lecture.findMany({
    include: {
      course: {
        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
        }
      },
      notes: true,
      progress: true,
      comments: true,
    }
  });
};

export const updateLecture = async (id: number, data: UpdateLectureDto) => {
  return prisma.lecture.update({ where: { id }, data });
};

export const deleteLecture = async (id: number) => {
  return prisma.lecture.delete({ where: { id } });
};

export const getLecturesByCourse = async (courseId: number) => {
  return prisma.lecture.findMany({
    where: { courseId },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
        }
      },
      notes: true,
      progress: true,
      comments: true,
    }
  });
}; 