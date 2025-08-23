import { prisma } from '../../prisma/client';
import { CreateUserDto, UpdateUserDto } from '../interfaces/user.interface';
import { uploadToCloudinary, deleteFromCloudinary } from './cloudinary.service';

export const createUser = async (data: CreateUserDto) => {
  return prisma.user.create({ data });
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique(
    { where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        role: true,
      }
    }
  );
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const updateUser = async (id: number, data: UpdateUserDto) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id } });
}; 

export const updateUserImageService = async (userId: number, file: Express.Multer.File) => {
  if (!file) throw new Error('No image uploaded');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  if (user.profileImage) {
    await deleteFromCloudinary(user.profileImage);
  }

  const folder = user.role === 'Student' ? 'E-Learning/users/student' : 'E-Learning/users/admin';
  const result = await uploadToCloudinary(file.buffer, folder);

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { profileImage: result.secure_url },
  });

  return updatedUser;
};