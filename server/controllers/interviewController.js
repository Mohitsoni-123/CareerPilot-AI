import Interview from "../models/Interview.js";

// Create Interview
export const createInterview = async (req, res) => {
  try {
    const {
      job,
      role,
      company,
      interviewType,
      scheduledAt,
      notes,
    } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required",
      });
    }

    const interview = await Interview.create({
      user: req.user._id,
      job: job || null,
      role,
      company: company || "",
      interviewType: interviewType || "General",
      scheduledAt: scheduledAt || null,
      notes: notes || "",
    });

    const populatedInterview = await Interview.findById(
      interview._id
    ).populate("job");

    res.status(201).json({
      success: true,
      message: "Interview created successfully",
      interview: populatedInterview,
    });
  } catch (error) {
    console.error("Create Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create interview",
    });
  }
};


// Get My Interviews
export const getMyInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({
      user: req.user._id,
    })
      .populate("job")
      .sort({
        scheduledAt: 1,
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      interviews,
    });
  } catch (error) {
    console.error("Get Interviews Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch interviews",
    });
  }
};


// Get Single Interview
export const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("job");

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.error("Get Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch interview",
    });
  }
};


// Update Interview
export const updateInterview = async (req, res) => {
  try {
    const {
      role,
      company,
      interviewType,
      scheduledAt,
      status,
      notes,
    } = req.body;

    const interview = await Interview.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    if (role !== undefined) {
      interview.role = role;
    }

    if (company !== undefined) {
      interview.company = company;
    }

    if (interviewType !== undefined) {
      interview.interviewType = interviewType;
    }

    if (scheduledAt !== undefined) {
      interview.scheduledAt = scheduledAt;
    }

    if (status !== undefined) {
      interview.status = status;
    }

    if (notes !== undefined) {
      interview.notes = notes;
    }

    await interview.save();

    const updatedInterview = await Interview.findById(
      interview._id
    ).populate("job");

    res.status(200).json({
      success: true,
      message: "Interview updated successfully",
      interview: updatedInterview,
    });
  } catch (error) {
    console.error("Update Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update interview",
    });
  }
};


// Delete Interview
export const deleteInterview = async (req, res) => {
  try {
    const interview = await Interview.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Interview deleted successfully",
    });
  } catch (error) {
    console.error("Delete Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete interview",
    });
  }
};