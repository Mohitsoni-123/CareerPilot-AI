import express from "express";

import {
  createCareerRoadmap,
  getMyCareerRoadmaps,
  getCareerRoadmapById,
  updateRoadmapPhase,
  deleteCareerRoadmap,
} from "../controllers/careerRoadmapController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Career Roadmap
router.post(
  "/",
  authMiddleware,
  createCareerRoadmap
);

// Get All My Career Roadmaps
router.get(
  "/",
  authMiddleware,
  getMyCareerRoadmaps
);

// Get Single Career Roadmap
router.get(
  "/:id",
  authMiddleware,
  getCareerRoadmapById
);

// Update Roadmap Phase
router.put(
  "/:id/phase",
  authMiddleware,
  updateRoadmapPhase
);

// Delete Career Roadmap
router.delete(
  "/:id",
  authMiddleware,
  deleteCareerRoadmap
);

export default router;