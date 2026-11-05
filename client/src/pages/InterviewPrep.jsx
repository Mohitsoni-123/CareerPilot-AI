import { useState, useEffect } from "react";
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
  Search,
  Sparkles,
  Eye,
  EyeOff,
  Award,
  Layers,
  ArrowRight,
} from "lucide-react";
import api from "../services/api";

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
  "Data Analyst",
];

const INTERVIEW_TYPES = [
  "Technical Interview",
  "HR Interview",
  "Behavioral Interview",
];

const TOPICS = [
  { name: "JavaScript", icon: Code },
  { name: "React.js", icon: Globe },
  { name: "Node.js", icon: Code },
  { name: "MongoDB", icon: Database },
  { name: "DSA", icon: Brain },
  { name: "DBMS", icon: Database },
  { name: "OOPs", icon: BookOpen },
  { name: "HR Questions", icon: Users },
];

const InterviewPrep = () => {
  const [selectedRole, setSelectedRole] = useState("Full Stack Developer");
  const [selectedType, setSelectedType] = useState("Technical Interview");
  const [selectedTopic, setSelectedTopic] = useState("JavaScript");

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeView, setActiveView] = useState("cards"); // "cards" (flashcard) or "list" (accordion)

  // Flashcard mode state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [bookmarked, setBookmarked] = useState([]);

  // Fetch Questions
  const fetchQuestions = async () => {
    setLoading(true);
    setShowAnswer(false);
    setCurrentIndex(0);

    try {
      const response = await api.get("/interview-prep/questions", {
        params: {
          role: selectedRole,
          interviewType: selectedType,
          topic: selectedTopic,
        },
      });

      setQuestions(response.data.questions || []);
    } catch (error) {
      console.error("Fetch Questions Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [selectedRole, selectedType, selectedTopic]);

  const filteredQuestions = questions.filter((q) =>
    (q.question || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (q.answer || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentQ = filteredQuestions[currentIndex] || questions[0];

  const toggleBookmark = (idx) => {
    setBookmarked((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5" /> Curated Question Bank & Flashcards
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Technical & HR Interview Preparation
        </h1>
        <p className="text-slate-600 mt-2 text-sm md:text-base">
          Master foundational to advanced interview concepts categorized by engineering role and subject.
        </p>
      </div>

      {/* Role & Interview Type Selectors */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
            1. Select Target Engineering Role:
          </span>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition ${
                  selectedRole === role
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
            2. Select Interview Category:
          </span>
          <div className="flex flex-wrap gap-2">
            {INTERVIEW_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition ${
                  selectedType === type
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topic Selection Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {TOPICS.map((topic) => {
          const Icon = topic.icon;
          const isActive = selectedTopic === topic.name;

          return (
            <button
              key={topic.name}
              onClick={() => setSelectedTopic(topic.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border shrink-0 transition ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{topic.name}</span>
            </button>
          );
        })}
      </div>

      {/* View Toggle & Search Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${selectedTopic} questions...`}
            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <span className="text-xs font-bold text-slate-500">
            {filteredQuestions.length} Questions Loaded
          </span>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveView("cards")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeView === "cards"
                  ? "bg-white shadow text-blue-600"
                  : "text-slate-600"
              }`}
            >
              Flashcard Mode
            </button>
            <button
              onClick={() => setActiveView("list")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeView === "list"
                  ? "bg-white shadow text-blue-600"
                  : "text-slate-600"
              }`}
            >
              All Questions List
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* VIEW 1: INTERACTIVE FLASHCARD MODE */}
      {/* ================================================= */}
      {activeView === "cards" && (
        <div className="space-y-6">
          {loading ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-slate-200">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-slate-500 text-sm">Loading interview questions...</p>
            </div>
          ) : currentQ ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6 relative">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                  Question #{currentIndex + 1} of {filteredQuestions.length}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      currentQ.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : currentQ.difficulty === "Hard"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {currentQ.difficulty || "Medium"} Level
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                "{currentQ.question}"
              </h2>

              {/* Reveal Answer Box */}
              <div className="pt-4">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 transition"
                >
                  {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showAnswer ? "Hide Ideal Answer" : "Reveal Ideal Candidate Answer"}
                </button>

                {showAnswer && (
                  <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 text-slate-800 text-sm md:text-base leading-relaxed animate-in fade-in duration-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> High-Impact Model Answer:
                    </span>
                    {currentQ.answer}
                  </div>
                )}
              </div>

              {/* Card Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => {
                    setCurrentIndex((prev) => Math.max(0, prev - 1));
                    setShowAnswer(false);
                  }}
                  className="px-4 py-2 border rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1 hover:bg-slate-50 transition"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <button
                  onClick={() => {
                    setCurrentIndex(0);
                    setShowAnswer(false);
                  }}
                  className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restart Deck
                </button>

                <button
                  disabled={currentIndex >= filteredQuestions.length - 1}
                  onClick={() => {
                    setCurrentIndex((prev) =>
                      Math.min(filteredQuestions.length - 1, prev + 1)
                    );
                    setShowAnswer(false);
                  }}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1 shadow transition"
                >
                  Next Question <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-400">
              No questions found matching your filter.
            </div>
          )}
        </div>
      )}

      {/* ================================================= */}
      {/* VIEW 2: ALL QUESTIONS LIST ACCORDION */}
      {/* ================================================= */}
      {activeView === "list" && (
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    {q.question}
                  </h3>
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    q.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : q.difficulty === "Hard"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {q.difficulty || "Medium"}
                </span>
              </div>

              <div className="pl-10 text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-xs font-bold text-blue-700 block mb-1">
                  Answer Explanation:
                </span>
                {q.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;
