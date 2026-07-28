import CareerRoadmap from "../models/CareerRoadmap.js";
import { generateCareerRoadmap } from "../services/careerRoadmapService.js";

// =====================================
// CREATE CAREER ROADMAP
// =====================================

export const createCareerRoadmap = async (req, res) => {
  try {
    const { targetRole, currentLevel, currentSkills } = req.body;

    if (!targetRole) {
      return res.status(400).json({
        success: false,
        message: "Target role is required",
      });
    }

    const roadmap = await generateCareerRoadmap({
      targetRole,
      currentLevel: currentLevel || "Beginner",
      currentSkills: Array.isArray(currentSkills) ? currentSkills : [],
    });

    const careerRoadmap = await CareerRoadmap.create({
      user: req.user._id,
      targetRole,
      currentLevel: currentLevel || "Beginner",
      currentSkills: Array.isArray(currentSkills) ? currentSkills : [],
      roadmap,
      overallProgress: 0,
      status: "Not Started",
    });

    res.status(201).json({
      success: true,
      message: "Career roadmap created successfully",
      careerRoadmap,
    });
  } catch (error) {
    console.error("Create Career Roadmap Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create career roadmap",
      error: error.message,
    });
  }
};

// =====================================
// GET MY CAREER ROADMAPS
// =====================================

export const getMyCareerRoadmaps = async (req, res) => {
  try {
    const careerRoadmaps = await CareerRoadmap.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      careerRoadmaps,
    });
  } catch (error) {
    console.error("Get Career Roadmaps Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch career roadmaps",
    });
  }
};

// =====================================
// GET SINGLE CAREER ROADMAP
// =====================================

export const getCareerRoadmapById = async (req, res) => {
  try {
    const careerRoadmap = await CareerRoadmap.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!careerRoadmap) {
      return res.status(404).json({
        success: false,
        message: "Career roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      careerRoadmap,
    });
  } catch (error) {
    console.error("Get Career Roadmap Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch career roadmap",
    });
  }
};

// =====================================
// UPDATE ROADMAP PHASE
// =====================================

export const updateRoadmapPhase = async (req, res) => {
  try {
    const { phaseIndex, completed } = req.body;

    const careerRoadmap = await CareerRoadmap.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!careerRoadmap) {
      return res.status(404).json({
        success: false,
        message: "Career roadmap not found",
      });
    }

    if (phaseIndex === undefined || !careerRoadmap.roadmap[phaseIndex]) {
      return res.status(400).json({
        success: false,
        message: "Invalid roadmap phase",
      });
    }

    careerRoadmap.roadmap[phaseIndex].completed = completed;

    const totalPhases = careerRoadmap.roadmap.length;

    const completedPhases = careerRoadmap.roadmap.filter(
      (phase) => phase.completed,
    ).length;

    careerRoadmap.overallProgress =
      totalPhases > 0
        ? Math.round((completedPhases / totalPhases) * 100)
        : 0;

    if (careerRoadmap.overallProgress === 100) {
      careerRoadmap.status = "Completed";
    } else if (careerRoadmap.overallProgress > 0) {
      careerRoadmap.status = "In Progress";
    } else {
      careerRoadmap.status = "Not Started";
    }

    await careerRoadmap.save();

    res.status(200).json({
      success: true,
      message: "Roadmap progress updated successfully",
      careerRoadmap,
    });
  } catch (error) {
    console.error("Update Roadmap Phase Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update roadmap progress",
    });
  }
};

// =====================================
// DELETE CAREER ROADMAP
// =====================================

export const deleteCareerRoadmap = async (req, res) => {
  try {
    const careerRoadmap = await CareerRoadmap.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!careerRoadmap) {
      return res.status(404).json({
        success: false,
        message: "Career roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Career roadmap deleted successfully",
    });
  } catch (error) {
    console.error("Delete Career Roadmap Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete career roadmap",
    });
  }
};
