import { useState } from "react";
import api from "../services/api";

const SkillGap = () => {
  const [targetRole, setTargetRole] = useState("");

  const [currentSkills, setCurrentSkills] =
    useState("");

  const [requiredSkills, setRequiredSkills] =
    useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const analyzeSkillGap = async (e) => {
    e.preventDefault();

    if (!targetRole.trim()) {
      alert("Please enter your target role");
      return;
    }

    if (!currentSkills.trim()) {
      alert("Please enter your current skills");
      return;
    }

    if (!requiredSkills.trim()) {
      alert("Please enter required skills");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post(
        "/skill-gap",
        {
          targetRole,

          currentSkills: currentSkills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),

          requiredSkills: requiredSkills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
        }
      );

      setResult(response.data.skillGap);
    } catch (error) {
      console.error(
        "Skill Gap Analysis Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to analyze skill gap"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Skill Gap Analysis
          </h1>

          <p className="text-slate-500 mt-2">
            Compare your current skills with the
            skills required for your target role.
          </p>
        </div>

        {/* Analysis Form */}

        <div className="bg-white border border-slate-200 rounded-2xl p-8">

          <h2 className="text-xl font-semibold text-slate-900">
            Analyze Your Skill Gap
          </h2>

          <p className="text-slate-500 mt-2">
            Enter your skills separated by commas.
          </p>

          <form
            onSubmit={analyzeSkillGap}
            className="mt-8 space-y-6"
          >

            {/* Target Role */}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Target Job Role
              </label>

              <input
                type="text"
                value={targetRole}
                onChange={(e) =>
                  setTargetRole(e.target.value)
                }
                placeholder="e.g. Full Stack Developer"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Current Skills */}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Current Skills
              </label>

              <textarea
                value={currentSkills}
                onChange={(e) =>
                  setCurrentSkills(e.target.value)
                }
                placeholder="JavaScript, React, Node.js, MongoDB"
                rows="4"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <p className="text-xs text-slate-500 mt-2">
                Example: JavaScript, React, Node.js,
                MongoDB
              </p>
            </div>

            {/* Required Skills */}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Required Skills
              </label>

              <textarea
                value={requiredSkills}
                onChange={(e) =>
                  setRequiredSkills(e.target.value)
                }
                placeholder="JavaScript, React, Node.js, MongoDB, Docker, AWS"
                rows="4"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <p className="text-xs text-slate-500 mt-2">
                Enter the skills required for your
                target role.
              </p>
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg font-medium transition"
            >
              {loading
                ? "Analyzing Skills..."
                : "Analyze Skill Gap"}
            </button>

          </form>
        </div>

        {/* Results */}

        {result && (
          <div className="mt-8 space-y-6">

            {/* Score */}

            <div className="bg-white border border-slate-200 rounded-2xl p-8">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {result.targetRole}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Your current skill match for this
                    role.
                  </p>
                </div>

                <div className="text-center bg-blue-50 rounded-2xl px-8 py-5">

                  <p className="text-sm text-blue-600 font-medium">
                    Skill Match Score
                  </p>

                  <p className="text-4xl font-bold text-blue-700 mt-1">
                    {result.skillGapScore}%
                  </p>

                </div>

              </div>

              {/* Progress */}

              <div className="mt-8">

                <div className="w-full bg-slate-200 rounded-full h-3">

                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{
                      width: `${result.skillGapScore}%`,
                    }}
                  />

                </div>

              </div>

            </div>

            {/* Matched and Missing Skills */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Matched Skills */}

              <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <h2 className="text-xl font-semibold text-slate-900">
                  ✅ Matched Skills
                </h2>

                <div className="flex flex-wrap gap-2 mt-5">

                  {result.matchedSkills?.length > 0 ? (
                    result.matchedSkills.map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      )
                    )
                  ) : (
                    <p className="text-slate-500">
                      No matched skills found.
                    </p>
                  )}

                </div>

              </div>

              {/* Missing Skills */}

              <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <h2 className="text-xl font-semibold text-slate-900">
                  ❌ Missing Skills
                </h2>

                <div className="flex flex-wrap gap-2 mt-5">

                  {result.missingSkills?.length > 0 ? (
                    result.missingSkills.map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-700 px-3 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      )
                    )
                  ) : (
                    <p className="text-slate-500">
                      No missing skills. Great job!
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* Recommendations */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <h2 className="text-xl font-semibold text-slate-900">
                💡 Improvement Recommendations
              </h2>

              <div className="mt-5 space-y-4">

                {result.recommendations?.length > 0 ? (
                  result.recommendations.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-xl p-5"
                      >

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                          <h3 className="font-semibold text-slate-900">
                            {item.skill}
                          </h3>

                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.priority ===
                              "High"
                                ? "bg-red-100 text-red-700"
                                : item.priority ===
                                  "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {item.priority} Priority
                          </span>

                        </div>

                        <p className="text-slate-500 mt-2">
                          {item.reason}
                        </p>

                      </div>
                    )
                  )
                ) : (
                  <p className="text-slate-500">
                    No recommendations available.
                  </p>
                )}

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default SkillGap;