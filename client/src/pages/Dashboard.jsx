import { useEffect, useState } from "react";
import {
  FileText,
  Briefcase,
  ClipboardList,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  CalendarCheck,
  Brain,
} from "lucide-react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import api from "../services/api";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const [applications, setApplications] = useState([]);
  const [loadingApplications, setLoadingApplications] = useState(true);

  const [savedJobs, setSavedJobs] = useState([]);
  const [loadingSavedJobs, setLoadingSavedJobs] = useState(true);

  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  // Dynamic ATS Resume State
  const [latestResume, setLatestResume] = useState(null);
  const [loadingResume, setLoadingResume] = useState(true);

  // Dynamic Mock Interview State
  const [mockInterviews, setMockInterviews] = useState([]);
  const [loadingInterviews, setLoadingInterviews] = useState(true);

  // Dynamic AI Insight State
  const [aiInsight, setAiInsight] = useState(null);
  const [loadingInsight, setLoadingInsight] = useState(true);

  useEffect(() => {
    // 1. Fetch Applications
    const fetchApplications = async () => {
      try {
        const response = await api.get("/applications");
        setApplications(response.data.applications || []);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      } finally {
        setLoadingApplications(false);
      }
    };

    // 2. Fetch Saved Jobs
    const fetchSavedJobs = async () => {
      try {
        const response = await api.get("/saved-jobs");
        setSavedJobs(response.data.savedJobs || []);
      } catch (error) {
        console.error("Failed to fetch saved jobs:", error);
      } finally {
        setLoadingSavedJobs(false);
      }
    };

    // 3. Fetch Jobs
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs");
        setJobs(response.data.jobs || []);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoadingJobs(false);
      }
    };

    // 4. Fetch Latest Resume
    const fetchLatestResume = async () => {
      try {
        const response = await api.get("/resumes/latest");
        setLatestResume(response.data.resume || null);
      } catch (error) {
        console.warn("Failed to fetch latest resume:", error);
      } finally {
        setLoadingResume(false);
      }
    };

    // 5. Fetch Mock Interviews
    const fetchMockInterviews = async () => {
      try {
        const response = await api.get("/mock-interviews");
        setMockInterviews(response.data.interviews || []);
      } catch (error) {
        console.warn("Failed to fetch mock interviews:", error);
      } finally {
        setLoadingInterviews(false);
      }
    };

    // 6. Fetch AI Career Insight
    const fetchCareerInsight = async () => {
      try {
        const response = await api.get("/career-insight");
        setAiInsight(response.data.insight || null);
      } catch (error) {
        console.warn("Failed to fetch AI career insight:", error);
      } finally {
        setLoadingInsight(false);
      }
    };

    fetchApplications();
    fetchSavedJobs();
    fetchJobs();
    fetchLatestResume();
    fetchMockInterviews();
    fetchCareerInsight();
  }, []);

  // Compute Application Funnel
  const appliedCount = applications.filter((a) => a.status === "Applied").length;
  const shortlistedCount = applications.filter((a) => a.status === "Shortlisted").length;
  const interviewCount = applications.filter((a) => a.status === "Interview").length;
  const selectedCount = applications.filter((a) => a.status === "Selected").length;
  const rejectedCount = applications.filter((a) => a.status === "Rejected").length;

  // Chart Data for Application Pipeline
  const pipelineData = [
    { name: "Applied", count: appliedCount, color: "#3B82F6" },
    { name: "Shortlisted", count: shortlistedCount, color: "#F59E0B" },
    { name: "Interview", count: interviewCount, color: "#8B5CF6" },
    { name: "Selected", count: selectedCount, color: "#10B981" },
    { name: "Rejected", count: rejectedCount, color: "#94A3B8" },
  ];

  // Dynamic ATS Score
  const atsDisplay = latestResume?.atsScore ? `${latestResume.atsScore}%` : "Not Scanned";

  // Dynamic Interview Readiness Calculation
  const completedInterviews = mockInterviews.filter((i) => i.status === "Completed");
  const interviewReadiness =
    completedInterviews.length > 0
      ? `${Math.round(
          completedInterviews.reduce((acc, cur) => acc + (cur.overallScore || 70), 0) /
            completedInterviews.length
        )}%`
      : completedInterviews.length === 0 && mockInterviews.length > 0
      ? "In Progress"
      : "Not Started";

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Welcome back, {user?.name || "Candidate"} 👋
            </h1>
            <p className="text-slate-500 mt-1.5 text-sm md:text-base">
              Here is your AI-powered career overview, application pipeline, and readiness metrics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => (window.location.href = "/mock-interview")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition flex items-center gap-2"
            >
              <Brain className="w-4 h-4" /> Start AI Mock
            </button>
          </div>
        </div>

        {/* Dynamic Metric Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          <StatCard
            title="Resume ATS Score"
            value={loadingResume ? "..." : atsDisplay}
            description={latestResume ? latestResume.fileName : "Upload resume to scan"}
            icon={FileText}
          />

          <StatCard
            title="Available Jobs"
            value={loadingJobs ? "..." : jobs.length}
            description="Active opportunities"
            icon={Target}
          />

          <StatCard
            title="Total Applications"
            value={loadingApplications ? "..." : applications.length}
            description="Active pipeline"
            icon={ClipboardList}
          />

          <StatCard
            title="Saved Jobs"
            value={loadingSavedJobs ? "..." : savedJobs.length}
            description="Bookmarked positions"
            icon={Briefcase}
          />

          <StatCard
            title="Interview Readiness"
            value={loadingInterviews ? "..." : interviewReadiness}
            description={
              completedInterviews.length > 0
                ? `${completedInterviews.length} mock sessions`
                : "Practice with AI Coach"
            }
            icon={Award}
          />
        </div>

        {/* Application Funnel & AI Insight Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visual Application Funnel Chart (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" /> Application Pipeline Funnel
                </h2>
                <p className="text-slate-500 text-xs mt-1">
                  Distribution of your active applications across hiring stages
                </p>
              </div>

              <button
                onClick={() => (window.location.href = "/applications")}
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Manage Pipeline →
              </button>
            </div>

            <div className="h-64 w-full pt-4">
              {applications.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pipelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748B" }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: "#64748B" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        borderRadius: "12px",
                        border: "none",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                      {pipelineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 text-sm">
                  <ClipboardList className="w-8 h-8 mb-2 opacity-50" />
                  <p>No applications logged yet.</p>
                  <button
                    onClick={() => (window.location.href = "/jobs")}
                    className="mt-2 text-xs text-blue-600 font-bold hover:underline"
                  >
                    Browse jobs & apply →
                  </button>
                </div>
              )}
            </div>

            {/* Quick Metrics Bar below chart */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 mt-4 text-center">
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold">Shortlisted</span>
                <p className="text-lg font-extrabold text-amber-600">{shortlistedCount}</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold">Interviews</span>
                <p className="text-lg font-extrabold text-purple-600">{interviewCount}</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold">Offers</span>
                <p className="text-lg font-extrabold text-emerald-600">{selectedCount}</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold">Success Rate</span>
                <p className="text-lg font-extrabold text-blue-600">
                  {applications.length > 0
                    ? `${Math.round((selectedCount / applications.length) * 100)}%`
                    : "0%"}
                </p>
              </div>
            </div>
          </div>

          {/* AI Career Insight Card (1 col) */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-500/20 text-cyan-300 border border-blue-400/20 px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> AI Strategic Advisor
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight">
                Personalized Career Insight
              </h3>

              <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                {loadingInsight
                  ? "Analyzing your profile, recent applications, and industry trends..."
                  : aiInsight?.careerSummary ||
                    "Based on your profile, focusing on system architecture, API optimization, and real-time state management will significantly boost your recruiter callbacks."}
              </p>

              {aiInsight?.recommendedSkills?.length > 0 && (
                <div className="mt-4">
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                    Target Skills to Acquire:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {aiInsight.recommendedSkills.slice(0, 4).map((sk, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-white/10 px-2.5 py-1 rounded-lg border border-white/10"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => (window.location.href = "/career-roadmap")}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs md:text-sm transition shadow-lg flex items-center justify-center gap-2"
            >
              Generate AI Career Roadmap <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Recommended Jobs & Quick Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions (1 col) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-lg">
              Quick Career Actions
            </h3>

            <div
              onClick={() => (window.location.href = "/resume-analyzer")}
              className="p-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition">
                  Match Resume with Job Spec
                </h4>
                <p className="text-xs text-slate-500">
                  Compare ATS compatibility & get tailored bullets
                </p>
              </div>
            </div>

            <div
              onClick={() => (window.location.href = "/mock-interview")}
              className="p-4 rounded-2xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 cursor-pointer transition flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-purple-600 transition">
                  AI Speech Mock Interview
                </h4>
                <p className="text-xs text-slate-500">
                  Practice voice questions with instant feedback
                </p>
              </div>
            </div>

            <div
              onClick={() => (window.location.href = "/skill-gap")}
              className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 cursor-pointer transition flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-600 transition">
                  Skill Gap & Readiness
                </h4>
                <p className="text-xs text-slate-500">
                  Compare your skill set against target job roles
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Jobs (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Top Matched Opportunities
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">
                  Hand-picked positions matching your tech profile
                </p>
              </div>

              <button
                onClick={() => (window.location.href = "/jobs")}
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Explore All Jobs ({jobs.length}) →
              </button>
            </div>

            <div className="space-y-3">
              {loadingJobs ? (
                <p className="text-xs text-slate-400 py-6 text-center">Loading job postings...</p>
              ) : jobs.length === 0 ? (
                <p className="text-xs text-slate-400 py-6 text-center">No job postings available.</p>
              ) : (
                jobs.slice(0, 3).map((job) => (
                  <div
                    key={job._id}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{job.title}</h4>
                        <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                          {job.jobType}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {job.company} • {job.location || "Remote"} • {job.salary || "Competitive"}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {job.skills?.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded-md"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => (window.location.href = "/jobs")}
                      className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition shrink-0 self-start sm:self-auto"
                    >
                      View & Match →
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
