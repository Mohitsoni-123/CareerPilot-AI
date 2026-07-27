import dotenv from "dotenv";

// Load environment variables FIRST
dotenv.config();

console.log("Current directory:", process.cwd());
console.log(
  "Gemini API Key Loaded:",
  !!process.env.GEMINI_API_KEY
);

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

import applicationRoutes from "./routes/applicationRoutes.js";
import savedJobRoutes from "./routes/savedJobRoutes.js";

import careerInsightRoutes from "./routes/careerInsightRoutes.js";

import interviewRoutes from "./routes/interviewRoutes.js";

import mockInterviewRoutes from "./routes/mockInterviewRoutes.js";

import skillGapRoutes from "./routes/skillGapRoutes.js";

import roadmapRoutes from "./routes/roadmapRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

// User Routes
app.use("/api/users", userRoutes);

app.use("/api/resumes", resumeRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/saved-jobs", savedJobRoutes);

app.use("/api/career-insight", careerInsightRoutes);

app.use("/api/interviews", interviewRoutes);

app.use("/api/mock-interviews", mockInterviewRoutes);

app.use("/api/skill-gap", skillGapRoutes);

app.use("/api/roadmap", roadmapRoutes);

app.get("/", (req, res) => {
  res.send("CareerPilot AI API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});