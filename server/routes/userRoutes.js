import express from "express";

import {
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// Get logged-in user profile

router.get(
  "/profile",
  authMiddleware,
  getProfile
);


// Update logged-in user profile

router.put(
  "/profile",
  authMiddleware,
  updateProfile
);


export default router;