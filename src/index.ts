import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import { authRouter, userRouter, courseRouter, enrollmentRouter, feedbackRouter, groupMemberRouter, groupRouter, lectureRouter, noteRouter, progressRouter, questionRouter, quizRouter, chatMessageRouter, commentRouter } from './api/routes';

// Load .env only in local dev
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app: Express = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// API routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/lectures', lectureRouter);
app.use('/notes', noteRouter);
app.use('/enrollments', enrollmentRouter);
app.use('/quizzes', quizRouter);
app.use('/questions', questionRouter);
app.use('/progress', progressRouter);
app.use('/groups', groupRouter);
app.use('/group-members', groupMemberRouter);
app.use('/chat-messages', chatMessageRouter);
app.use('/feedbacks', feedbackRouter);
app.use('/comments', commentRouter);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("E-Learning backend is running on Vercel 🚀");
});

// Test route
app.get("/test", (req: Request, res) => {
  res.json({ status: "ok", message: "Route is working" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});