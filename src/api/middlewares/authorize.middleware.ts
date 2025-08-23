import { Request, Response, NextFunction } from "express";

// Middleware to authorize based on role
export const authorizeRole = (...roles: string[]) => {
  return (req: Request & { user?: { role: string } }, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Insufficient permission" });
    }
    next();
  };
};
