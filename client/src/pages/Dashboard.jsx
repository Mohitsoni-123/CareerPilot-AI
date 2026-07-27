import { useEffect, useState } from "react";
import { FileText, Briefcase, ClipboardList, Target } from "lucide-react";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    fetchApplications();
    fetchSavedJobs();
    fetchJobs();
  }, []);

  const shortlistedCount = applications.filter(
    (application) => application.status === "Shortlisted",
  ).length;

  const interviewCount = applications.filter(
    (application) => application.status === "Interview",
  ).length;

  const selectedCount = applications.filter(
    (application) => application.status === "Selected",
  ).length;

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 p-8">
        {/* Welcome */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Good morning, {user?.name} 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Here's your career overview for today.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          <StatCard
            title="Resume ATS Score"
            value="82%"
            description="Good profile"
            icon={FileText}
          />

          <StatCard
            title="Job Matches"
            value={loadingJobs ? "..." : jobs.length}
            description="Available opportunities"
            icon={Target}
          />

          <StatCard
            title="Applications"
            value={loadingApplications ? "..." : applications.length}
            description="Total applications"
            icon={ClipboardList}
          />

          <StatCard
            title="Saved Jobs"
            value={loadingSavedJobs ? "..." : savedJobs.length}
            description="Jobs saved for later"
            icon={Briefcase}
          />

          <StatCard
            title="Interview Ready"
            value="76%"
            description="Keep improving"
            icon={Briefcase}
          />
        </div>

        {/* Application Status Overview */}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Application Progress
              </h2>

              <p className="text-slate-500 mt-1">
                Track your progress across your job applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Shortlisted */}

            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <p className="text-sm text-yellow-700 font-medium">Shortlisted</p>

              <h3 className="text-3xl font-bold text-yellow-700 mt-2">
                {loadingApplications ? "..." : shortlistedCount}
              </h3>

              <p className="text-sm text-yellow-600 mt-1">
                Applications shortlisted
              </p>
            </div>

            {/* Interviews */}

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
              <p className="text-sm text-purple-700 font-medium">Interviews</p>

              <h3 className="text-3xl font-bold text-purple-700 mt-2">
                {loadingApplications ? "..." : interviewCount}
              </h3>

              <p className="text-sm text-purple-600 mt-1">
                Interviews in progress
              </p>
            </div>

            {/* Selected */}

            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <p className="text-sm text-green-700 font-medium">Selected</p>

              <h3 className="text-3xl font-bold text-green-700 mt-2">
                {loadingApplications ? "..." : selectedCount}
              </h3>

              <p className="text-sm text-green-600 mt-1">
                Successful applications
              </p>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Career Progress */}

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Career Profile</h2>

            <p className="text-slate-500 mt-2">
              Complete your profile to get better AI recommendations.
            </p>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span>Profile Completion</span>

                <span>70%</span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: "70%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* AI Recommendation */}

          <div className="bg-slate-950 text-white rounded-2xl p-6">
            <h2 className="text-xl font-semibold">🤖 AI Career Insight</h2>

            <p className="text-slate-300 mt-3">
              Based on your current skills, you should focus on improving your
              backend development and system design knowledge.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">
              View Career Roadmap
            </button>
          </div>
        </div>

        {/* Recommended Jobs */}

        <div className="mt-8">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Recommended Jobs
              </h2>

              <p className="text-slate-500 mt-1">
                Latest opportunities matching your career goals.
              </p>
            </div>

            <button
              onClick={() => {
                window.location.href = "/jobs";
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {loadingJobs ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <p className="text-slate-500">Loading recommended jobs...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <p className="text-slate-500">No jobs available right now.</p>
              </div>
            ) : (
              jobs.slice(0, 3).map((job) => (
                <div
                  key={job._id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">
                        {job.title}
                      </h3>

                      <p className="text-slate-500 mt-1">{job.company}</p>
                    </div>

                    <span className="text-blue-600 font-semibold text-sm">
                      {job.jobType}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.location && (
                      <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                        📍 {job.location}
                      </span>
                    )}

                    {job.salary && (
                      <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                        💰 {job.salary}
                      </span>
                    )}
                  </div>

                  {job.description && (
                    <p className="text-slate-600 text-sm mt-4 line-clamp-2">
                      {job.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills?.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <button
                      onClick={() => {
                        window.location.href = "/jobs";
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Job →
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
