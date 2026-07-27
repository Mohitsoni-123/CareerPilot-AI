import express from "express";

import {
  createInterview,
  getMyInterviews,
  getInterviewById,
  updateInterview,
  deleteInterview,
} from "../controllers/interviewController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Interview
router.post(
  "/",
  authMiddleware,
  createInterview
);

// Get My Interviews
router.get(
  "/",
  authMiddleware,
  getMyInterviews
);

// Get Single Interview
router.get(
  "/:id",
  authMiddleware,
  getInterviewById
);

// Update Interview
router.put(
  "/:id",
  authMiddleware,
  updateInterview
);

// Delete Interview
router.delete(
  "/:id",
  authMiddleware,
  deleteInterview
);

export default router;