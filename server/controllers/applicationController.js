import Application from "../models/Application.js";

// Apply for Job

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
      application._id,
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
    });
  }
};

// Get My Applications

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

// Update Application Status

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

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

    application.status = status;

    await application.save();

    const updatedApplication = await Application.findById(
      application._id,
    ).populate("job");

    res.status(200).json({
      success: true,

      message: "Application status updated",

      application: updatedApplication,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message: "Failed to update status",
    });
  }
};
