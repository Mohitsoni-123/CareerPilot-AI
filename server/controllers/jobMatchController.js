import Job from "../models/Job.js";
import Resume from "../models/Resume.js";
import { analyzeJobMatch } from "../services/jobMatchService.js";

export const matchJob = async (req, res) => {
  try {
    const { jobId, resumeId, jobData } = req.body;

    let job = null;

    if (jobId) {
      try {
        job = await Job.findById(jobId);
      } catch (err) {
        // If not a valid ObjectId, continue
      }
    }

    // Fallback if not found in DB
    if (!job && jobData) {
      job = jobData;
    }

    if (!job) {
      // Fallback mock job
      job = {
        title: "Software Engineer",
        company: "Tech Partner",
        location: "Remote",
        jobType: "Full Time",
        skills: ["React", "Node.js", "JavaScript", "REST APIs", "Git"],
        description: "Building scalable web services and responsive applications.",
      };
    }

    // Get Resume
    let resume = null;

    try {
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
    } catch (rErr) {
      console.warn("Resume fetch warning:", rErr.message);
    }

    // Analyze using unified AI Gateway / Algorithmic Engine
    const result = await analyzeJobMatch({
      profile: req.user || { name: "Candidate", skills: [] },
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
