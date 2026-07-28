import { useEffect, useState } from "react";
import api from "../services/api";

const CareerRoadmap = () => {
  const [targetRole, setTargetRole] = useState("");
  const [currentLevel, setCurrentLevel] = useState("Beginner");
  const [currentSkills, setCurrentSkills] = useState("");

  const [roadmap, setRoadmap] = useState(null);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [createError, setCreateError] = useState("");

  // =====================================
  // FETCH LATEST ROADMAP
  // =====================================

  const fetchRoadmap = async () => {
    try {
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

  // =====================================
  // CREATE ROADMAP
  // =====================================

  const createRoadmap = async (e) => {
    e.preventDefault();

    if (!targetRole.trim()) {
      alert("Please enter your target role");
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

      setRoadmap(response.data.careerRoadmap);

      setTargetRole("");
      setCurrentSkills("");
    } catch (error) {
      console.error("Create Career Roadmap Error:", error);

      // Prefer the specific AI/service error if present, otherwise fall
      // back to the generic message.
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
  // UPDATE PHASE
  // =====================================

  const updatePhase = async (phaseIndex, completed) => {
    if (!roadmap?._id) return;

    try {
      const response = await api.put(`/career-roadmap/${roadmap._id}/phase`, {
        phaseIndex,
        completed,
      });

      setRoadmap(response.data.careerRoadmap);
    } catch (error) {
      console.error("Update Roadmap Phase Error:", error);

      alert(
        error.response?.data?.message || "Failed to update roadmap progress",
      );
    }
  };

  // =====================================
  // DELETE ROADMAP
  // =====================================

  const deleteRoadmap = async () => {
    if (!roadmap?._id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this roadmap?",
    );

    if (!confirmed) return;

    try {
      await api.delete(`/career-roadmap/${roadmap._id}`);

      setRoadmap(null);
    } catch (error) {
      console.error("Delete Roadmap Error:", error);

      alert(error.response?.data?.message || "Failed to delete roadmap");
    }
  };

  // =====================================
  // LOADING (initial fetch)
  // =====================================

  if (fetching) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border p-8 text-center">
            <p className="text-slate-500">Loading career roadmap...</p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // CREATE ROADMAP SCREEN
  // =====================================

  if (!roadmap) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Career Roadmap
            </h1>

            <p className="text-slate-500 mt-2">
              Create a personalized roadmap to reach your career goal.
            </p>
          </div>

          {/* Form */}

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            {loading ? (
              // ---------------------------------
              // AI GENERATING STATE
              // ---------------------------------
              <div className="text-center py-10">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" />

                <h2 className="text-lg font-semibold text-slate-900 mt-6">
                  Generating your personalized roadmap...
                </h2>

                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                  Our AI is building a step-by-step plan tailored to{" "}
                  <span className="font-medium text-slate-700">
                    {targetRole || "your goal"}
                  </span>
                  . This can take a few seconds, please don't close this page.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Create Your Career Roadmap
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Tell us about your career goal and current skills.
                  </p>
                </div>

                {createError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-6">
                    {createError}
                  </div>
                )}

                <form onSubmit={createRoadmap} className="space-y-6">
                  {/* Target Role */}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Target Career Role
                    </label>

                    <input
                      type="text"
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      placeholder="e.g. Full Stack Developer, DSA, Data Analyst"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Current Level */}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Level
                    </label>

                    <select
                      value={currentLevel}
                      onChange={(e) => setCurrentLevel(e.target.value)}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Beginner">Beginner</option>

                      <option value="Intermediate">Intermediate</option>

                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  {/* Current Skills */}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Skills
                    </label>

                    <textarea
                      value={currentSkills}
                      onChange={(e) => setCurrentSkills(e.target.value)}
                      placeholder="JavaScript, React, Node.js, MongoDB"
                      rows="4"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />

                    <p className="text-xs text-slate-500 mt-2">
                      Separate each skill with a comma.
                    </p>
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg font-medium transition"
                  >
                    Create Career Roadmap
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // ROADMAP SCREEN
  // =====================================

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Career Roadmap
            </h1>

            <p className="text-slate-500 mt-2">
              Your roadmap to become a{" "}
              <span className="font-medium text-slate-700">
                {roadmap.targetRole}
              </span>
            </p>
          </div>

          <button
            onClick={deleteRoadmap}
            className="border border-red-200 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg"
          >
            Delete Roadmap
          </button>
        </div>

        {/* Progress Card */}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-sm text-slate-500">Target Role</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                {roadmap.targetRole}
              </h2>

              <p className="text-slate-500 mt-2">
                Current Level:{" "}
                <span className="font-medium text-slate-700">
                  {roadmap.currentLevel}
                </span>
              </p>
            </div>

            <div className="text-center bg-blue-50 rounded-2xl px-8 py-5">
              <p className="text-sm text-blue-600 font-medium">
                Overall Progress
              </p>

              <p className="text-4xl font-bold text-blue-700 mt-1">
                {roadmap.overallProgress}%
              </p>

              <p className="text-sm text-slate-500 mt-1">{roadmap.status}</p>
            </div>
          </div>

          {/* Progress Bar */}

          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500">Roadmap Progress</span>

              <span className="font-medium text-slate-700">
                {roadmap.overallProgress}%
              </span>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${roadmap.overallProgress}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Current Skills */}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Your Current Skills
          </h2>

          <div className="flex flex-wrap gap-2 mt-5">
            {roadmap.currentSkills?.length > 0 ? (
              roadmap.currentSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-slate-500">No skills added.</p>
            )}
          </div>
        </div>

        {/* Roadmap Phases */}

        <div className="space-y-6">
          {roadmap.roadmap?.map((phase, index) => (
            <div
              key={index}
              className={`bg-white border rounded-2xl p-6 transition ${
                phase.completed ? "border-green-300" : "border-slate-200"
              }`}
            >
              {/* Phase Header */}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div className="flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                      phase.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <p className="text-sm text-blue-600 font-medium">
                      {phase.phase}
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-1">
                      {phase.title}
                    </h2>

                    <p className="text-slate-500 mt-2">{phase.description}</p>
                  </div>
                </div>

                <span className="text-sm text-slate-500">
                  ⏱️ {phase.duration}
                </span>
              </div>

              {/* Skills */}

              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">
                  Skills to Learn
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {phase.skills?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}

              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">
                  Recommended Projects
                </h3>

                <ul className="mt-3 space-y-2">
                  {phase.projects?.map((project, projectIndex) => (
                    <li
                      key={projectIndex}
                      className="flex items-start gap-2 text-slate-600"
                    >
                      <span className="text-blue-600">•</span>

                      {project}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Button */}

              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={() => updatePhase(index, !phase.completed)}
                  className={`px-5 py-3 rounded-lg font-medium transition ${
                    phase.completed
                      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {phase.completed ? "Mark as Incomplete" : "Mark as Completed"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;
