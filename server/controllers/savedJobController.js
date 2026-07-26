import SavedJob from "../models/SavedJob.js";


// Save Job

export const saveJob = async (
  req,
  res
) => {

  try {

    const {
      jobId,
    } = req.body;


    const existing =
      await SavedJob.findOne({
        user: req.user._id,
        job: jobId,
      });


    if (existing) {

      return res.status(400).json({

        success: false,

        message:
          "Job already saved",

      });

    }


    const savedJob =
      await SavedJob.create({

        user: req.user._id,

        job: jobId,

      });


    res.status(201).json({

      success: true,

      message:
        "Job saved successfully",

      savedJob,

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Failed to save job",

    });

  }
};



// Get Saved Jobs

export const getSavedJobs = async (
  req,
  res
) => {

  try {

    const savedJobs =
      await SavedJob.find({

        user: req.user._id,

      })
        .populate("job")
        .sort({
          createdAt: -1,
        });


    res.status(200).json({

      success: true,

      savedJobs,

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Failed to fetch saved jobs",

    });

  }
};



// Remove Saved Job

export const removeSavedJob =
  async (
    req,
    res
  ) => {

    try {

      await SavedJob.findOneAndDelete({

        user:
          req.user._id,

        job:
          req.params.jobId,

      });


      res.status(200).json({

        success: true,

        message:
          "Job removed from saved jobs",

      });


    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          "Failed to remove saved job",

      });

    }
  };