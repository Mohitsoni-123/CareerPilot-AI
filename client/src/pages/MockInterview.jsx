import { useState } from "react";
import api from "../services/api";

const interviewTypes = [
  "Technical",
  "HR",
  "Behavioral",
  "System Design",
  "General",
];

const difficulties = ["Easy", "Medium", "Hard"];

const MockInterview = () => {
  const [role, setRole] = useState("");
  const [interviewType, setInterviewType] = useState("Technical");
  const [difficulty, setDifficulty] = useState("Medium");

  const [interview, setInterview] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(15);

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // =====================================
  // START MOCK INTERVIEW
  // =====================================

  const startInterview = async (e) => {
    e.preventDefault();

    if (!role.trim()) {
      alert("Please enter a job role");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/mock-interviews", {
        role,
        interviewType,
        difficulty,
      });

      setInterview(response.data.interview);
      setCurrentQuestion(response.data.currentQuestion);
      setQuestionIndex(response.data.questionIndex ?? 0);
      setTotalQuestions(response.data.totalQuestions ?? 15);
      setAnswer("");
      setIsFinished(false);
    } catch (error) {
      console.error("Start Mock Interview Error:", error);

      alert(error.response?.data?.message || "Failed to start mock interview");
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // SUBMIT ANSWER + FETCH NEXT QUESTION
  // =====================================

  const submitAnswer = async () => {
    if (!answer.trim()) {
      alert("Please write your answer");
      return;
    }

    setSubmitting(true);

    try {
      // 1. Save the current answer
      const saveRes = await api.put(
        `/mock-interviews/${interview._id}/answer`,
        {
          questionIndex,
          answer,
        },
      );

      setInterview(saveRes.data.interview);

      // 2. Fetch the next question
      const nextRes = await api.get(
        `/mock-interviews/${interview._id}/next-question`,
      );

      if (nextRes.data.isComplete) {
        // All questions done — mark interview complete automatically
        const completeRes = await api.put(
          `/mock-interviews/${interview._id}/complete`,
        );

        setInterview(completeRes.data.interview);
        setIsFinished(true);
      } else {
        setInterview(nextRes.data.interview);
        setCurrentQuestion(nextRes.data.currentQuestion);
        setQuestionIndex(nextRes.data.questionIndex);
        setTotalQuestions(nextRes.data.totalQuestions);
        setAnswer("");
      }
    } catch (error) {
      console.error("Submit Answer Error:", error);

      alert(error.response?.data?.message || "Failed to submit answer");
    } finally {
      setSubmitting(false);
    }
  };

  // =====================================
  // COMPLETE INTERVIEW (manual button)
  // =====================================

  const completeInterview = async () => {
    try {
      const response = await api.put(
        `/mock-interviews/${interview._id}/complete`,
      );

      setInterview(response.data.interview);
      setIsFinished(true);
    } catch (error) {
      console.error("Complete Interview Error:", error);

      alert(error.response?.data?.message || "Failed to complete interview");
    }
  };

  // =====================================
  // START SCREEN
  // =====================================

  if (!interview) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              AI Mock Interview
            </h1>

            <p className="text-slate-500 mt-2">
              Practice interview questions with your AI career assistant.
            </p>
          </div>

          {/* Form */}

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Start Your Mock Interview
            </h2>

            <p className="text-slate-500 mt-2">
              Choose your role and interview preferences.
            </p>

            <form onSubmit={startInterview} className="mt-8 space-y-6">
              {/* Role */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Role
                </label>

                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Full Stack Developer"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Interview Type */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interview Type
                </label>

                <select
                  value={interviewType}
                  onChange={(e) => setInterviewType(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {interviewTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Difficulty
                </label>

                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {difficulties.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg font-medium transition"
              >
                {loading ? "Starting Interview..." : "Start AI Mock Interview"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // COMPLETED SCREEN
  // =====================================

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              AI Mock Interview
            </h1>

            <p className="text-slate-500 mt-2">
              {interview.role} • {interview.interviewType} •{" "}
              {interview.difficulty}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Completed
            </span>

            <h2 className="text-2xl font-semibold text-slate-900 mt-5">
              Interview Completed!
            </h2>

            <p className="text-slate-500 mt-2">
              You answered {interview.questions.length} question
              {interview.questions.length !== 1 ? "s" : ""}. Great job!
            </p>
          </div>

          {/* All Questions & Answers */}

          <div className="bg-white border border-slate-200 rounded-2xl p-8 mt-6">
            <h2 className="text-xl font-semibold">Interview Summary</h2>

            <div className="mt-5 space-y-4">
              {interview.questions.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-5">
                  <p className="font-medium text-slate-900">
                    Q{index + 1}. {item.question}
                  </p>

                  {item.answer && (
                    <div className="mt-3">
                      <p className="text-sm text-slate-500">Your Answer</p>

                      <p className="mt-1 text-slate-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // INTERVIEW SCREEN
  // =====================================

  const progressPercent = Math.round(
    ((questionIndex + 1) / totalQuestions) * 100,
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                AI Mock Interview
              </h1>

              <p className="text-slate-500 mt-2">
                {interview.role} • {interview.interviewType} •{" "}
                {interview.difficulty}
              </p>
            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full h-fit text-sm font-medium">
              {interview.status}
            </span>
          </div>
        </div>

        {/* Progress Bar */}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-700">
              Question {questionIndex + 1} of {totalQuestions}
            </span>

            <span className="text-blue-600 font-medium">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question */}

        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-600">
              Question {questionIndex + 1}
            </span>

            <span className="text-sm text-slate-500">
              Difficulty: {interview.difficulty}
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 mt-5">
            {currentQuestion}
          </h2>

          {/* Answer */}

          <div className="mt-8">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Answer
            </label>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows="8"
              placeholder="Write your answer here..."
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Actions */}

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={submitAnswer}
              disabled={submitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium"
            >
              {submitting
                ? "Submitting..."
                : questionIndex + 1 >= totalQuestions
                  ? "Submit Final Answer"
                  : "Submit & Next Question"}
            </button>

            <button
              onClick={completeInterview}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Complete Interview
            </button>
          </div>
        </div>

        {/* Previous Questions */}

        {interview.questions?.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mt-6">
            <h2 className="text-xl font-semibold">Interview Progress</h2>

            <div className="mt-5 space-y-4">
              {interview.questions.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-5">
                  <p className="font-medium text-slate-900">
                    Q{index + 1}. {item.question}
                  </p>

                  {item.answer && (
                    <div className="mt-3">
                      <p className="text-sm text-slate-500">Your Answer</p>

                      <p className="mt-1 text-slate-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockInterview;
