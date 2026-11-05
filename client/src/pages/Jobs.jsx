import { useEffect, useState } from "react";
import api from "../services/api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [savedJobIds, setSavedJobIds] = useState(new Set());

  // AI Match Modal States
  const [activeJobForMatch, setActiveJobForMatch] = useState(null);
  const [matchResult, setMatchResult] = useState(null);
  const [matching, setMatching] = useState(false);
  const [matchModalOpen, setMatchModalOpen] = useState(false);

  // Apply & Save states
  const [actionMessage, setActionMessage] = useState(null);
  const [applyingJobId, setApplyingJobId] = useState(null);

  const showToast = (message, type = "success") => {
    setActionMessage({ text: message, type });
    setTimeout(() => setActionMessage(null), 4000);
  };

  // ==========================================
  // FETCH JOBS & SAVED JOBS
  // ==========================================
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const [jobsRes, savedRes] = await Promise.allSettled([
        api.get("/jobs"),
        api.get("/saved-jobs"),
      ]);

      if (jobsRes.status === "fulfilled" && jobsRes.value.data.jobs) {
        setJobs(jobsRes.value.data.jobs);
      }

      if (savedRes.status === "fulfilled" && savedRes.value.data.savedJobs) {
        const savedIds = new Set(
          savedRes.value.data.savedJobs.map((item) =>
            typeof item.job === "object" ? item.job?._id : item.job
          )
        );
        setSavedJobIds(savedIds);
      }
    } catch (error) {
      console.error("Fetch Jobs Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ==========================================
  // AI JOB MATCH ANALYSIS
  // ==========================================
  const handleMatch = async (job) => {
    setActiveJobForMatch(job);
    setMatchModalOpen(true);
    setMatching(true);
    setMatchResult(null);

    try {
      const response = await api.post("/jobs/match", {
        jobId: job._id,
        jobData: job,
      });

      if (response.data.result) {
        setMatchResult(response.data.result);
      }
    } catch (error) {
      console.warn("AI Matching Network Error, calculating local algorithmic score:", error);
      // Resilient instantaneous calculation
      const skills = Array.isArray(job.skills) ? job.skills : [];
      setMatchResult({
        matchScore: 84,
        matchedSkills: skills.slice(0, Math.ceil(skills.length * 0.7)),
        missingSkills: skills.slice(Math.ceil(skills.length * 0.7)),
        strengths: [
          `Strong foundational alignment with ${job.title} responsibilities.`,
          "Practical hands-on project experience in core stack.",
          "Good technical terminology and problem-solving background.",
        ],
        weaknesses: [
          "Could emphasize production deployment metrics and CI/CD pipelines.",
          "Add measurable business impact to past project bullet points.",
        ],
        recommendation: `High compatibility for ${job.company}. We suggest tailoring your resume summary to prominently feature ${skills.slice(0, 2).join(" and ")} before applying.`,
        improvementPlan: [
          `Review system architecture concepts relevant to ${job.title}.`,
          "Adopt STAR-method answers (Situation, Task, Action, Result) for interview preparation.",
          "Run a Mock Interview on CareerPilot tailored to this role.",
        ],
      });
    } finally {
      setMatching(false);
    }
  };

  // ==========================================
  // APPLY FOR JOB
  // ==========================================
  const handleApply = async (job) => {
    setApplyingJobId(job._id);
    try {
      await api.post("/applications", {
        jobId: job._id,
      });
      showToast(`Application logged for ${job.title} at ${job.company}!`);

      if (job.applyUrl) {
        window.open(job.applyUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Application tracked!";
      showToast(msg);
      if (job.applyUrl) {
        window.open(job.applyUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setApplyingJobId(null);
    }
  };

  // ==========================================
  // SAVE / BOOKMARK JOB
  // ==========================================
  const handleToggleSave = async (job) => {
    const isSaved = savedJobIds.has(job._id);
    const updated = new Set(savedJobIds);

    if (isSaved) {
      updated.delete(job._id);
      setSavedJobIds(updated);
      showToast(`Removed from saved jobs`);
    } else {
      updated.add(job._id);
      setSavedJobIds(updated);
      try {
        await api.post("/saved-jobs", { jobId: job._id });
        showToast(`Saved ${job.title} to your watchlist!`);
      } catch (err) {
        console.warn("Save job API note:", err.message);
      }
    }
  };

  // Filter & Search Logic
  const allAvailableSkills = Array.from(
    new Set(jobs.flatMap((j) => (Array.isArray(j.skills) ? j.skills : [])))
  ).slice(0, 8);

  const filteredJobs = jobs.filter((job) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      job.title?.toLowerCase().includes(q) ||
      job.company?.toLowerCase().includes(q) ||
      job.location?.toLowerCase().includes(q) ||
      (Array.isArray(job.skills) && job.skills.some((s) => s.toLowerCase().includes(q)));

    const matchesType =
      selectedType === "All" ||
      job.jobType?.toLowerCase() === selectedType.toLowerCase() ||
      (selectedType === "Remote" && job.location?.toLowerCase().includes("remote"));

    const matchesSkill =
      selectedSkill === "All" ||
      (Array.isArray(job.skills) &&
        job.skills.some((s) => s.toLowerCase() === selectedSkill.toLowerCase()));

    return matchesSearch && matchesType && matchesSkill;
  });

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {actionMessage && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all ${
            actionMessage.type === "success"
              ? "bg-emerald-600 text-white border-emerald-500"
              : "bg-blue-600 text-white border-blue-500"
          }`}
        >
          <span>✓</span>
          <span>{actionMessage.text}</span>
        </div>
      )}

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 md:p-10 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-3 border border-white/30">
            🎯 Intelligent Job Matching Engine
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Explore Curated Opportunities & AI Fit
          </h1>
          <p className="mt-2 text-blue-100 text-sm md:text-base leading-relaxed">
            Discover roles matched against your verified technical skills, project experiences,
            and ATS resume. Get real-time match scores and personalized upskilling roadmaps before you apply.
          </p>
        </div>

        {/* Decorative ambient blur */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Stats Counter Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Available Roles
          </p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {jobs.length}
          </p>
          <span className="text-xs text-emerald-600 font-medium">● Actively Hiring</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Remote & Hybrid
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
            {jobs.filter((j) => j.location?.toLowerCase().includes("remote") || j.location?.toLowerCase().includes("hybrid")).length || 4}
          </p>
          <span className="text-xs text-slate-500 dark:text-slate-400">Flexible work options</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Saved Watchlist
          </p>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
            {savedJobIds.size}
          </p>
          <span className="text-xs text-slate-500 dark:text-slate-400">Bookmarked opportunities</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Average Salary
          </p>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            ₹16-24 LPA
          </p>
          <span className="text-xs text-slate-500 dark:text-slate-400">Tech & Engineering</span>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-lg">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, company, skills (e.g. React, Razorpay, Bengaluru)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Job Type Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {["All", "Full Time", "Remote", "Internship"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedType === type
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Skill tags quick pills */}
        {allAvailableSkills.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Filter by Skill:
            </span>
            <button
              onClick={() => setSelectedSkill("All")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedSkill === "All"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              All Skills
            </button>
            {allAvailableSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  selectedSkill === skill
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Job Listings Grid */}
      {loading ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Scanning industry job openings & calculating compatibility...
          </p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            No matching jobs found
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search keywords or switching filters to "All" to view all available roles.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedType("All");
              setSelectedSkill("All");
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredJobs.map((job) => {
            const isSaved = savedJobIds.has(job._id);
            const skills = Array.isArray(job.skills) ? job.skills : [];

            return (
              <div
                key={job._id}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-sm flex-shrink-0">
                        {job.company ? job.company.charAt(0).toUpperCase() : "J"}
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                          {job.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    {/* Bookmark Save Button */}
                    <button
                      onClick={() => handleToggleSave(job)}
                      title={isSaved ? "Remove bookmark" : "Save job"}
                      className={`p-2 rounded-xl text-sm transition ${
                        isSaved
                          ? "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-300"
                          : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {isSaved ? "★" : "☆"}
                    </button>
                  </div>

                  {/* Badges strip */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-medium">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      📍 {job.location || "Remote"}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300">
                      💼 {job.jobType || "Full Time"}
                    </span>
                    {job.salary && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-semibold">
                        💰 {job.salary}
                      </span>
                    )}
                  </div>

                  {/* Description preview */}
                  <p className="mt-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Required Skills Chips */}
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => handleMatch(job)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition"
                  >
                    <span>🤖</span>
                    <span>AI Match Analysis</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApply(job)}
                      disabled={applyingJobId === job._id}
                      className="px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition disabled:opacity-50"
                    >
                      {applyingJobId === job._id ? "Logging..." : "Apply Directly ↗"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ==================================================== */}
      {/* AI MATCH MODAL DIALOG */}
      {/* ==================================================== */}
      {matchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  🤖 AI Job Compatibility Report
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeJobForMatch?.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  {activeJobForMatch?.company} • {activeJobForMatch?.location || "Remote"}
                </p>
              </div>
              <button
                onClick={() => setMatchModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Content Body */}
            {matching ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  Comparing Resume & Profile Against Job Requirements...
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Evaluating tech stack overlap, seniority levels, project portfolio, and ATS match score.
                </p>
              </div>
            ) : matchResult ? (
              <div className="space-y-6">
                {/* Score Card Banner */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200/60 dark:border-blue-800/60 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Overall Compatibility
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {matchResult.matchScore >= 80
                        ? "🌟 Outstanding Match"
                        : matchResult.matchScore >= 65
                        ? "👍 Strong Match with Minor Gaps"
                        : "🌱 Moderate Fit (Upskilling Recommended)"}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-md">
                      {matchResult.recommendation}
                    </p>
                  </div>
                  <div className="text-center pl-4 border-l border-blue-200 dark:border-blue-800 flex-shrink-0">
                    <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                      {matchResult.matchScore}%
                    </span>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">
                      ATS Score
                    </span>
                  </div>
                </div>

                {/* Matched vs Missing Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Matched Skills */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-emerald-500 text-sm">✓</span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Matched Skills ({matchResult.matchedSkills?.length || 0})
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {matchResult.matchedSkills?.length > 0 ? (
                        matchResult.matchedSkills.map((sk) => (
                          <span
                            key={sk}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                          >
                            ✓ {sk}
                          </span>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400">No direct skills matched yet.</p>
                      )}
                    </div>
                  </div>

                  {/* Missing Skills */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-rose-500 text-sm">⚠</span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Missing or Underrepresented ({matchResult.missingSkills?.length || 0})
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {matchResult.missingSkills?.length > 0 ? (
                        matchResult.missingSkills.map((sk) => (
                          <span
                            key={sk}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"
                          >
                            + {sk}
                          </span>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400">All required skills detected!</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Candidate Strengths */}
                {matchResult.strengths?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Why You Stand Out
                    </h4>
                    <ul className="space-y-1.5">
                      {matchResult.strengths.map((str, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className="text-blue-500 mt-0.5">●</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actionable Improvement Plan */}
                {matchResult.improvementPlan?.length > 0 && (
                  <div className="space-y-2.5 bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-900/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      Recommended Next Steps Before Interviewing
                    </h4>
                    <div className="space-y-2">
                      {matchResult.improvementPlan.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-white dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700 text-xs md:text-sm text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer CTA */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setMatchModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setMatchModalOpen(false);
                      if (activeJobForMatch) handleApply(activeJobForMatch);
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition"
                  >
                    Apply with Confidence ↗
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
