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
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },

    totalQuestions: {
      type: Number,
      default: 5,
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

        communicationScore: {
          type: Number,
          default: 0,
        },

        technicalAccuracy: {
          type: Number,
          default: 0,
        },

        feedback: {
          type: String,
          default: "",
        },

        strengths: {
          type: String,
          default: "",
        },

        improvements: {
          type: String,
          default: "",
        },

        modelAnswer: {
          type: String,
          default: "",
        },

        answeredAt: {
          type: Date,
        },
      },
    ],

    status: {
      type: String,
      enum: ["In Progress", "Completed"],
      default: "In Progress",
    },

    overallScore: {
      type: Number,
      default: 0,
    },

    technicalScore: {
      type: Number,
      default: 0,
    },

    communicationScore: {
      type: Number,
      default: 0,
    },

    confidenceScore: {
      type: Number,
      default: 0,
    },

    summary: {
      type: String,
      default: "",
    },

    topStrengths: {
      type: [String],
      default: [],
    },

    areasForImprovement: {
      type: [String],
      default: [],
    },

    recommendedActionItems: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const MockInterview = mongoose.model("MockInterview", mockInterviewSchema);

export default MockInterview;
