import User from "../models/User.js";
import bcrypt from "bcryptjs";

// ==========================================
// GET PROFILE
// ==========================================

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(
      "Get Profile Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to get profile",
    });
  }
};


// ==========================================
// UPDATE PROFILE
// ==========================================

export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      profileImage,
      skills,
      education,
      experience,
      projects,
      certifications,
    } = req.body;

    const user = await User.findById(
      req.user._id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update Name
    if (name) {
      user.name = name.trim();
    }

    // Update Profile Image
    if (profileImage !== undefined) {
      user.profileImage = profileImage;
    }

    // Update Skills
    if (skills !== undefined) {
      user.skills = skills;
    }

    // Update Education
    if (education !== undefined) {
      user.education = education;
    }

    // Update Experience
    if (experience !== undefined) {
      user.experience = experience;
    }

    // Update Projects
    if (projects !== undefined) {
      user.projects = projects;
    }

    // Update Certifications
    if (certifications !== undefined) {
      user.certifications = certifications;
    }

    await user.save();

    const updatedUser = await User.findById(
      user._id
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(
      "Update Profile Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};


// ==========================================
// UPDATE ACCOUNT SETTINGS
// ==========================================

export const updateAccountSettings = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
    } = req.body;

    const user = await User.findById(
      req.user._id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update Name
    if (name && name.trim()) {
      user.name = name.trim();
    }

    // Update Email
    if (email && email.trim()) {
      const normalizedEmail = email
        .toLowerCase()
        .trim();

      // Check if email is already used
      const existingUser =
        await User.findOne({
          email: normalizedEmail,
          _id: {
            $ne: user._id,
          },
        });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message:
            "Email is already registered",
        });
      }

      user.email = normalizedEmail;
    }

    await user.save();

    const updatedUser = await User.findById(
      user._id
    ).select("-password");

    res.status(200).json({
      success: true,
      message:
        "Account settings updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(
      "Update Account Settings Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update account settings",
    });
  }
};


// ==========================================
// CHANGE PASSWORD
// ==========================================

export const changePassword = async (
  req,
  res
) => {
  try {
    const {
      currentPassword,
      newPassword,
    } = req.body;

    // Check required fields
    if (
      !currentPassword ||
      !newPassword
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Current password and new password are required",
      });
    }

    // Check password length
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "New password must be at least 6 characters",
      });
    }

    // Get user
    const user = await User.findById(
      req.user._id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare current password
    const isPasswordCorrect =
      await bcrypt.compare(
        currentPassword,
        user.password
      );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message:
          "Current password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword =
      await bcrypt.hash(
        newPassword,
        10
      );

    // Save new password
    user.password =
      hashedPassword;

    await user.save();

    res.status(200).json({
      success: true,
      message:
        "Password changed successfully",
    });
  } catch (error) {
    console.error(
      "Change Password Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to change password",
    });
  }
};


// ==========================================
// UPDATE NOTIFICATION SETTINGS
// ==========================================

export const updateNotificationSettings =
  async (req, res) => {
    try {
      const {
        pushNotifications,
        emailNotifications,
      } = req.body;

      const user = await User.findById(
        req.user._id
      );

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Existing settings
      const currentSettings =
        user.notificationSettings || {};

      // Update notification settings
      user.notificationSettings = {
        pushNotifications:
          pushNotifications ??
          currentSettings.pushNotifications ??
          true,

        emailNotifications:
          emailNotifications ??
          currentSettings.emailNotifications ??
          true,
      };

      await user.save();

      const updatedUser =
        await User.findById(
          user._id
        ).select("-password");

      res.status(200).json({
        success: true,
        message:
          "Notification settings updated successfully",

        notificationSettings:
          updatedUser.notificationSettings,
      });
    } catch (error) {
      console.error(
        "Update Notification Settings Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update notification settings",
      });
    }
  };