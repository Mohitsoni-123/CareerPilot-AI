import express from "express";
import {
  applyForJob,
  createManualApplication,
  getMyApplications,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/applicationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, applyForJob);
router.post("/manual", authMiddleware, createManualApplication);
router.get("/", authMiddleware, getMyApplications);
router.put("/:id", authMiddleware, updateApplicationStatus);
router.delete("/:id", authMiddleware, deleteApplication);

export default router;
