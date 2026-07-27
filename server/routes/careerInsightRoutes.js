import express from "express";

import {
  getCareerInsight,
} from "../controllers/careerInsightController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get AI Career Insight
router.get(
  "/",
  authMiddleware,
  getCareerInsight
);

export default router;