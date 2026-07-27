import User from "../models/User.js";
import Application from "../models/Application.js";
import SavedJob from "../models/SavedJob.js";

import {
  generateCareerInsight,
} from "../services/careerInsightService.js";

export const getCareerInsight = async (req, res) => {
  try {
    // Get logged-in user's profile
    const profile = await User.findById(req.user._id).select(
      "-password"
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    // Get user's applications
    const applications = await Application.find({
      user: req.user._id,
    })
      .populate("job")
      .sort({
        createdAt: -1,
      });

    // Get user's saved jobs
    const savedJobs = await SavedJob.find({
      user: req.user._id,
    })
      .populate("job")
      .sort({
        createdAt: -1,
      });

    // Generate AI career insight
    const insight = await generateCareerInsight({
      profile,
      applications,
      savedJobs,
    });

    res.status(200).json({
      success: true,
      insight,
    });
  } catch (error) {
    console.error(
      "Career Insight Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to generate career insight",
      error: error.message,
    });
  }
};
