import MockInterview from "../models/MockInterview.js";
import {
  generateMockInterviewQuestion,
  evaluateMockInterviewAnswer,
  generateFinalInterviewSummary,
} from "../services/mockInterviewService.js";

// =====================================
// CREATE MOCK INTERVIEW
// =====================================
export const createMockInterview = async (req, res) => {
  try {
    const { role, interviewType, difficulty, totalQuestions } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Job role is required",
      });
    }

    const question = await generateMockInterviewQuestion({
      role,
      interviewType: interviewType || "General",
      difficulty: difficulty || "Medium",
      previousQuestions: [],
    });

    const count = Number(totalQuestions) > 0 ? Number(totalQuestions) : 5;

    const mockInterview = await MockInterview.create({
      user: req.user._id,
      role,
      interviewType: interviewType || "General",
      difficulty: difficulty || "Medium",
      totalQuestions: count,
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
      questionIndex: 0,
      totalQuestions: mockInterview.totalQuestions,
    });
  } catch (error) {
    console.error("Create Mock Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create mock interview",
      error: error.message,
    });
  }
};

// =====================================
// GET NEXT QUESTION
// =====================================
export const getNextMockInterviewQuestion = async (req, res) => {
  try {
    const interview = await MockInterview.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Mock interview not found",
      });
    }

    const totalQuestions = interview.totalQuestions || 5;

    if (interview.questions.length >= totalQuestions) {
      return res.status(200).json({
        success: true,
        isComplete: true,
        message: "All questions have been asked",
        interview,
      });
    }

    const previousList = interview.questions.map((q) => q.question);

    const question = await generateMockInterviewQuestion({
      role: interview.role,
      interviewType: interview.interviewType,
      difficulty: interview.difficulty,
      previousQuestions: previousList,
    });

    interview.questions.push({ question });
    await interview.save();

    res.status(200).json({
      success: true,
      isComplete: false,
      currentQuestion: question,
      questionIndex: interview.questions.length - 1,
      totalQuestions,
      interview,
    });
  } catch (error) {
    console.error("Get Next Mock Interview Question Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get next question",
      error: error.message,
    });
  }
};

// =====================================
// SUBMIT ANSWER + GET LIVE AI EVALUATION
// =====================================
export const submitMockInterviewAnswer = async (req, res) => {
  try {
    const { questionIndex, answer } = req.body;

    if (questionIndex === undefined || !answer) {
      return res.status(400).json({
        success: false,
        message: "Question index and answer are required",
      });
    }

    const interview = await MockInterview.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Mock interview not found",
      });
    }

    const targetQuestion = interview.questions[questionIndex];
    if (!targetQuestion) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    // Call AI to evaluate candidate's answer
    const evaluation = await evaluateMockInterviewAnswer({
      role: interview.role,
      interviewType: interview.interviewType,
      difficulty: interview.difficulty,
      question: targetQuestion.question,
      answer,
    });

    targetQuestion.answer = answer;
    targetQuestion.score = evaluation.score;
    targetQuestion.communicationScore = evaluation.communicationScore;
    targetQuestion.technicalAccuracy = evaluation.technicalAccuracy;
    targetQuestion.feedback = evaluation.feedback;
    targetQuestion.strengths = evaluation.strengths;
    targetQuestion.improvements = evaluation.improvements;
    targetQuestion.modelAnswer = evaluation.modelAnswer;
    targetQuestion.answeredAt = new Date();

    // Recalculate rolling average overallScore
    const scoredQuestions = interview.questions.filter((q) => q.answer && q.score > 0);
    if (scoredQuestions.length > 0) {
      const sum = scoredQuestions.reduce((acc, q) => acc + q.score, 0);
      interview.overallScore = Math.round(sum / scoredQuestions.length);
    }

    await interview.save();

    res.status(200).json({
      success: true,
      message: "Answer evaluated successfully",
      evaluation,
      interview,
    });
  } catch (error) {
    console.error("Submit Answer Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to evaluate and submit answer",
      error: error.message,
    });
  }
};

// =====================================
// COMPLETE MOCK INTERVIEW & GET SCORECARD
// =====================================
export const completeMockInterview = async (req, res) => {
  try {
    const interview = await MockInterview.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Mock interview not found",
      });
    }

    interview.status = "Completed";

    // Generate comprehensive summary
    try {
      const summary = await generateFinalInterviewSummary({
        role: interview.role,
        interviewType: interview.interviewType,
        questionsWithAnswers: interview.questions,
      });

      interview.overallScore = summary.overallScore || interview.overallScore || 75;
      interview.technicalScore = summary.technicalScore || 75;
      interview.communicationScore = summary.communicationScore || 78;
      interview.confidenceScore = summary.confidenceScore || 80;
      interview.summary = summary.summary || "Mock interview completed.";
      interview.topStrengths = summary.topStrengths || [];
      interview.areasForImprovement = summary.areasForImprovement || [];
      interview.recommendedActionItems = summary.recommendedActionItems || [];
    } catch (summaryErr) {
      console.warn("Could not generate AI final summary:", summaryErr.message);
    }

    await interview.save();

    res.status(200).json({
      success: true,
      message: "Mock interview completed successfully",
      interview,
    });
  } catch (error) {
    console.error("Complete Mock Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to complete mock interview",
      error: error.message,
    });
  }
};

// =====================================
// GET MY MOCK INTERVIEWS
// =====================================
export const getMyMockInterviews = async (req, res) => {
  try {
    const interviews = await MockInterview.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      interviews,
    });
  } catch (error) {
    console.error("Get Mock Interviews Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch mock interviews",
    });
  }
};

// =====================================
// GET SINGLE MOCK INTERVIEW
// =====================================
export const getMockInterviewById = async (req, res) => {
  try {
    const interview = await MockInterview.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Mock interview not found",
      });
    }

    res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.error("Get Mock Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch mock interview",
    });
  }
};
