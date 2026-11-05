import { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Clock,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Brain,
  Volume2,
} from "lucide-react";
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
  const [targetQuestionCount, setTargetQuestionCount] = useState(5);

  const [interview, setInterview] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(5);
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Speech Recognition state
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef(null);

  // Timer state (seconds)
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [timerActive, setTimerActive] = useState(false);

  // Accordion for question review
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Check Web Speech API support
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      const recognizer = new SpeechRecognition();
      recognizer.continuous = true;
      recognizer.interimResults = true;
      recognizer.lang = "en-US";

      recognizer.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setAnswer((prev) => (prev ? `${prev} ${transcript}` : transcript));
      };

      recognizer.onerror = (e) => {
        console.warn("Speech recognition error:", e.error);
        setIsListening(false);
      };

      recognizer.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognizer;
    }
  }, []);

  // Timer Countdown Effect
  useEffect(() => {
    let interval = null;
    if (timerActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((sec) => sec - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, secondsLeft]);

  // Toggle Speech Recognition
  const toggleSpeech = () => {
    if (!speechSupported) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        console.error("Start speech error:", err);
      }
    }
  };

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
        totalQuestions: targetQuestionCount,
      });

      setInterview(response.data.interview);
      setCurrentQuestion(response.data.currentQuestion);
      setQuestionIndex(response.data.questionIndex ?? 0);
      setTotalQuestions(response.data.totalQuestions ?? 5);
      setAnswer("");
      setIsFinished(false);
      setSecondsLeft(120);
      setTimerActive(true);
    } catch (error) {
      console.error("Start Mock Interview Error:", error);
      alert(error.response?.data?.message || "Failed to start mock interview");
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // SUBMIT ANSWER + LIVE EVALUATION
  // =====================================
  const submitAnswer = async () => {
    if (!answer.trim()) {
      alert("Please provide an answer (type or speak) before submitting.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    setSubmitting(true);
    setTimerActive(false);

    try {
      // 1. Submit answer and receive AI Evaluation
      const saveRes = await api.put(
        `/mock-interviews/${interview._id}/answer`,
        {
          questionIndex,
          answer,
        }
      );

      const updatedInterview = saveRes.data.interview;
      setInterview(updatedInterview);

      // Check if all questions are completed
      if (questionIndex + 1 >= totalQuestions) {
        const completeRes = await api.put(
          `/mock-interviews/${interview._id}/complete`
        );
        setInterview(completeRes.data.interview);
        setIsFinished(true);
      } else {
        // Fetch next question
        const nextRes = await api.get(
          `/mock-interviews/${interview._id}/next-question`
        );

        if (nextRes.data.isComplete) {
          const completeRes = await api.put(
            `/mock-interviews/${interview._id}/complete`
          );
          setInterview(completeRes.data.interview);
          setIsFinished(true);
        } else {
          setInterview(nextRes.data.interview);
          setCurrentQuestion(nextRes.data.currentQuestion);
          setQuestionIndex(nextRes.data.questionIndex);
          setTotalQuestions(nextRes.data.totalQuestions);
          setAnswer("");
          setSecondsLeft(120);
          setTimerActive(true);
        }
      }
    } catch (error) {
      console.error("Submit Answer Error:", error);
      alert(error.response?.data?.message || "Failed to submit and evaluate answer");
    } finally {
      setSubmitting(false);
    }
  };

  // Complete Interview Manually
  const completeInterview = async () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    try {
      setSubmitting(true);
      const response = await api.put(
        `/mock-interviews/${interview._id}/complete`
      );
      setInterview(response.data.interview);
      setIsFinished(true);
    } catch (error) {
      console.error("Complete Interview Error:", error);
      alert(error.response?.data?.message || "Failed to complete interview");
    } finally {
      setSubmitting(false);
    }
  };

  // Format Timer Display (MM:SS)
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // =====================================
  // SCREEN 1: SETUP SCREEN
  // =====================================
  if (!interview) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> AI Powered Simulation 2.0
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              AI Mock Interview & Speech Coach
            </h1>
            <p className="text-slate-600 mt-2 text-base">
              Simulate realistic interviews with voice recognition, real-time AI scoring, and personalized model answers.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" /> Configure Your Interview
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Select your target role and customize the difficulty and focus area.
            </p>

            <form onSubmit={startInterview} className="mt-8 space-y-6">
              {/* Role */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Target Job Role *
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Full Stack Developer, Data Scientist, Product Manager"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>

              {/* Grid: Type & Difficulty */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Interview Type
                  </label>
                  <select
                    value={interviewType}
                    onChange={(e) => setInterviewType(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {interviewTypes.map((type) => (
                      <option key={type} value={type}>
                        {type} Interview
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {difficulties.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Question Count
                  </label>
                  <select
                    value={targetQuestionCount}
                    onChange={(e) => setTargetQuestionCount(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value={3}>3 Questions (Quick Sprint)</option>
                    <option value={5}>5 Questions (Standard Practice)</option>
                    <option value={8}>8 Questions (In-Depth Mock)</option>
                    <option value={10}>10 Questions (Comprehensive)</option>
                  </select>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Speech-to-Text Voice Answering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Instant AI Scoring & Feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Comprehensive Final Scorecard</span>
                </div>
              </div>

              {/* Start Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white py-4 rounded-xl font-bold transition shadow-lg flex items-center justify-center gap-2 text-base"
              >
                {loading ? (
                  "Generating Customized Questions..."
                ) : (
                  <>
                    Start AI Mock Interview <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // SCREEN 2: COMPLETED SCORECARD SCREEN
  // =====================================
  if (isFinished) {
    const overall = interview.overallScore || 75;
    const technical = interview.technicalScore || overall;
    const communication = interview.communicationScore || overall;
    const confidence = interview.confidenceScore || overall;

    return (
      <div className="min-h-screen bg-slate-50 p-6 md:p-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  ✓ Interview Completed
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold mt-3">
                  AI Interview Scorecard
                </h1>
                <p className="text-slate-300 text-sm mt-1">
                  {interview.role} • {interview.interviewType} • {interview.difficulty}
                </p>
              </div>

              {/* Overall Score Circle */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shrink-0 w-44">
                <span className="text-xs text-slate-300 uppercase font-semibold">
                  Overall Score
                </span>
                <div className="text-5xl font-black text-white mt-1">
                  {overall}
                  <span className="text-2xl text-cyan-300 font-bold">/100</span>
                </div>
                <p className="text-xs text-cyan-200 mt-1">
                  {overall >= 80
                    ? "Excellent Readiness"
                    : overall >= 60
                    ? "Good Foundation"
                    : "Needs More Practice"}
                </p>
              </div>
            </div>
          </div>

          {/* Performance Breakdown Meters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  Technical Accuracy
                </span>
                <span className="text-sm font-bold text-blue-600">{technical}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${technical}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Knowledge depth & technical precision
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  Communication Clarity
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  {communication}%
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div
                  className="bg-emerald-600 h-2.5 rounded-full"
                  style={{ width: `${communication}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Structure, conciseness & articulation
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  Confidence & Delivery
                </span>
                <span className="text-sm font-bold text-purple-600">
                  {confidence}%
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${confidence}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Executive presence & completeness
              </p>
            </div>
          </div>

          {/* AI Executive Summary & Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-blue-600" /> Executive AI Feedback
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {interview.summary ||
                  "You showed consistent effort across the interview session. Incorporate more quantitative achievements and the STAR technique to further elevate your answers."}
              </p>

              {interview.topStrengths?.length > 0 && (
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase text-emerald-700 tracking-wider">
                    Key Strengths:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {interview.topStrengths.map((str, i) => (
                      <span
                        key={i}
                        className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-medium"
                      >
                        ✓ {str}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-indigo-600" /> Areas for Growth
              </h3>
              {interview.areasForImprovement?.length > 0 ? (
                <ul className="space-y-2 text-sm text-slate-600">
                  {interview.areasForImprovement.map((area, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 text-sm">
                  Continue strengthening edge case handling and articulating tradeoff decisions.
                </p>
              )}

              {interview.recommendedActionItems?.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold uppercase text-blue-700 tracking-wider">
                    Action Items:
                  </span>
                  <ul className="space-y-1 mt-2 text-xs text-slate-600">
                    {interview.recommendedActionItems.map((item, i) => (
                      <li key={i}>🎯 {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Q&A Accordion Review */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
              <span>Question-by-Question Evaluation</span>
              <span className="text-xs text-slate-500 font-normal">
                {interview.questions.length} questions evaluated
              </span>
            </h2>

            <div className="space-y-4">
              {interview.questions.map((q, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : idx)
                      }
                      className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          Q{idx + 1}
                        </span>
                        <p className="font-semibold text-slate-900 text-sm md:text-base">
                          {q.question}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {q.score > 0 && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              q.score >= 80
                                ? "bg-green-100 text-green-700"
                                : q.score >= 60
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            Score: {q.score}/100
                          </span>
                        )}
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-6 bg-white space-y-4 border-t border-slate-200 text-sm">
                        {/* Your Answer */}
                        <div>
                          <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                            Your Answer:
                          </span>
                          <p className="mt-1 text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200">
                            {q.answer || "No answer was recorded for this question."}
                          </p>
                        </div>

                        {/* AI Feedback & Scores */}
                        {q.feedback && (
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <span className="text-xs font-bold uppercase text-blue-800 tracking-wider flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> AI Feedback & Critique:
                            </span>
                            <p className="mt-1 text-blue-950 text-xs md:text-sm">
                              {q.feedback}
                            </p>
                          </div>
                        )}

                        {/* Model Answer */}
                        {q.modelAnswer && (
                          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                            <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> Model Ideal Answer:
                            </span>
                            <p className="mt-1 text-emerald-950 text-xs md:text-sm leading-relaxed">
                              {q.modelAnswer}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
            <button
              onClick={() => {
                setInterview(null);
                setIsFinished(false);
              }}
              className="px-6 py-3 border border-slate-300 hover:bg-slate-100 rounded-xl font-semibold text-slate-700 flex items-center gap-2 transition"
            >
              <RotateCcw className="w-4 h-4" /> Practice Another Interview
            </button>

            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md transition"
            >
              Return to Dashboard →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // SCREEN 3: LIVE ACTIVE INTERVIEW SCREEN
  // =====================================
  const progressPercent = Math.round(
    ((questionIndex + 1) / totalQuestions) * 100
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Mock Interview: {interview.role}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {interview.interviewType} • {interview.difficulty} Level
            </p>
          </div>

          {/* Timer Badge */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono font-bold shadow-sm border ${
                secondsLeft < 30
                  ? "bg-red-50 text-red-600 border-red-200 animate-pulse"
                  : "bg-white text-slate-800 border-slate-200"
              }`}
            >
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{formatTime(secondsLeft)}</span>
            </div>

            <button
              onClick={completeInterview}
              className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-2 rounded-xl font-medium transition"
            >
              Finish Early
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
            <span>
              Question {questionIndex + 1} of {totalQuestions}
            </span>
            <span className="text-blue-600">{progressPercent}% Completed</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Question #{questionIndex + 1}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Target Time: 2 mins
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-4 leading-relaxed">
            "{currentQuestion}"
          </h2>

          {/* Answer Area with Voice Recognition Controls */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">
                Your Answer
              </label>

              {/* Speech Recognition Toggle */}
              {speechSupported && (
                <button
                  type="button"
                  onClick={toggleSpeech}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                    isListening
                      ? "bg-red-500 text-white animate-pulse"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-3.5 h-3.5" /> Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="w-3.5 h-3.5 text-blue-600" /> Voice Answer (Dictate)
                    </>
                  )}
                </button>
              )}
            </div>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={8}
              placeholder={
                isListening
                  ? "Listening to your voice... Speak clearly into your microphone."
                  : "Type your answer or click 'Voice Answer' to speak your answer naturally..."
              }
              className={`w-full border rounded-2xl p-4 text-sm md:text-base outline-none focus:ring-2 focus:ring-blue-500 resize-none transition leading-relaxed ${
                isListening
                  ? "border-red-400 bg-red-50/20"
                  : "border-slate-300 bg-slate-50/50"
              }`}
            />

            {isListening && (
              <p className="text-xs text-red-600 font-medium mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                Microphone is active. Speak clearly.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              💡 Tip: Use the STAR method (Situation, Task, Action, Result) for structured responses.
            </p>

            <button
              onClick={submitAnswer}
              disabled={submitting || !answer.trim()}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-40 text-white px-8 py-3.5 rounded-xl font-bold shadow-md transition flex items-center gap-2"
            >
              {submitting ? (
                "Evaluating Answer with AI..."
              ) : questionIndex + 1 >= totalQuestions ? (
                "Submit & Generate Scorecard"
              ) : (
                <>
                  Submit Answer & Next <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
