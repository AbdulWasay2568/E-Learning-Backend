import { Request, Response } from 'express';
import * as usersService from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
  const user = await usersService.createUser(req.body);
  res.status(201).json({ user });
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await usersService.getUserById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ user });
};

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await usersService.getAllUsers();
  res.json({ users });
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await usersService.updateUser(userId, req.body);
  res.json({ user });
};

export const deleteUser = async (req: Request, res: Response) => {
  await usersService.deleteUser(Number(req.params.id));
  res.status(204).send();
}; 


export const updateUserImage = async (req: Request, res: Response) => {
  try { 
    const userId = Number(req.params.id);

    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const updatedUser = await usersService.updateUserImageService(userId, req.file);

    res.json(updatedUser);
  } catch (err: any) {
    console.error("Error updating user image:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};
