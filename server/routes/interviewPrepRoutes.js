import express from "express";

import {
  getInterviewQuestions,
  getInterviewTopics,
} from "../controllers/interviewPrepController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// ==========================================
// GET AVAILABLE TOPICS
// ==========================================

router.get(
  "/topics",
  authMiddleware,
  getInterviewTopics
);


// ==========================================
// GET INTERVIEW QUESTIONS
// ==========================================

router.get(
  "/questions",
  authMiddleware,
  getInterviewQuestions
);


export default router;