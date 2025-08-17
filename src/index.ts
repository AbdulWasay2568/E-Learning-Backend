// src/index.ts
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import serverless from "serverless-http";

// Load .env only in local dev
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Lazy Prisma client instance
let prisma: PrismaClient | null = null;
function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient({
      log:
        process.env.NODE_ENV === "production" ? [] : ["query", "error", "warn"],
    });
  }
  return prisma;
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

// Health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("E-Learning backend is running on Vercel 🚀");
});

// Simple DB test route (debug only — remove in prod)
app.get("/test-db", (req, res) => {
  res.json({ status: "ok", message: "Route is working" });
});

// Local dev mode
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

// ✅ Export handler for Vercel
export default serverless(app);
