import { prisma } from '../../prisma/client';
import { CreateProgressDto, UpdateProgressDto } from '../interfaces/progress.interface';

export const createProgress = async (data: CreateProgressDto) => {
  return prisma.progress.create({ data });
};

export const getProgressById = async (id: number) => {
  return prisma.progress.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lecture: {
        select: {
          id: true,
          title: true,
          videoUrl: true,
          duration: true,
        }
      },
    }
  });
};

export const getAllProgress = async () => {
  return prisma.progress.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lecture: {
        select: {
          id: true,
          title: true,
          videoUrl: true,
          duration: true,
        }
      },
    }
  });
};

export const updateProgress = async (id: number, data: UpdateProgressDto) => {
  return prisma.progress.update({ where: { id }, data });
};

export const deleteProgress = async (id: number) => {
  return prisma.progress.delete({ where: { id } });
};

export const getProgressByUser = async (userId: number) => {
  return prisma.progress.findMany({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lecture: {
        select: {
          id: true,
          title: true,
          videoUrl: true,
          duration: true,
        }
      },
    }
  });
};

export const getProgressByLecture = async (lectureId: number) => {
  return prisma.progress.findMany({
    where: { lectureId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lecture: {
        select: {
          id: true,
          title: true,
          videoUrl: true,
          duration: true,
        }
      },
    }
  });
};

export const getProgressByUserAndLecture = async (userId: number, lectureId: number) => {
  return prisma.progress.findFirst({
    where: { userId, lectureId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        }
      },
      lecture: {
        select: {
          id: true,
          title: true,
          videoUrl: true,
          duration: true,
        }
      },
    }
  });
}; 