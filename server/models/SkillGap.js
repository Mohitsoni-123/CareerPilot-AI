import mongoose from "mongoose";

const skillGapSchema = new mongoose.Schema(
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

    targetRole: {
      type: String,
      required: true,
    },

    currentSkills: [
      {
        type: String,
      },
    ],

    requiredSkills: [
      {
        type: String,
      },
    ],

    matchedSkills: [
      {
        type: String,
      },
    ],

    missingSkills: [
      {
        type: String,
      },
    ],

    skillGapScore: {
      type: Number,
      default: 0,
    },

    recommendations: [
      {
        skill: String,
        reason: String,
        priority: {
          type: String,
          enum: ["High", "Medium", "Low"],
          default: "Medium",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SkillGap = mongoose.model(
  "SkillGap",
  skillGapSchema
);

export default SkillGap;