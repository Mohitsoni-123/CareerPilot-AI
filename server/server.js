import "dotenv/config";

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import savedJobRoutes from "./routes/savedJobRoutes.js";
import interviewPrepRoutes from "./routes/interviewPrepRoutes.js";
import mockInterviewRoutes from "./routes/mockInterviewRoutes.js";
import skillGapRoutes from "./routes/skillGapRoutes.js";
import careerRoadmapRoutes from "./routes/careerRoadmapRoutes.js";

console.log("Groq Key loaded:", !!process.env.GROQ_API_KEY);

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/saved-jobs", savedJobRoutes);
app.use("/api/interview-prep", interviewPrepRoutes);
app.use("/api/mock-interviews", mockInterviewRoutes);
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/career-roadmap", careerRoadmapRoutes);

app.get("/", (req, res) => {
  res.send("CareerPilot AI API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});