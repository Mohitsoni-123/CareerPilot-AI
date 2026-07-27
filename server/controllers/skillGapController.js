import SkillGap from "../models/SkillGap.js";
import Job from "../models/Job.js";


// =====================================
// CREATE SKILL GAP ANALYSIS
// =====================================

export const createSkillGapAnalysis = async (
  req,
  res
) => {
  try {
    const {
      targetRole,
      currentSkills,
      requiredSkills,
      jobId,
    } = req.body;

    // Validate target role

    if (!targetRole) {
      return res.status(400).json({
        success: false,
        message: "Target role is required",
      });
    }

    // Convert skills to arrays

    const userSkills = Array.isArray(
      currentSkills
    )
      ? currentSkills
      : [];

    let jobSkills = Array.isArray(
      requiredSkills
    )
      ? requiredSkills
      : [];

    // If Job ID is provided,
    // get required skills from Job

    let job = null;

    if (jobId) {
      job = await Job.findById(jobId);

      if (!job) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      jobSkills = Array.isArray(job.skills)
        ? job.skills
        : [];
    }

    // Normalize skills

    const normalizedUserSkills =
      userSkills.map((skill) =>
        String(skill).toLowerCase().trim()
      );

    const normalizedJobSkills =
      jobSkills.map((skill) =>
        String(skill).toLowerCase().trim()
      );

    // Find matched skills

    const matchedSkills =
      normalizedJobSkills.filter((skill) =>
        normalizedUserSkills.includes(skill)
      );

    // Find missing skills

    const missingSkills =
      normalizedJobSkills.filter(
        (skill) =>
          !normalizedUserSkills.includes(skill)
      );

    // Calculate score

    const skillGapScore =
      normalizedJobSkills.length > 0
        ? Math.round(
            (matchedSkills.length /
              normalizedJobSkills.length) *
              100
          )
        : 0;

    // Generate recommendations

    const recommendations =
      missingSkills.map((skill) => ({
        skill,
        reason: `Improve your ${skill} skills to become more prepared for the ${targetRole} role.`,
        priority:
          missingSkills.indexOf(skill) < 2
            ? "High"
            : "Medium",
      }));

    // Save analysis

    const skillGap =
      await SkillGap.create({
        user: req.user._id,
        job: jobId || null,
        targetRole,
        currentSkills: userSkills,
        requiredSkills: jobSkills,
        matchedSkills,
        missingSkills,
        skillGapScore,
        recommendations,
      });

    res.status(201).json({
      success: true,
      message:
        "Skill gap analysis created successfully",
      skillGap,
    });
  } catch (error) {
    console.error(
      "Create Skill Gap Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to create skill gap analysis",
      error: error.message,
    });
  }
};


// =====================================
// GET MY SKILL GAP ANALYSES
// =====================================

export const getMySkillGapAnalyses =
  async (req, res) => {
    try {
      const skillGaps =
        await SkillGap.find({
          user: req.user._id,
        })
          .populate("job")
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        skillGaps,
      });
    } catch (error) {
      console.error(
        "Get Skill Gap Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch skill gap analyses",
      });
    }
  };


// =====================================
// GET SINGLE SKILL GAP
// =====================================

export const getSkillGapById =
  async (req, res) => {
    try {
      const skillGap =
        await SkillGap.findOne({
          _id: req.params.id,
          user: req.user._id,
        }).populate("job");

      if (!skillGap) {
        return res.status(404).json({
          success: false,
          message:
            "Skill gap analysis not found",
        });
      }

      res.status(200).json({
        success: true,
        skillGap,
      });
    } catch (error) {
      console.error(
        "Get Skill Gap By ID Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch skill gap analysis",
      });
    }
  };


// =====================================
// DELETE SKILL GAP
// =====================================

export const deleteSkillGap =
  async (req, res) => {
    try {
      const skillGap =
        await SkillGap.findOneAndDelete({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!skillGap) {
        return res.status(404).json({
          success: false,
          message:
            "Skill gap analysis not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Skill gap analysis deleted successfully",
      });
    } catch (error) {
      console.error(
        "Delete Skill Gap Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete skill gap analysis",
      });
    }
  };