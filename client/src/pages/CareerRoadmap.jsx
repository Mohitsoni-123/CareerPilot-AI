import { useEffect, useState } from "react";

const CareerRoadmap = () => {
  const [targetRole, setTargetRole] = useState("");
  const [currentLevel, setCurrentLevel] = useState("Beginner");
  const [currentSkills, setCurrentSkills] = useState("");

  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [updatingPhase, setUpdatingPhase] = useState(null);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5000/api/roadmap";

  // Get token from localStorage
  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Fetch existing roadmap
  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const token = getToken();

        if (!token) {
          setFetching(false);
          return;
        }

        const response = await fetch(`${API_URL}/my`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setRoadmap(data.roadmap);

          setTargetRole(data.roadmap.targetRole);
          setCurrentLevel(data.roadmap.currentLevel);

          setCurrentSkills(data.roadmap.currentSkills?.join(", ") || "");
        }
      } catch (error) {
        console.error("Fetch Roadmap Error:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchRoadmap();
  }, []);

  // Generate roadmap
  const handleGenerateRoadmap = async (e) => {
    e.preventDefault();

    setError("");

    if (!targetRole.trim()) {
      setError("Please enter your target job role.");
      return;
    }

    if (!currentSkills.trim()) {
      setError("Please enter your current skills.");
      return;
    }

    try {
      setLoading(true);

      const token = getToken();

      if (!token) {
        setError("Please login first.");
        return;
      }

      const skillsArray = currentSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          targetRole,
          currentLevel,
          currentSkills: skillsArray,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate roadmap");
      }

      setRoadmap(data.roadmap);
    } catch (error) {
      console.error("Generate Roadmap Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Mark phase complete / incomplete
  const handleTogglePhase = async (phaseIndex) => {
    try {
      setError("");
      setUpdatingPhase(phaseIndex);

      const token = getToken();

      if (!token) {
        setError("Please login first.");
        return;
      }

      const phase = roadmap.phases[phaseIndex];

      const response = await fetch(`${API_URL}/${roadmap._id}/progress`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phaseIndex,
          completed: !phase.completed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update progress");
      }

      // Update UI with latest roadmap from backend
      setRoadmap(data.roadmap);
    } catch (error) {
      console.error("Update Progress Error:", error);

      setError(error.message);
    } finally {
      setUpdatingPhase(null);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading your career roadmap...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Career Roadmap</h1>

          <p className="mt-2 text-gray-600">
            Create a personalized learning roadmap based on your career goals
            and current skills.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Create Your Roadmap
          </h2>

          <form onSubmit={handleGenerateRoadmap} className="space-y-5">
            {/* Target Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Job Role
              </label>

              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="e.g. Full Stack Developer"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Current Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Level
              </label>

              <select
                value={currentLevel}
                onChange={(e) => setCurrentLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Beginner">Beginner</option>

                <option value="Intermediate">Intermediate</option>

                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Current Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Current Skills
              </label>

              <textarea
                value={currentSkills}
                onChange={(e) => setCurrentSkills(e.target.value)}
                placeholder="JavaScript, React, Node.js, MongoDB"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-sm text-gray-500 mt-2">
                Enter your skills separated by commas.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Generate Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition"
            >
              {loading ? "Generating Roadmap..." : "Generate My Roadmap"}
            </button>
          </form>
        </div>

        {/* Roadmap Result */}
        {roadmap && (
          <div>
            {/* Roadmap Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Your Career Goal</p>

                  <h2 className="text-2xl font-bold text-gray-900">
                    {roadmap.targetRole}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    Level: {roadmap.currentLevel}
                  </p>
                </div>

                {/* Progress */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">Overall Progress</p>

                  <p className="text-3xl font-bold text-blue-600">
                    {roadmap.progress}%
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{
                      width: `${roadmap.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6">
                {error}
              </div>
            )}

            {/* Roadmap Phases */}
            <div className="space-y-5">
              {roadmap.phases?.map((phase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start gap-4">
                    {/* Phase Number */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                        phase.completed
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {phase.completed ? "✓" : index + 1}
                    </div>

                    <div className="flex-1">
                      {/* Title + Status */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <h3
                          className={`text-xl font-semibold ${
                            phase.completed ? "text-green-700" : "text-gray-900"
                          }`}
                        >
                          {phase.title}
                        </h3>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
                            phase.completed
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {phase.completed ? "Completed" : "Not Started"}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mt-3">{phase.description}</p>

                      {/* Skills */}
                      <div className="mt-5">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Skills to Learn
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {phase.skills?.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div className="mt-5">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Recommended Projects
                        </h4>

                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {phase.projects?.map((project, projectIndex) => (
                            <li key={projectIndex}>{project}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Complete Button */}
                      <button
                        onClick={() => handleTogglePhase(index)}
                        disabled={updatingPhase === index}
                        className={`mt-6 px-5 py-2.5 rounded-xl font-semibold transition ${
                          phase.completed
                            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            : "bg-green-600 text-white hover:bg-green-700"
                        } disabled:opacity-50`}
                      >
                        {updatingPhase === index
                          ? "Updating..."
                          : phase.completed
                            ? "Mark as Incomplete"
                            : "Mark as Complete"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerRoadmap;
