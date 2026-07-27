import Job from "../models/Job.js";
import Resume from "../models/Resume.js";

import { analyzeJobMatch } from "../services/jobMatchService.js";

export const matchJob = async (req, res) => {
  try {
    const { jobId, resumeId } = req.body;

    // Get Job

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Get Resume

    let resume = null;

    if (resumeId) {
      resume = await Resume.findOne({
        _id: resumeId,
        user: req.user._id,
      });
    } else {
      resume = await Resume.findOne({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });
    }

    // Analyze

    const result = await analyzeJobMatch({
      profile: req.user,

      resumeText: resume?.originalText || "",

      job,
    });

    res.status(200).json({
      success: true,

      result,
    });
  } catch (error) {
    console.error("Job Match Error:", error);

    res.status(500).json({
      success: false,

      message: "Failed to analyze job match",

      error: error.message,
    });
  }
};
