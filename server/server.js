import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

import applicationRoutes from "./routes/applicationRoutes.js";
import savedJobRoutes from "./routes/savedJobRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());


// Auth Routes

app.use(
  "/api/auth",
  authRoutes
);


// User Routes

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/resumes",
  resumeRoutes
);


app.use(
  "/api/jobs",
  jobRoutes
);


app.use(
  "/api/applications",
  applicationRoutes
);

app.use(
  "/api/saved-jobs",
  savedJobRoutes
);
app.get("/", (req, res) => {
  res.send(
    "CareerPilot AI API is running..."
  );
});


app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});