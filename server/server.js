import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });
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
import careerInsightRoutes from "./routes/careerInsightRoutes.js";
import careerAssistantRoutes from "./routes/careerAssistantRoutes.js";

console.log("AI Keys Loaded -> Groq:", !!process.env.GROQ_API_KEY, "| Gemini:", !!process.env.GEMINI_API_KEY);

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
app.use("/api/career-insight", careerInsightRoutes);
app.use("/api/career-assistant", careerAssistantRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "CareerPilot AI Engine",
    version: "2.0.0",
    features: [
      "AI Resume Analysis & JD Matcher",
      "AI Mock Interview with Speech Recognition & Instant Scoring",
      "Interactive Application Tracking CRM",
      "Dynamic Career Roadmaps",
      "Real-time AI Career Copilot Chat",
    ],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CareerPilot AI Server running on port ${PORT}`);
});
