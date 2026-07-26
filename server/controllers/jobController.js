import Job from "../models/Job.js";


// Get All Jobs

export const getJobs = async (
  req,
  res
) => {
  try {

    const jobs = await Job.find()
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      jobs,
    });

  } catch (error) {

    console.error(
      "Get Jobs Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });

  }
};


// Get Single Job

export const getJobById = async (
  req,
  res
) => {
  try {

    const job = await Job.findById(
      req.params.id
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
    });

  }
};


// Create Job

export const createJob = async (
  req,
  res
) => {
  try {

    const {
      title,
      company,
      location,
      jobType,
      description,
      skills,
      salary,
      applyUrl,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      jobType,
      description,
      skills,
      salary,
      applyUrl,
      postedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });

  } catch (error) {

    console.error(
      "Create Job Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to create job",
    });

  }
};