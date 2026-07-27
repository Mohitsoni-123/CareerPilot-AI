import express from "express";
import {
  generateRoadmap,
  getMyRoadmap,
  updateRoadmapProgress,
} from "../controllers/roadmapController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Generate new career roadmap
router.post("/generate", authMiddleware, generateRoadmap);

// Get logged-in user's roadmap
router.get("/my", authMiddleware, getMyRoadmap);

router.put(
  "/:roadmapId/progress",
  authMiddleware,
  updateRoadmapProgress
);

export default router;