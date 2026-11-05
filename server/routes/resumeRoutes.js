import express from "express";
import {
  analyzeResume,
  getLatestResume,
  getMyResumes,
  matchWithJob,
  generateCoverLetter,
} from "../controllers/resumeController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/analyze", authMiddleware, upload.single("resume"), analyzeResume);
router.get("/latest", authMiddleware, getLatestResume);
router.get("/history", authMiddleware, getMyResumes);
router.post("/match-jd", authMiddleware, matchWithJob);
router.post("/cover-letter", authMiddleware, generateCoverLetter);

export default router;
