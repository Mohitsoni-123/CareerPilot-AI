import { useState, useEffect } from "react";
import {
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Target,
  Copy,
  Check,
  Briefcase,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import api from "../services/api";

const ResumeAnalyzer = () => {
  const [activeTab, setActiveTab] = useState("ats-scanner");

  // Tab 1: ATS Scanner State
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingLatest, setFetchingLatest] = useState(true);

  // Tab 2: Job Description Matcher State
  const [jdJobTitle, setJdJobTitle] = useState("");
  const [jdDescription, setJdDescription] = useState("");
  const [jdLoading, setJdLoading] = useState(false);
  const [jdMatchResult, setJdMatchResult] = useState(null);

  // Tab 3: Cover Letter State
  const [clCompany, setClCompany] = useState("");
  const [clRole, setClRole] = useState("");
  const [clDescription, setClDescription] = useState("");
  const [clTone, setClTone] = useState("Professional");
  const [clLoading, setClLoading] = useState(false);
  const [clResult, setClResult] = useState(null);
  const [copiedLetter, setCopiedLetter] = useState(false);
  const [copiedOutreach, setCopiedOutreach] = useState(false);

  // Fetch Latest Resume on mount
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await api.get("/resumes/latest");
        if (response.data.resume) {
          setAnalysis(response.data.resume);
        }
      } catch (err) {
        console.warn("No previous resume found or failed to fetch:", err);
      } finally {
        setFetchingLatest(false);
      }
    };
    fetchLatest();
  }, []);

  // Upload & Analyze Resume
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF resume file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    setLoading(true);

    try {
      const response = await api.post("/resumes/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAnalysis(response.data.resume);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Resume analysis failed");
    } finally {
      setLoading(false);
    }
  };

  // Match Resume with Job Description
  const handleMatchJD = async (e) => {
    e.preventDefault();
    if (!jdDescription.trim()) {
      alert("Please paste the job description");
      return;
    }

    setJdLoading(true);
    try {
      const response = await api.post("/resumes/match-jd", {
        jobTitle: jdJobTitle || "Target Role",
        jobDescription: jdDescription,
      });
      setJdMatchResult(response.data.match);
    } catch (error) {
      console.error("Match error:", error);
      alert(
        error.response?.data?.message ||
          "Please upload your resume in Tab 1 first to compare against this job description."
      );
    } finally {
      setJdLoading(false);
    }
  };

  // Generate Cover Letter
  const handleGenerateCoverLetter = async (e) => {
    e.preventDefault();
    if (!clRole.trim()) {
      alert("Please enter the job role");
      return;
    }

    setClLoading(true);
    try {
      const response = await api.post("/resumes/cover-letter", {
        companyName: clCompany,
        jobTitle: clRole,
        jobDescription: clDescription,
        tone: clTone,
      });
      setClResult(response.data.result);
    } catch (error) {
      console.error("Cover letter error:", error);
      alert(error.response?.data?.message || "Failed to generate cover letter");
    } finally {
      setClLoading(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "letter") {
      setCopiedLetter(true);
      setTimeout(() => setCopiedLetter(false), 2000);
    } else {
      setCopiedOutreach(true);
      setTimeout(() => setCopiedOutreach(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Resume Intelligence
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            ATS Resume Analyzer & Job Optimizer
          </h1>
          <p className="text-slate-600 mt-2 text-base">
            Score your resume against ATS algorithms, tailor bullet points to any job description, and generate personalized cover letters in seconds.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 gap-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("ats-scanner")}
            className={`pb-4 px-2 font-bold text-sm flex items-center gap-2 border-b-2 transition shrink-0 ${
              activeTab === "ats-scanner"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <FileText className="w-4 h-4" /> ATS Resume Scanner
          </button>

          <button
            onClick={() => setActiveTab("jd-matcher")}
            className={`pb-4 px-2 font-bold text-sm flex items-center gap-2 border-b-2 transition shrink-0 ${
              activeTab === "jd-matcher"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Target className="w-4 h-4" /> Job Description Matcher & Tailoring
          </button>

          <button
            onClick={() => setActiveTab("cover-letter")}
            className={`pb-4 px-2 font-bold text-sm flex items-center gap-2 border-b-2 transition shrink-0 ${
              activeTab === "cover-letter"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Sparkles className="w-4 h-4" /> Cover Letter & Outreach
          </button>
        </div>

        {/* ================================================= */}
        {/* TAB 1: ATS RESUME SCANNER */}
        {/* ================================================= */}
        {activeTab === "ats-scanner" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Upload Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-600" /> Upload Your Resume (PDF)
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Our parser reads your text, verifies formatting, and evaluates ATS compatibility.
              </p>

              <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full md:flex-1 border border-slate-300 p-3.5 rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />

                <button
                  onClick={handleUpload}
                  disabled={loading || !file}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-md flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Analyzing with AI..."
                  ) : (
                    <>
                      Analyze Resume <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Analysis Results */}
            {analysis ? (
              <div className="space-y-6">
                {/* Score & Summary Card */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Resume Scan Result
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3">
                      {analysis.fileName || "Uploaded Resume"}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {analysis.summary}
                    </p>
                  </div>

                  {/* ATS Score Gauge */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-center w-full md:w-56 shrink-0">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      ATS Score
                    </span>
                    <div className="text-6xl font-black text-blue-600 mt-2">
                      {analysis.atsScore}%
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-2">
                      {analysis.atsScore >= 80
                        ? "🎉 Highly competitive"
                        : analysis.atsScore >= 60
                        ? "👍 Decent, can be optimized"
                        : "⚠️ Needs key revisions"}
                    </p>
                  </div>
                </div>

                {/* 2-Column: Strengths & Weaknesses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-emerald-600" /> Key Strengths
                    </h4>
                    <ul className="space-y-3">
                      {analysis.strengths?.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-amber-500" /> Areas to Improve
                    </h4>
                    <ul className="space-y-3">
                      {analysis.weaknesses?.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Missing Skills & Suggestions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Missing Skills */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                      <Layers className="w-5 h-5 text-indigo-600" /> Recommended Keywords to Add
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.missingSkills?.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-full text-xs font-semibold"
                        >
                          + {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actionable Suggestions */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-yellow-500" /> Actionable Next Steps
                    </h4>
                    <ul className="space-y-3">
                      {analysis.suggestions?.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2.5">
                          <span className="text-yellow-600 font-bold shrink-0">👉</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : fetchingLatest ? (
              <p className="text-center text-slate-400 py-10">Loading previous resume analysis...</p>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No Resume Analyzed Yet</h3>
                <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
                  Upload your PDF resume above to reveal your ATS match score, strengths, and missing industry keywords.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ================================================= */}
        {/* TAB 2: JOB DESCRIPTION MATCHER & TAILORING */}
        {/* ================================================= */}
        {activeTab === "jd-matcher" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" /> Match Resume with a Job Description
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Paste any job description from LinkedIn, Indeed, or career portals. We'll score your fit and generate custom tailored bullet points!
              </p>

              <form onSubmit={handleMatchJD} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Job Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={jdJobTitle}
                    onChange={(e) => setJdJobTitle(e.target.value)}
                    placeholder="e.g. Senior Frontend Engineer"
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Job Description *
                  </label>
                  <textarea
                    value={jdDescription}
                    onChange={(e) => setJdDescription(e.target.value)}
                    rows={6}
                    placeholder="Paste the requirements, qualifications, and responsibilities here..."
                    className="w-full border border-slate-300 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none leading-relaxed"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={jdLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3.5 rounded-xl font-bold transition shadow flex items-center gap-2"
                >
                  {jdLoading ? "Matching with AI..." : "Compare & Optimize Resume →"}
                </button>
              </form>
            </div>

            {/* Match Results */}
            {jdMatchResult && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      Match Verdict: {jdMatchResult.verdict}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3">
                      Role Compatibility Assessment
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-2xl">
                      {jdMatchResult.summary}
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center w-full md:w-52 shrink-0">
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                      JD Match
                    </span>
                    <div className="text-5xl font-black text-purple-600 mt-2">
                      {jdMatchResult.matchPercentage}%
                    </div>
                  </div>
                </div>

                {/* Skills Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" /> Matched Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {jdMatchResult.matchedSkills?.map((s, i) => (
                        <span
                          key={i}
                          className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          ✓ {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500" /> Missing Critical Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {jdMatchResult.missingKeywords?.map((s, i) => (
                        <span
                          key={i}
                          className="bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          ! {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tailored Experience Bullet Points */}
                {jdMatchResult.tailoredBulletPoints?.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-blue-600" /> AI-Tailored Resume Bullet Points
                    </h4>
                    <p className="text-slate-500 text-sm mb-6">
                      Copy and paste these optimized bullet points into your resume to directly address what the recruiters are asking for:
                    </p>

                    <div className="space-y-3">
                      {jdMatchResult.tailoredBulletPoints.map((bullet, i) => (
                        <div
                          key={i}
                          className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between gap-4"
                        >
                          <p className="text-slate-800 text-sm leading-relaxed">
                            • {bullet}
                          </p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(bullet);
                              alert("Bullet copied to clipboard!");
                            }}
                            className="text-slate-400 hover:text-blue-600 shrink-0 p-1"
                            title="Copy Bullet"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ================================================= */}
        {/* TAB 3: COVER LETTER & OUTREACH */}
        {/* ================================================= */}
        {activeTab === "cover-letter" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" /> AI Cover Letter & LinkedIn Outreach Generator
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Generates a tailored, professional cover letter and a personalized LinkedIn cold message using your profile and the role details.
              </p>

              <form onSubmit={handleGenerateCoverLetter} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={clCompany}
                      onChange={(e) => setClCompany(e.target.value)}
                      placeholder="e.g. Google, Stripe, Startup"
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Target Role *
                    </label>
                    <input
                      type="text"
                      value={clRole}
                      onChange={(e) => setClRole(e.target.value)}
                      placeholder="e.g. Frontend Engineer"
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Tone of Voice
                    </label>
                    <select
                      value={clTone}
                      onChange={(e) => setClTone(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Professional">Professional & Polished</option>
                      <option value="Confident">Confident & Impactful</option>
                      <option value="Enthusiastic">Passionate & Enthusiastic</option>
                      <option value="Direct">Direct & Concise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Job Description / Key Requirements (Optional)
                  </label>
                  <textarea
                    value={clDescription}
                    onChange={(e) => setClDescription(e.target.value)}
                    rows={4}
                    placeholder="Paste job details or requirements to weave into the letter..."
                    className="w-full border border-slate-300 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={clLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3.5 rounded-xl font-bold transition shadow flex items-center gap-2"
                >
                  {clLoading ? "Generating Documents..." : "Generate Cover Letter & Message →"}
                </button>
              </form>
            </div>

            {/* Results */}
            {clResult && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Full Cover Letter (2 cols) */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" /> Tailored Cover Letter
                    </h3>
                    <button
                      onClick={() => copyToClipboard(clResult.coverLetter, "letter")}
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition"
                    >
                      {copiedLetter ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedLetter ? "Copied!" : "Copy Letter"}
                    </button>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                    {clResult.coverLetter}
                  </div>
                </div>

                {/* LinkedIn Outreach & Highlights (1 col) */}
                <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-900 text-sm">
                        LinkedIn / Cold Email Note
                      </h4>
                      <button
                        onClick={() => copyToClipboard(clResult.coldMessage, "outreach")}
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                      >
                        {copiedOutreach ? "Copied!" : "Copy Note"}
                      </button>
                    </div>
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-xs text-slate-700 leading-relaxed">
                      {clResult.coldMessage}
                    </div>
                  </div>

                  {clResult.keyHighlights?.length > 0 && (
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                      <h4 className="font-bold text-slate-900 text-sm mb-3">
                        Key Value Highlights
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {clResult.keyHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
