import Application from "../models/Application.js";

// =====================================
// APPLY FOR SEEDED JOB
// =====================================
export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const existingApplication = await Application.findOne({
      user: req.user._id,
      job: jobId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    const application = await Application.create({
      user: req.user._id,
      job: jobId,
      status: "Applied",
    });

    const populatedApplication = await Application.findById(
      application._id
    ).populate("job");

    res.status(201).json({
      success: true,
      message: "Application added successfully",
      application: populatedApplication,
    });
  } catch (error) {
    console.error("Apply Job Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to apply for job",
      error: error.message,
    });
  }
};

// =====================================
// CREATE MANUAL / EXTERNAL APPLICATION
// =====================================
export const createManualApplication = async (req, res) => {
  try {
    const {
      company,
      role,
      location,
      salary,
      jobUrl,
      status = "Applied",
      notes,
      interviewDate,
      priority = "Medium",
    } = req.body;

    if (!company || !role) {
      return res.status(400).json({
        success: false,
        message: "Company and Role are required",
      });
    }

    const application = await Application.create({
      user: req.user._id,
      company,
      role,
      location: location || "Remote",
      salary: salary || "",
      jobUrl: jobUrl || "",
      status,
      notes: notes || "",
      interviewDate: interviewDate || undefined,
      priority,
    });

    res.status(201).json({
      success: true,
      message: "Application logged successfully",
      application,
    });
  } catch (error) {
    console.error("Manual Application Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create application",
      error: error.message,
    });
  }
};

// =====================================
// GET MY APPLICATIONS
// =====================================
export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.user._id,
    })
      .populate("job")
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error("Get Applications Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};

// =====================================
// UPDATE APPLICATION (STATUS, NOTES, DATES)
// =====================================
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status, notes, interviewDate, priority } = req.body;

    const application = await Application.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (status) application.status = status;
    if (notes !== undefined) application.notes = notes;
    if (interviewDate !== undefined) application.interviewDate = interviewDate;
    if (priority) application.priority = priority;

    await application.save();

    const updatedApplication = await Application.findById(
      application._id
    ).populate("job");

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      application: updatedApplication,
    });
  } catch (error) {
    console.error("Update Application Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update application",
    });
  }
};

// =====================================
// DELETE APPLICATION
// =====================================
export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("Delete Application Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete application",
    });
  }
};
