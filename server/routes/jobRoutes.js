import express from "express";

import {
  getJobs,
  getJobById,
  createJob,
} from "../controllers/jobController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import {
  matchJob,
} from "../controllers/jobMatchController.js";

const router = express.Router();


// Get all jobs

router.get(
  "/",
  authMiddleware,
  getJobs
);

router.post(
  "/match",
  authMiddleware,
  matchJob
);


// Get single job

router.get(
  "/:id",
  authMiddleware,
  getJobById
);


// Create job

router.post(
  "/",
  authMiddleware,
  createJob
);


export default router;