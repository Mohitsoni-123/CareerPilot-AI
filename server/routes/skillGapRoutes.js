import express from "express";

import {
  createSkillGapAnalysis,
  getMySkillGapAnalyses,
  getSkillGapById,
  deleteSkillGap,
} from "../controllers/skillGapController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Skill Gap Analysis
router.post(
  "/",
  authMiddleware,
  createSkillGapAnalysis
);

// Get All My Skill Gap Analyses
router.get(
  "/",
  authMiddleware,
  getMySkillGapAnalyses
);

// Get Single Skill Gap Analysis
router.get(
  "/:id",
  authMiddleware,
  getSkillGapById
);

// Delete Skill Gap Analysis
router.delete(
  "/:id",
  authMiddleware,
  deleteSkillGap
);

export default router;