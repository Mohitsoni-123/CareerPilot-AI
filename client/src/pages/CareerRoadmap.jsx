import { useEffect, useState } from "react";
import api from "../services/api";

const PRESET_ROLES = [
  { role: "Full Stack Developer (MERN)", level: "Intermediate", skills: "JavaScript, React, Node.js, Express, MongoDB, Git" },
  { role: "Frontend React Engineer", level: "Beginner", skills: "HTML, CSS, JavaScript, React basics" },
  { role: "Backend & Cloud Engineer", level: "Intermediate", skills: "Node.js, Express, MongoDB, SQL, REST APIs" },
  { role: "AI & Machine Learning Engineer", level: "Beginner", skills: "Python, NumPy, Pandas, Data Structures" },
  { role: "DevOps & Cloud Architect", level: "Intermediate", skills: "Linux, Docker, Git, Networking, Bash" },
];

const CareerRoadmap = () => {
  const [targetRole, setTargetRole] = useState("");
  const [currentLevel, setCurrentLevel] = useState("Intermediate");
  const [currentSkills, setCurrentSkills] = useState("");

  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [createError, setCreateError] = useState("");
  const [autoFilling, setAutoFilling] = useState(false);

  // =====================================
  // FETCH LATEST ROADMAP
  // =====================================
  const fetchRoadmap = async () => {
    try {
      setFetching(true);
      const response = await api.get("/career-roadmap");
      const roadmaps = response.data.careerRoadmaps || [];
      if (roadmaps.length > 0) {
        setRoadmap(roadmaps[0]);
      }
    } catch (error) {
      console.error("Fetch Career Roadmap Error:", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, []);

  // Auto-fill from User Profile
  const handleAutoFillProfile = async () => {
    try {
      setAutoFilling(true);
      const res = await api.get("/users/profile");
      const user = res.data.user;
      if (user && user.skills && user.skills.length > 0) {
        setCurrentSkills(user.skills.join(", "));
      }
      if (!targetRole && user?.name) {
        setTargetRole("Full Stack Developer");
      }
    } catch (err) {
      console.warn("Could not autofill from profile:", err.message);
    } finally {
      setAutoFilling(false);
    }
  };

  // =====================================
  // CREATE ROADMAP
  // =====================================
  const createRoadmap = async (e) => {
    if (e) e.preventDefault();

    if (!targetRole.trim()) {
      alert("Please enter or select a target career role");
      return;
    }

    setLoading(true);
    setCreateError("");

    try {
      const response = await api.post("/career-roadmap", {
        targetRole,
        currentLevel,
        currentSkills: currentSkills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      if (response.data.careerRoadmap) {
        setRoadmap(response.data.careerRoadmap);
      }
    } catch (error) {
      console.error("Create Career Roadmap Error:", error);
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to create career roadmap. Please try again.";
      setCreateError(message);
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // UPDATE PHASE PROGRESS
  // =====================================
  const updatePhase = async (phaseIndex, completed) => {
    if (!roadmap?._id) return;

    // Optimistic UI update
    const updatedRoadmap = { ...roadmap };
    const phases = [...(updatedRoadmap.roadmap || [])];
    phases[phaseIndex] = { ...phases[phaseIndex], completed };
    updatedRoadmap.roadmap = phases;

    const completedCount = phases.filter((p) => p.completed).length;
    updatedRoadmap.overallProgress = Math.round((completedCount / phases.length) * 100);
    updatedRoadmap.status =
      updatedRoadmap.overallProgress === 100
        ? "Completed"
        : updatedRoadmap.overallProgress > 0
        ? "In Progress"
        : "Not Started";

    setRoadmap(updatedRoadmap);

    try {
      const response = await api.put(`/career-roadmap/${roadmap._id}/phase`, {
        phaseIndex,
        completed,
      });

      if (response.data.careerRoadmap) {
        setRoadmap(response.data.careerRoadmap);
      }
    } catch (error) {
      console.error("Update Roadmap Phase Error:", error);
    }
  };

  // =====================================
  // DELETE ROADMAP
  // =====================================
  const deleteRoadmap = async () => {
    if (!roadmap?._id) return;

    const confirmed = window.confirm(
      "Are you sure you want to reset this roadmap and create a new one?"
    );
    if (!confirmed) return;

    try {
      await api.delete(`/career-roadmap/${roadmap._id}`);
      setRoadmap(null);
    } catch (error) {
      console.error("Delete Roadmap Error:", error);
      // Still reset locally if deleted
      setRoadmap(null);
    }
  };

  // Apply Preset
  const handleSelectPreset = (preset) => {
    setTargetRole(preset.role);
    setCurrentLevel(preset.level);
    setCurrentSkills(preset.skills);
  };

  if (fetching) {
    return (
      <div className="p-6 md:p-10 space-y-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            Loading your personalized career roadmap...
          </p>
        </div>
      </div>
    );
  }

  // =====================================
  // SCREEN A: CREATE ROADMAP
  // =====================================
  if (!roadmap) {
    return (
      <div className="p-4 md:p-8 space-y-6 max-w-5xl mx-auto">
        {/* Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-3 border border-white/30">
              🗺️ Personalized AI Curriculum
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Design Your Step-by-Step Career Roadmap
            </h1>
            <p className="mt-2 text-blue-100 text-sm md:text-base leading-relaxed">
              Tell our AI mentor your target career aspiration. CareerPilot will generate a customized,
              phase-by-phase learning journey complete with core skills, milestone projects, and timeline estimates.
            </p>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Roadmap Generator Form */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
          {loading ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Architecting Your Career Roadmap...
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Synthesizing modern tech standards, designing portfolio projects, and sequencing learning phases for{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">{targetRole}</span>.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Presets Strip */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Popular Role Blueprints (1-Click Fill)
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_ROLES.map((preset) => (
                    <button
                      key={preset.role}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition"
                    >
                      {preset.role}
                    </button>
                  ))}
                </div>
              </div>

              {createError && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                  {createError}
                </div>
              )}

              <form onSubmit={createRoadmap} className="space-y-5">
                {/* Target Role */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Target Engineering / Tech Role
                  </label>
                  <input
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="e.g. Full Stack Developer, DevOps Engineer, AI Specialist"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Current Experience Level */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Current Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "Beginner", label: "Beginner", desc: "Starting fundamentals" },
                      { id: "Intermediate", label: "Intermediate", desc: "1-2 yrs / Core basics" },
                      { id: "Advanced", label: "Advanced", desc: "Experienced developer" },
                    ].map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setCurrentLevel(lvl.id)}
                        className={`p-3 rounded-xl border text-left transition ${
                          currentLevel === lvl.id
                            ? "border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                        }`}
                      >
                        <p className="text-sm font-bold">{lvl.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{lvl.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Skills with Auto Fill */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Current Skills & Tools (Comma separated)
                    </label>
                    <button
                      type="button"
                      onClick={handleAutoFillProfile}
                      disabled={autoFilling}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      {autoFilling ? "Loading..." : "⚡ Auto-fill from My Profile"}
                    </button>
                  </div>
                  <textarea
                    value={currentSkills}
                    onChange={(e) => setCurrentSkills(e.target.value)}
                    placeholder="e.g. JavaScript, React, Node.js, HTML, CSS, Git"
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all"
                >
                  🚀 Generate AI Career Roadmap
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =====================================
  // SCREEN B: ACTIVE ROADMAP TIMELINE
  // =====================================
  const phases = Array.isArray(roadmap.roadmap) ? roadmap.roadmap : [];
  const completedPhasesCount = phases.filter((p) => p.completed).length;

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Top Bar Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            🗺️ Career Master Plan
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {roadmap.targetRole}
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Targeting {roadmap.targetRole} • Starting from {roadmap.currentLevel} Level
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition"
          >
            🖨️ Export Plan
          </button>
          <button
            onClick={deleteRoadmap}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition"
          >
            Reset / New Goal
          </button>
        </div>
      </div>

      {/* Progress & Overview Dashboard Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Progress Percent Circle / Card */}
          <div className="md:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200/60 dark:border-blue-800/60 rounded-2xl p-5 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Mastery Progress
            </span>
            <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 my-1">
              {roadmap.overallProgress || 0}%
            </div>
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                roadmap.overallProgress === 100
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                  : roadmap.overallProgress > 0
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {roadmap.status || "Not Started"}
            </span>
          </div>

          {/* Details & Bar */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Curriculum Progress ({completedPhasesCount} of {phases.length} Phases Completed)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Check off phases as you complete their skills and projects to advance your milestone ranking.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full">
                ⏱️ Est. Total: 16-20 Weeks
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
              <div
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(5, roadmap.overallProgress || 0)}%` }}
              />
            </div>

            {/* Current Skills chips */}
            {roadmap.currentSkills?.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
                <span className="font-semibold text-slate-500 dark:text-slate-400">
                  Starting Skills:
                </span>
                {roadmap.currentSkills.map((sk, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 md:pl-8 space-y-8 before:absolute before:left-3 md:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-slate-300 dark:before:to-slate-700">
        {phases.map((phase, index) => {
          const isDone = phase.completed;

          return (
            <div key={index} className="relative group">
              {/* Timeline Node Circle */}
              <button
                onClick={() => updatePhase(index, !isDone)}
                title={isDone ? "Mark incomplete" : "Mark phase complete"}
                className={`absolute -left-6 md:-left-8 top-5 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-md ${
                  isDone
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-100 dark:ring-emerald-950"
                    : "bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 ring-4 ring-blue-50 dark:ring-blue-950/40 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {isDone ? "✓" : index + 1}
              </button>

              {/* Phase Card */}
              <div
                className={`bg-white dark:bg-slate-900 border rounded-3xl p-5 md:p-6 shadow-sm transition-all ${
                  isDone
                    ? "border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/20 dark:bg-emerald-950/10"
                    : "border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600"
                }`}
              >
                {/* Phase Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {phase.phase || `Phase ${index + 1}`}
                      </span>
                      {isDone && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          Completed ✓
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {phase.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap self-start">
                    ⏱️ {phase.duration || "3-4 Weeks"}
                  </span>
                </div>

                {/* Skills Grid */}
                {phase.skills?.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Key Competencies & Concepts
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommended Projects */}
                {phase.projects?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Hands-on Portfolio Milestones
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {phase.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-start gap-2.5"
                        >
                          <span className="text-base text-blue-500">🛠️</span>
                          <div>
                            <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                              {typeof proj === "string" ? proj : proj.name || "Portfolio Project"}
                            </p>
                            {typeof proj === "object" && proj.description && (
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                {proj.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mark Phase Toggle Button */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {isDone ? "Milestone finished! Keep advancing." : "Finished this phase's goals?"}
                  </span>
                  <button
                    onClick={() => updatePhase(index, !isDone)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      isDone
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white"
                    }`}
                  >
                    {isDone ? "Mark Incomplete" : "Mark as Completed ✓"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerRoadmap;
