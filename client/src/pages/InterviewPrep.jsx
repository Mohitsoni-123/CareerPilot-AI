import { useState } from "react";
import {
  BookOpen,
  Code,
  Database,
  Globe,
  Brain,
  Users,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

import api from "../services/api";

const InterviewPreparation = () => {
  // ==========================================
  // SELECTION STATES
  // ==========================================

  const [selectedRole, setSelectedRole] =
    useState("");

  const [selectedType, setSelectedType] =
    useState("");

  const [selectedTopic, setSelectedTopic] =
    useState("");


  // ==========================================
  // INTERVIEW STATES
  // ==========================================

  const [questions, setQuestions] =
    useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [showAnswer, setShowAnswer] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [started, setStarted] =
    useState(false);


  // ==========================================
  // ROLES
  // ==========================================

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
    "Data Analyst",
  ];


  // ==========================================
  // INTERVIEW TYPES
  // ==========================================

  const interviewTypes = [
    "Technical Interview",
    "HR Interview",
    "Behavioral Interview",
  ];


  // ==========================================
  // TOPICS
  // ==========================================

  const topics = [
    {
      name: "JavaScript",
      icon: Code,
    },
    {
      name: "React.js",
      icon: Globe,
    },
    {
      name: "Node.js",
      icon: Code,
    },
    {
      name: "MongoDB",
      icon: Database,
    },
    {
      name: "DSA",
      icon: Brain,
    },
    {
      name: "DBMS",
      icon: Database,
    },
    {
      name: "OOPs",
      icon: BookOpen,
    },
    {
      name: "HR Questions",
      icon: Users,
    },
  ];


  // ==========================================
  // START PREPARATION
  // ==========================================

  const startPreparation = async () => {
    if (!selectedRole) {
      alert("Please select your target role");
      return;
    }

    if (!selectedType) {
      alert("Please select interview type");
      return;
    }

    if (!selectedTopic) {
      alert("Please select a topic");
      return;
    }

    setLoading(true);

    try {
      const response = await api.get(
        "/interview-prep/questions",
        {
          params: {
            role: selectedRole,
            interviewType: selectedType,
            topic: selectedTopic,
          },
        }
      );

      setQuestions(
        response.data.questions || []
      );

      setCurrentQuestion(0);

      setShowAnswer(false);

      setStarted(true);

    } catch (error) {
      console.error(
        "Interview Preparation Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to load interview questions"
      );

    } finally {
      setLoading(false);
    }
  };


  // ==========================================
  // NEXT QUESTION
  // ==========================================

  const handleNextQuestion = () => {
    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setShowAnswer(false);
    }
  };


  // ==========================================
  // PREVIOUS QUESTION
  // ==========================================

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );

      setShowAnswer(false);
    }
  };


  // ==========================================
  // RESTART PREPARATION
  // ==========================================

  const restartPreparation = () => {
    setQuestions([]);

    setCurrentQuestion(0);

    setShowAnswer(false);

    setStarted(false);
  };


  // ==========================================
  // CURRENT QUESTION
  // ==========================================

  const currentQuestionData =
    questions[currentQuestion];


  // ==========================================
  // PROGRESS
  // ==========================================

  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) /
          questions.length) *
        100
      : 0;


  return (
    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-6xl mx-auto">


        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-slate-900">
            Interview Preparation
          </h1>

          <p className="text-slate-500 mt-2">
            Prepare for your next interview with
            role-based questions and important
            interview topics.
          </p>

        </div>


        {/* ================================= */}
        {/* SELECTION SECTION */}
        {/* ================================= */}

        {!started && (

          <>

            {/* ROLE */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">

              <h2 className="text-xl font-semibold text-slate-900">
                1. Select Your Target Role
              </h2>

              <p className="text-slate-500 mt-2">
                Choose the role you are preparing for.
              </p>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                {roles.map((role) => (

                  <button
                    key={role}
                    onClick={() =>
                      setSelectedRole(role)
                    }
                    className={`p-4 rounded-xl border text-left transition ${
                      selectedRole === role
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                    }`}
                  >

                    <p className="font-medium">
                      {role}
                    </p>

                  </button>

                ))}

              </div>

            </div>


            {/* INTERVIEW TYPE */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">

              <h2 className="text-xl font-semibold text-slate-900">
                2. Select Interview Type
              </h2>

              <p className="text-slate-500 mt-2">
                Choose the type of interview you want
                to prepare for.
              </p>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                {interviewTypes.map((type) => (

                  <button
                    key={type}
                    onClick={() =>
                      setSelectedType(type)
                    }
                    className={`p-4 rounded-xl border text-left transition ${
                      selectedType === type
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                    }`}
                  >

                    <p className="font-medium">
                      {type}
                    </p>

                  </button>

                ))}

              </div>

            </div>


            {/* TOPICS */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <h2 className="text-xl font-semibold text-slate-900">
                3. Choose a Preparation Topic
              </h2>

              <p className="text-slate-500 mt-2">
                Select a topic to start practicing.
              </p>


              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                {topics.map((topic) => {

                  const Icon = topic.icon;

                  return (

                    <button
                      key={topic.name}
                      onClick={() =>
                        setSelectedTopic(
                          topic.name
                        )
                      }
                      className={`p-5 rounded-xl border transition ${
                        selectedTopic ===
                        topic.name
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                      }`}
                    >

                      <Icon
                        size={28}
                        className="mb-3"
                      />

                      <p className="font-medium">
                        {topic.name}
                      </p>

                    </button>

                  );
                })}

              </div>

            </div>


            {/* ================================= */}
            {/* SELECTION SUMMARY */}
            {/* ================================= */}

            {(selectedRole ||
              selectedType ||
              selectedTopic) && (

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">

                <h2 className="text-lg font-semibold text-blue-900">
                  Your Preparation Plan
                </h2>


                <div className="mt-4 space-y-2">

                  <p className="text-blue-800">
                    <strong>
                      Role:
                    </strong>{" "}
                    {selectedRole ||
                      "Not selected"}
                  </p>


                  <p className="text-blue-800">
                    <strong>
                      Interview Type:
                    </strong>{" "}
                    {selectedType ||
                      "Not selected"}
                  </p>


                  <p className="text-blue-800">
                    <strong>
                      Topic:
                    </strong>{" "}
                    {selectedTopic ||
                      "Not selected"}
                  </p>

                </div>


                {selectedRole &&
                  selectedType &&
                  selectedTopic && (

                    <>

                      <div className="mt-5 flex items-center gap-2 text-green-700">

                        <CheckCircle size={20} />

                        <span className="font-medium">
                          Your preparation preferences
                          are ready!
                        </span>

                      </div>


                      {/* START BUTTON */}

                      <button
                        onClick={
                          startPreparation
                        }
                        disabled={loading}
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg font-medium transition"
                      >

                        {loading
                          ? "Loading Questions..."
                          : "Start Preparation"}

                      </button>

                    </>

                  )}

              </div>

            )}

          </>

        )}


        {/* ================================= */}
        {/* QUESTION SECTION */}
        {/* ================================= */}

        {started &&
          currentQuestionData && (

          <div className="space-y-6">


            {/* INTERVIEW INFO */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                  <p className="text-sm text-slate-500">
                    Interview Preparation
                  </p>

                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    {selectedRole}
                  </h2>

                </div>


                <div className="text-right">

                  <p className="text-sm text-slate-500">
                    {selectedType}
                  </p>

                  <p className="font-semibold text-blue-600">
                    {selectedTopic}
                  </p>

                </div>

              </div>

            </div>


            {/* PROGRESS */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <div className="flex justify-between mb-3">

                <p className="text-sm font-medium text-slate-700">
                  Question{" "}
                  {currentQuestion + 1}{" "}
                  of{" "}
                  {questions.length}
                </p>

                <p className="text-sm font-medium text-blue-600">
                  {Math.round(progress)}%
                </p>

              </div>


              <div className="w-full bg-slate-200 rounded-full h-3">

                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>


            {/* QUESTION CARD */}

            <div className="bg-white border border-slate-200 rounded-2xl p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Question{" "}
                  {currentQuestion + 1}
                </span>


                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentQuestionData.difficulty ===
                    "Easy"
                      ? "bg-green-100 text-green-700"
                      : currentQuestionData.difficulty ===
                        "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {currentQuestionData.difficulty}
                </span>

              </div>


              {/* QUESTION */}

              <h2 className="text-2xl font-bold text-slate-900 mt-6 leading-relaxed">

                {currentQuestionData.question}

              </h2>


              {/* SHOW ANSWER */}

              {!showAnswer && (

                <button
                  onClick={() =>
                    setShowAnswer(true)
                  }
                  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Show Answer
                </button>

              )}


              {/* ANSWER */}

              {showAnswer && (

                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">

                  <h3 className="text-lg font-semibold text-green-800">

                    Answer

                  </h3>


                  <p className="text-slate-700 mt-3 leading-relaxed">

                    {currentQuestionData.answer}

                  </p>

                </div>

              )}


              {/* NAVIGATION */}

              {showAnswer && (

                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  {/* PREVIOUS */}

                  <button
                    onClick={
                      handlePreviousQuestion
                    }
                    disabled={
                      currentQuestion === 0
                    }
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >

                    <ChevronLeft size={20} />

                    Previous

                  </button>


                  {/* NEXT */}

                  {currentQuestion <
                  questions.length - 1 ? (

                    <button
                      onClick={
                        handleNextQuestion
                      }
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition sm:ml-auto"
                    >

                      Next Question

                      <ChevronRight
                        size={20}
                      />

                    </button>

                  ) : (

                    <button
                      onClick={
                        restartPreparation
                      }
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition sm:ml-auto"
                    >

                      <RotateCcw
                        size={20}
                      />

                      Finish Preparation

                    </button>

                  )}

                </div>

              )}

            </div>


            {/* BACK TO SELECTION */}

            <button
              onClick={
                restartPreparation
              }
              className="text-slate-500 hover:text-blue-600 text-sm font-medium transition"
            >

              ← Choose Different Preparation

            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default InterviewPreparation;