import express from "express";

import {
  getProfile,
  updateProfile,
  updateAccountSettings,
  changePassword,
  updateNotificationSettings,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// ==========================================
// PROFILE ROUTES
// ==========================================

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


// ==========================================
// SETTINGS ROUTES
// ==========================================

// Update account name and email
router.put(
  "/settings/account",
  authMiddleware,
  updateAccountSettings
);


// Change password
router.put(
  "/settings/password",
  authMiddleware,
  changePassword
);


// Update notification settings
router.put(
  "/settings/notifications",
  authMiddleware,
  updateNotificationSettings
);


export default router;