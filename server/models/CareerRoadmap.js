import mongoose from "mongoose";

const careerRoadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    targetRole: {
      type: String,
      required: true,
    },

    currentLevel: {
      type: String,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
      ],
      default: "Beginner",
    },

    currentSkills: [
      {
        type: String,
      },
    ],

    roadmap: [
      {
        phase: {
          type: String,
          required: true,
        },

        title: {
          type: String,
          required: true,
        },

        description: {
          type: String,
          default: "",
        },

        skills: [
          {
            type: String,
          },
        ],

        projects: [
          {
            type: String,
          },
        ],

        duration: {
          type: String,
          default: "",
        },

        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],

    overallProgress: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "Not Started",
        "In Progress",
        "Completed",
      ],
      default: "Not Started",
    },
  },
  {
    timestamps: true,
  }
);

const CareerRoadmap = mongoose.model(
  "CareerRoadmap",
  careerRoadmapSchema
);

export default CareerRoadmap;