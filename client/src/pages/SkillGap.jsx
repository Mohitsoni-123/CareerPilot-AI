import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Brain,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
} from "lucide-react";
import api from "../services/api";

const ROLE_PRESETS = [
  {
    role: "Full Stack Developer",
    skills:
      "JavaScript, React.js, Node.js, Express.js, MongoDB, REST API, Git, HTML5, CSS3, Tailwind CSS",
  },
  {
    role: "Frontend Engineer",
    skills:
      "JavaScript, TypeScript, React.js, Next.js, Redux, Tailwind CSS, HTML5, CSS3, REST API, Jest",
  },
  {
    role: "Backend Engineer",
    skills:
      "Node.js, Express.js, Python, PostgreSQL, MongoDB, Redis, Docker, REST API, GraphQL, System Design",
  },
  {
    role: "Data Analyst / Scientist",
    skills:
      "Python, SQL, Pandas, NumPy, Tableau, Power BI, Machine Learning, Data Visualization, Excel",
  },
];

const SkillGap = () => {
  const { user } = useSelector((state) => state.auth);

  const [targetRole, setTargetRole] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSelectPreset = (preset) => {
    setTargetRole(preset.role);
    setRequiredSkills(preset.skills);
  };

  const handleImportProfileSkills = () => {
    if (user?.skills && user.skills.length > 0) {
      setCurrentSkills(user.skills.join(", "));
    } else {
      setCurrentSkills("JavaScript, React.js, HTML, CSS, Git");
    }
  };

  const analyzeSkillGap = async (e) => {
    e.preventDefault();

    if (!targetRole.trim()) {
      alert("Please enter or select a target role");
      return;
    }

    if (!currentSkills.trim()) {
      alert("Please enter your current skills");
      return;
    }

    if (!requiredSkills.trim()) {
      alert("Please enter the required skills for this role");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/skill-gap", {
        targetRole,
        currentSkills: currentSkills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        requiredSkills: requiredSkills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      });

      setResult(response.data.skillGap);
    } catch (error) {
      console.error("Skill Gap Analysis Error:", error);
      alert(error.response?.data?.message || "Failed to analyze skill gap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
          <Brain className="w-3.5 h-3.5" /> Competency Matrix & Gap Detection
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          AI Skill Gap Analysis
        </h1>
        <p className="text-slate-600 mt-2 text-sm md:text-base">
          Benchmark your present skill profile against industry requirements for your target role and get prioritized learning pathways.
        </p>
      </div>

      {/* Preset Role Selector Chips */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 block">
          Quick Fill Target Role Presets:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {ROLE_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectPreset(preset)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition ${
                targetRole === preset.role
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              + {preset.role}
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Form */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" /> Compare Skills
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Enter skills separated by commas or import them from your profile.
        </p>

        <form onSubmit={analyzeSkillGap} className="mt-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Target Job Role *
            </label>
            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Full Stack Developer, Data Scientist"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">
                Your Current Skills *
              </label>
              <button
                type="button"
                onClick={handleImportProfileSkills}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-lg border border-indigo-200 transition flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Auto-fill from My Profile
              </button>
            </div>
            <textarea
              value={currentSkills}
              onChange={(e) => setCurrentSkills(e.target.value)}
              placeholder="e.g. JavaScript, React.js, Node.js, HTML, CSS, Git"
              rows={3}
              className="w-full border border-slate-300 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Required Skills for Target Role *
            </label>
            <textarea
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
              placeholder="e.g. JavaScript, React.js, Node.js, Express.js, MongoDB, Docker, AWS, CI/CD"
              rows={3}
              className="w-full border border-slate-300 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
          >
            {loading ? "Analyzing Skill Alignment..." : "Run Skill Gap Analysis →"}
          </button>
        </form>
      </div>

      {/* Analysis Results Display */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Top Score Banner */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Target Alignment
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
                {result.targetRole}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Evaluated against {result.requiredSkills?.length || 0} core industry competencies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 text-center w-full md:w-56 shrink-0">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                Skill Match Score
              </span>
              <div className="text-5xl font-black text-indigo-600 mt-1">
                {result.skillGapScore}%
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                {result.skillGapScore >= 80
                  ? "🌟 Job-Ready Match"
                  : result.skillGapScore >= 50
                  ? "⚡ Moderate Gap"
                  : "📚 Skill Growth Needed"}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
              <span>Coverage Progress</span>
              <span className="text-indigo-600">{result.skillGapScore}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${result.skillGapScore}%` }}
              />
            </div>
          </div>

          {/* Matched vs Missing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Matched Skills */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-600" /> Matched Skills ({result.matchedSkills?.length || 0})
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.matchedSkills?.length > 0 ? (
                  result.matchedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1"
                    >
                      ✓ {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-slate-400 text-xs">No matching skills found in comparison.</p>
                )}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> Missing Competencies ({result.missingSkills?.length || 0})
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.missingSkills?.length > 0 ? (
                  result.missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-full text-xs font-bold"
                    >
                      + {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-emerald-600 text-xs font-semibold">100% match! No missing skills.</p>
                )}
              </div>
            </div>
          </div>

          {/* Prioritized Learning Recommendations */}
          {result.recommendations?.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" /> Prioritized Action Items
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-bold text-slate-900 text-sm">{rec.skill}</h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            rec.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {rec.priority || "High"} Priority
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {rec.reason}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <button
                        onClick={() => (window.location.href = "/career-roadmap")}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                      >
                        Add to Career Roadmap →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillGap;
