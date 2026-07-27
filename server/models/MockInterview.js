import mongoose from "mongoose";

const mockInterviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      required: true,
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

    difficulty: {
      type: String,
      enum: [
        "Easy",
        "Medium",
        "Hard",
      ],
      default: "Medium",
    },

    questions: [
      {
        question: {
          type: String,
          required: true,
        },

        answer: {
          type: String,
          default: "",
        },

        score: {
          type: Number,
          default: 0,
        },

        feedback: {
          type: String,
          default: "",
        },
      },
    ],

    status: {
      type: String,
      enum: [
        "In Progress",
        "Completed",
      ],
      default: "In Progress",
    },

    overallScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const MockInterview = mongoose.model(
  "MockInterview",
  mockInterviewSchema
);

export default MockInterview;