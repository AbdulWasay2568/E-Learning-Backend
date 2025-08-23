import { prisma } from '../../prisma/client';
import { CreateCourseDto, UpdateCourseDto } from '../interfaces/course.interface';

export const createCourse = async (data: CreateCourseDto) => {
  return prisma.course.create({ data });
};

export const getCourseById = async (id: number) => {
  return prisma.course.findUnique({
    where: { id },
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lectures: true,
      enrollments: true,
      quizzes: true,
      feedbacks: true,
    }
  });
};

export const getAllCourses = async () => {
  return prisma.course.findMany({
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lectures: true,
      enrollments: true,
      quizzes: true,
      feedbacks: true,
    }
  });
};

export const updateCourse = async (id: number, data: UpdateCourseDto) => {
  return prisma.course.update({ where: { id }, data });
};

export const deleteCourse = async (id: number) => {
  return prisma.course.delete({ where: { id } });
};

export const getCoursesByTeacher = async (teacherId: number) => {
  return prisma.course.findMany({
    where: { teacherId },
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lectures: true,
      enrollments: true,
      quizzes: true,
      feedbacks: true,
    }
  });
}; 