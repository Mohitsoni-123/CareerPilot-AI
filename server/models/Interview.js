import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      default: null,
    },

    role: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    interviewType: {
      type: String,
      enum: [
        "Technical",
        "HR",
        "Behavioral",
        "System Design",
        "General",
      ],
      default: "General",
    },

    scheduledAt: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "Upcoming",
        "Completed",
        "Cancelled",
      ],
      default: "Upcoming",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model(
  "Interview",
  interviewSchema
);

export default Interview;