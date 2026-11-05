import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/api";
import { login } from "../redux/slices/authSlice";

const POPULAR_SKILLS = [
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Express",
  "MongoDB",
  "Python",
  "Docker",
  "Tailwind CSS",
  "Git",
  "AWS",
  "REST APIs",
];

const Profile = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    profileImage: "",
    skills: [],
    education: [],
    experience: [],
    projects: [],
    certifications: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [educationInput, setEducationInput] = useState("");
  const [experienceInput, setExperienceInput] = useState("");
  const [projectInput, setProjectInput] = useState("");
  const [certificationInput, setCertificationInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (text) => {
    setToastMessage(text);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setFetching(true);
        const response = await api.get("/users/profile");
        const profile = response.data.user;

        setFormData({
          name: profile.name || "",
          profileImage: profile.profileImage || "",
          skills: Array.isArray(profile.skills) ? profile.skills : [],
          education: Array.isArray(profile.education) ? profile.education : [],
          experience: Array.isArray(profile.experience) ? profile.experience : [],
          projects: Array.isArray(profile.projects) ? profile.projects : [],
          certifications: Array.isArray(profile.certifications) ? profile.certifications : [],
        });
      } catch (error) {
        console.error("Profile Error:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = (field, value, setValue) => {
    if (!value.trim()) return;
    if (formData[field].includes(value.trim())) {
      setValue("");
      return;
    }

    setFormData({
      ...formData,
      [field]: [...formData[field], value.trim()],
    });
    setValue("");
  };

  const addPopularSkill = (skill) => {
    if (formData.skills.includes(skill)) return;
    setFormData({
      ...formData,
      skills: [...formData.skills, skill],
    });
  };

  const removeItem = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  // Calculate Profile Completeness
  const computeCompleteness = () => {
    let score = 0;
    if (formData.name?.trim()) score += 20;
    if (formData.profileImage?.trim()) score += 10;
    if (formData.skills?.length >= 3) score += 25;
    else if (formData.skills?.length > 0) score += 10;
    if (formData.education?.length > 0) score += 15;
    if (formData.experience?.length > 0) score += 15;
    if (formData.projects?.length > 0) score += 15;
    return Math.min(100, score);
  };

  const completeness = computeCompleteness();

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const response = await api.put("/users/profile", formData);
      const updatedUser = response.data.user;

      dispatch(
        login({
          token,
          user: updatedUser,
        })
      );

      showToast("Profile updated successfully!");
    } catch (error) {
      console.error("Update Profile Error:", error);
      showToast("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="p-6 md:p-10 space-y-8 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            Loading your developer profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-lg border border-emerald-500 text-sm font-semibold animate-fadeIn">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-2 border border-white/30">
            👤 Candidate Technical Identity
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Developer Profile & Portfolio Studio
          </h1>
          <p className="mt-1 text-blue-100 text-xs md:text-sm max-w-xl">
            This profile directly drives CareerPilot's AI Job Matching, Mock Interview simulations,
            and Personalized Roadmaps.
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="self-start md:self-auto px-6 py-3 rounded-xl font-bold text-xs md:text-sm bg-white text-blue-700 hover:bg-blue-50 shadow-md transition-all disabled:opacity-50"
        >
          {loading ? "Saving Changes..." : "💾 Save Profile"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ==================================================== */}
        {/* LEFT COLUMN: IDENTITY CARD & COMPLETENESS */}
        {/* ==================================================== */}
        <div className="space-y-6 lg:col-span-1">
          {/* Identity Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm text-center">
            {/* Avatar Preview */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              {formData.profileImage ? (
                <img
                  src={formData.profileImage}
                  alt={formData.name || "Profile"}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
                />
              ) : null}
              {(!formData.profileImage || formData.profileImage.trim() === "") && (
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-3xl font-extrabold flex items-center justify-center border-4 border-blue-100 dark:border-blue-950 shadow-md">
                  {formData.name ? formData.name.charAt(0).toUpperCase() : "U"}
                </div>
              )}
              <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs">
                ✓
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {formData.name || "Software Developer"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {user?.email || "candidate@careerpilot.ai"}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Account Role:</span>
                <span className="font-semibold text-slate-900 dark:text-white capitalize">
                  {user?.role || "Student"}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Verified Skills:</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {formData.skills?.length || 0} Skills
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Portfolio Projects:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {formData.projects?.length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Completeness Widget */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Profile Readiness
              </h3>
              <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
                {completeness}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-4 border border-slate-200 dark:border-slate-700">
              <div
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${completeness}%` }}
              />
            </div>

            {/* Checklist */}
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className={formData.name ? "text-emerald-500 font-bold" : "text-slate-300"}>
                  {formData.name ? "✓" : "○"}
                </span>
                <span>Full Name specified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={formData.skills?.length >= 3 ? "text-emerald-500 font-bold" : "text-slate-300"}>
                  {formData.skills?.length >= 3 ? "✓" : "○"}
                </span>
                <span>At least 3 core technical skills added</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={formData.education?.length > 0 ? "text-emerald-500 font-bold" : "text-slate-300"}>
                  {formData.education?.length > 0 ? "✓" : "○"}
                </span>
                <span>Education credentials listed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={formData.experience?.length > 0 ? "text-emerald-500 font-bold" : "text-slate-300"}>
                  {formData.experience?.length > 0 ? "✓" : "○"}
                </span>
                <span>Work experience / internship added</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={formData.projects?.length > 0 ? "text-emerald-500 font-bold" : "text-slate-300"}>
                  {formData.projects?.length > 0 ? "✓" : "○"}
                </span>
                <span>Practical projects documented</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* RIGHT COLUMN: EDITABLE SECTIONS */}
        {/* ==================================================== */}
        <div className="space-y-6 lg:col-span-2">
          {/* Section 1: Basic Information */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>👤</span> Basic Candidate Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Mohit Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Profile Image URL (Optional)
                </label>
                <input
                  type="text"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Technical Skills */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>⚡</span> Technical Skills & Tooling ({formData.skills.length})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Add the technologies, frameworks, and programming languages you know.
              </p>
            </div>

            {/* Popular Skills Quick Add */}
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                Quick 1-Click Add:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_SKILLS.map((sk) => {
                  const already = formData.skills.includes(sk);
                  return (
                    <button
                      key={sk}
                      type="button"
                      onClick={() => addPopularSkill(sk)}
                      disabled={already}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                        already
                          ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-default"
                          : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 border border-blue-200/60 dark:border-blue-900/40"
                      }`}
                    >
                      + {sk}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Skill Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem("skills", skillInput, setSkillInput);
                  }
                }}
                placeholder="Type custom skill and press Add (e.g. Redis, GraphQL, Next.js)..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => addItem("skills", skillInput, setSkillInput)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm"
              >
                Add Skill
              </button>
            </div>

            {/* Active Skills Cloud */}
            <div className="flex flex-wrap gap-2 pt-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 text-blue-800 dark:text-blue-200 border border-blue-200/60 dark:border-blue-800/60"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeItem("skills", index)}
                    className="w-4 h-4 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/40 hover:text-rose-600 flex items-center justify-center text-slate-400 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
              {formData.skills.length === 0 && (
                <p className="text-xs text-slate-400 italic">No skills added yet. Click above or type one in.</p>
              )}
            </div>
          </div>

          {/* Section 3: Education */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🎓</span> Academic & Education Credentials
            </h2>

            <div className="flex gap-2">
              <input
                type="text"
                value={educationInput}
                onChange={(e) => setEducationInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem("education", educationInput, setEducationInput);
                  }
                }}
                placeholder="e.g. B.Tech in Computer Science & Engineering - XYZ University (2022-2026)"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => addItem("education", educationInput, setEducationInput)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Add
              </button>
            </div>

            <div className="space-y-2">
              {formData.education.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3 text-xs md:text-sm text-slate-800 dark:text-slate-200"
                >
                  <span className="font-medium">🎓 {item}</span>
                  <button
                    type="button"
                    onClick={() => removeItem("education", index)}
                    className="text-slate-400 hover:text-rose-600 text-base font-bold px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Experience & Internships */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>💼</span> Work Experience & Internships
            </h2>

            <div className="flex gap-2">
              <input
                type="text"
                value={experienceInput}
                onChange={(e) => setExperienceInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem("experience", experienceInput, setExperienceInput);
                  }
                }}
                placeholder="e.g. Full Stack Intern at Tech Corp - Built REST APIs using Node & MongoDB"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => addItem("experience", experienceInput, setExperienceInput)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Add
              </button>
            </div>

            <div className="space-y-2">
              {formData.experience.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3 text-xs md:text-sm text-slate-800 dark:text-slate-200"
                >
                  <span className="font-medium">💼 {item}</span>
                  <button
                    type="button"
                    onClick={() => removeItem("experience", index)}
                    className="text-slate-400 hover:text-rose-600 text-base font-bold px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Projects */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🚀</span> Technical Portfolio Projects
            </h2>

            <div className="flex gap-2">
              <input
                type="text"
                value={projectInput}
                onChange={(e) => setProjectInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem("projects", projectInput, setProjectInput);
                  }
                }}
                placeholder="e.g. CareerPilot AI - Full Stack Career Companion (React, Node, Express, MongoDB)"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => addItem("projects", projectInput, setProjectInput)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Add
              </button>
            </div>

            <div className="space-y-2">
              {formData.projects.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3 text-xs md:text-sm text-slate-800 dark:text-slate-200"
                >
                  <span className="font-medium">🛠️ {item}</span>
                  <button
                    type="button"
                    onClick={() => removeItem("projects", index)}
                    className="text-slate-400 hover:text-rose-600 text-base font-bold px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Certifications */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>📜</span> Professional Certifications
            </h2>

            <div className="flex gap-2">
              <input
                type="text"
                value={certificationInput}
                onChange={(e) => setCertificationInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem("certifications", certificationInput, setCertificationInput);
                  }
                }}
                placeholder="e.g. AWS Certified Cloud Practitioner / Meta Front-End Developer"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => addItem("certifications", certificationInput, setCertificationInput)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Add
              </button>
            </div>

            <div className="space-y-2">
              {formData.certifications.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3 text-xs md:text-sm text-slate-800 dark:text-slate-200"
                >
                  <span className="font-medium">📜 {item}</span>
                  <button
                    type="button"
                    onClick={() => removeItem("certifications", index)}
                    className="text-slate-400 hover:text-rose-600 text-base font-bold px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Save Bar */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? "Saving Profile Changes..." : "✓ Save & Synchronize Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
