import Roadmap from "../models/Roadmap.js";
import User from "../models/User.js";

import {
  generateCareerRoadmapWithAI,
} from "../services/geminiService.js";

// Generate Career Roadmap
export const generateRoadmap = async (req, res) => {
  try {
    const { targetRole, currentLevel, currentSkills } = req.body;

    // Validate required fields
    if (!targetRole || !currentLevel) {
      return res.status(400).json({
        success: false,
        message: "Target role and current level are required",
      });
    }

    // Get logged-in user
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Use skills from request or user's profile
    const skills =
      currentSkills && currentSkills.length > 0
        ? currentSkills
        : user.skills || [];

    // Generate personalized roadmap using Gemini AI
const aiResponse = await generateCareerRoadmapWithAI({
  targetRole,
  currentLevel,
  currentSkills: skills,
});

// Parse AI response
let aiRoadmap;

try {
  // Remove markdown code fences if Gemini returns them
  const cleanedResponse = aiResponse
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  aiRoadmap = JSON.parse(cleanedResponse);
} catch (error) {
  console.error("AI JSON Parse Error:", aiResponse);

  return res.status(500).json({
    success: false,
    message: "AI returned an invalid roadmap format",
  });
}

// Validate AI roadmap
if (
  !aiRoadmap ||
  !Array.isArray(aiRoadmap.phases) ||
  aiRoadmap.phases.length === 0
) {
  return res.status(500).json({
    success: false,
    message: "AI failed to generate a valid roadmap",
  });
}

// Format AI phases for MongoDB
const phases = aiRoadmap.phases.map((phase) => ({
  title: phase.title || "Learning Phase",
  description:
    phase.description ||
    "Complete this learning phase to improve your skills.",
  skills: Array.isArray(phase.skills)
    ? phase.skills
    : [],
  projects: Array.isArray(phase.projects)
    ? phase.projects
    : [],
  completed: false,
}));

    // Save roadmap to MongoDB
    const roadmap = await Roadmap.create({
      user: req.user._id,
      targetRole,
      currentLevel,
      currentSkills: skills,
      phases,
      progress: 0,
    });

    return res.status(201).json({
      success: true,
      message: "Career roadmap generated successfully",
      roadmap,
    });
  } catch (error) {
    console.error("Generate Roadmap Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate career roadmap",
      error: error.message,
    });
  }
};

// Get user's latest roadmap
export const getMyRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "No career roadmap found",
      });
    }

    return res.status(200).json({
      success: true,
      roadmap,
    });
  } catch (error) {
    console.error("Get Roadmap Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch career roadmap",
      error: error.message,
    });
  }
};

// Update roadmap phase progress
export const updateRoadmapProgress = async (req, res) => {
  try {
    const { roadmapId } = req.params;
    const { phaseIndex, completed } = req.body;

    // Validate phase index
    if (phaseIndex === undefined) {
      return res.status(400).json({
        success: false,
        message: "Phase index is required",
      });
    }

    // Find roadmap belonging to logged-in user
    const roadmap = await Roadmap.findOne({
      _id: roadmapId,
      user: req.user._id,
    });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    // Check phase index
    if (
      phaseIndex < 0 ||
      phaseIndex >= roadmap.phases.length
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid phase index",
      });
    }

    // Update phase completion
    roadmap.phases[phaseIndex].completed =
      completed !== undefined ? completed : true;

    // Calculate progress
    const completedPhases = roadmap.phases.filter(
      (phase) => phase.completed
    ).length;

    const totalPhases = roadmap.phases.length;

    roadmap.progress = Math.round(
      (completedPhases / totalPhases) * 100
    );

    // Save updated roadmap
    await roadmap.save();

    return res.status(200).json({
      success: true,
      message: "Roadmap progress updated successfully",
      roadmap,
    });
  } catch (error) {
    console.error(
      "Update Roadmap Progress Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update roadmap progress",
      error: error.message,
    });
  }
};