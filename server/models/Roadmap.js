import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    targetRole: {
      type: String,
      required: true,
      trim: true,
    },

    currentLevel: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },

    currentSkills: [
      {
        type: String,
        trim: true,
      },
    ],

    phases: [
      {
        title: {
          type: String,
          required: true,
        },

        description: {
          type: String,
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

        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

const Roadmap = mongoose.model("Roadmap", roadmapSchema);

export default Roadmap;