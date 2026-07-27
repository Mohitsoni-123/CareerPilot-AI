import MockInterview from "../models/MockInterview.js";
import { generateMockInterviewQuestion } from "../services/mockInterviewService.js";

// =====================================
// CREATE MOCK INTERVIEW
// =====================================

export const createMockInterview = async (req, res) => {
  try {
    const {
      role,
      interviewType,
      difficulty,
    } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Job role is required",
      });
    }

    const question =
      await generateMockInterviewQuestion({
        role,
        interviewType:
          interviewType || "General",
        difficulty:
          difficulty || "Medium",
      });

    const mockInterview =
      await MockInterview.create({
        user: req.user._id,
        role,
        interviewType:
          interviewType || "General",
        difficulty:
          difficulty || "Medium",
        questions: [
          {
            question,
          },
        ],
        status: "In Progress",
      });

    res.status(201).json({
      success: true,
      message: "Mock interview created successfully",
      interview: mockInterview,
      currentQuestion: question,
    });
  } catch (error) {
    console.error(
      "Create Mock Interview Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to create mock interview",
      error: error.message,
    });
  }
};


// =====================================
// GET MY MOCK INTERVIEWS
// =====================================

export const getMyMockInterviews = async (
  req,
  res
) => {
  try {
    const interviews =
      await MockInterview.find({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      interviews,
    });
  } catch (error) {
    console.error(
      "Get Mock Interviews Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch mock interviews",
    });
  }
};


// =====================================
// GET SINGLE MOCK INTERVIEW
// =====================================

export const getMockInterviewById =
  async (req, res) => {
    try {
      const interview =
        await MockInterview.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!interview) {
        return res.status(404).json({
          success: false,
          message:
            "Mock interview not found",
        });
      }

      res.status(200).json({
        success: true,
        interview,
      });
    } catch (error) {
      console.error(
        "Get Mock Interview Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch mock interview",
      });
    }
  };


// =====================================
// SUBMIT ANSWER
// =====================================

export const submitMockInterviewAnswer =
  async (req, res) => {
    try {
      const {
        questionIndex,
        answer,
      } = req.body;

      if (
        questionIndex === undefined ||
        !answer
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Question index and answer are required",
        });
      }

      const interview =
        await MockInterview.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!interview) {
        return res.status(404).json({
          success: false,
          message:
            "Mock interview not found",
        });
      }

      if (
        !interview.questions[
          questionIndex
        ]
      ) {
        return res.status(404).json({
          success: false,
          message:
            "Question not found",
        });
      }

      interview.questions[
        questionIndex
      ].answer = answer;

      await interview.save();

      res.status(200).json({
        success: true,
        message:
          "Answer submitted successfully",
        interview,
      });
    } catch (error) {
      console.error(
        "Submit Answer Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to submit answer",
      });
    }
  };


// =====================================
// COMPLETE MOCK INTERVIEW
// =====================================

export const completeMockInterview =
  async (req, res) => {
    try {
      const interview =
        await MockInterview.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!interview) {
        return res.status(404).json({
          success: false,
          message:
            "Mock interview not found",
        });
      }

      interview.status = "Completed";

      await interview.save();

      res.status(200).json({
        success: true,
        message:
          "Mock interview completed successfully",
        interview,
      });
    } catch (error) {
      console.error(
        "Complete Mock Interview Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to complete mock interview",
      });
    }
  };