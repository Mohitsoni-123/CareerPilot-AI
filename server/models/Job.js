import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "Remote",
    },

    jobType: {
      type: String,
      enum: [
        "Full Time",
        "Part Time",
        "Internship",
        "Contract",
      ],
      default: "Full Time",
    },

    description: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    salary: {
      type: String,
      default: "Not specified",
    },

    applyUrl: {
      type: String,
      default: "",
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model(
  "Job",
  jobSchema
);

export default Job;