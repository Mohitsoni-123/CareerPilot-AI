import express from "express";

import {
  createMockInterview,
  getMyMockInterviews,
  getMockInterviewById,
  submitMockInterviewAnswer,
  completeMockInterview,
} from "../controllers/mockInterviewController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Mock Interview
router.post(
  "/",
  authMiddleware,
  createMockInterview
);

// Get All My Mock Interviews
router.get(
  "/",
  authMiddleware,
  getMyMockInterviews
);

// Get Single Mock Interview
router.get(
  "/:id",
  authMiddleware,
  getMockInterviewById
);

// Submit Answer
router.put(
  "/:id/answer",
  authMiddleware,
  submitMockInterviewAnswer
);

// Complete Interview
router.put(
  "/:id/complete",
  authMiddleware,
  completeMockInterview
);

export default router;