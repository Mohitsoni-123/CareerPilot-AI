import express from "express";

import {
  applyForJob,
  getMyApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router =
  express.Router();


// Apply

router.post(
  "/",
  authMiddleware,
  applyForJob
);


// Get Applications

router.get(
  "/",
  authMiddleware,
  getMyApplications
);


// Update Status

router.put(
  "/:id",
  authMiddleware,
  updateApplicationStatus
);


export default router;