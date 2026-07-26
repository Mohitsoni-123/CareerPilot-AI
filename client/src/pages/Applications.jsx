import { useEffect, useState } from "react";
import api from "../services/api";

const statuses = [
  "Applied",
  "Shortlisted",
  "Interview",
  "Selected",
  "Rejected",
];

// =====================================
// STATUS CONFIG
// =====================================

const statusConfig = {
  Applied: {
    title: "Applied",
    badge: "bg-blue-100 text-blue-700",
    header: "text-blue-700",
    dot: "bg-blue-500",
  },

  Shortlisted: {
    title: "Shortlisted",
    badge: "bg-yellow-100 text-yellow-700",
    header: "text-yellow-700",
    dot: "bg-yellow-500",
  },

  Interview: {
    title: "Interview",
    badge: "bg-purple-100 text-purple-700",
    header: "text-purple-700",
    dot: "bg-purple-500",
  },

  Selected: {
    title: "Selected",
    badge: "bg-green-100 text-green-700",
    header: "text-green-700",
    dot: "bg-green-500",
  },

  Rejected: {
    title: "Rejected",
    badge: "bg-red-100 text-red-700",
    header: "text-red-700",
    dot: "bg-red-500",
  },
};

// =====================================
// APPLICATION CARD
// =====================================

const ApplicationCard = ({ application, updating, updateStatus }) => {
  const job = application.job;

  const config = statusConfig[application.status] || statusConfig.Applied;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-200">
      {/* Job Title */}
      <h3 className="font-bold text-slate-800 text-lg leading-tight">
        {job?.title || "Job Title Not Available"}
      </h3>

      {/* Company */}
      <p className="text-sm text-slate-500 mt-1">
        {job?.company || "Company Not Available"}
      </p>

      {/* Location */}
      {job?.location && (
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm">📍</span>

          <p className="text-sm text-slate-600">{job.location}</p>
        </div>
      )}

      {/* Job Type */}
      {job?.jobType && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm">💼</span>

          <p className="text-sm text-slate-600">{job.jobType}</p>
        </div>
      )}

      {/* Salary */}
      {job?.salary && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm">💰</span>

          <p className="text-sm text-slate-600">{job.salary}</p>
        </div>
      )}

      {/* Current Status */}
      <div className="mt-5">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${config.badge}`}
        >
          <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>

          {application.status}
        </span>
      </div>

      {/* Update Status */}
      <div className="mt-5">
        <label className="block text-xs font-semibold text-slate-500 mb-2">
          Update Status
        </label>

        <select
          value={application.status}
          disabled={updating === application._id}
          onChange={(e) => updateStatus(application._id, e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        {updating === application._id && (
          <p className="text-xs text-blue-600 mt-2">Updating status...</p>
        )}
      </div>

      {/* View Job */}
      {job?.applyUrl && (
        <button
          onClick={() =>
            window.open(job.applyUrl, "_blank", "noopener,noreferrer")
          }
          className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition"
        >
          View Job
        </button>
      )}
    </div>
  );
};

// =====================================
// SUMMARY CARD
// =====================================

const SummaryCard = ({ title, count, icon, color }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>{count}</h2>
        </div>

        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
};

// =====================================
// MAIN APPLICATIONS COMPONENT
// =====================================

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const [loading, setLoading] = useState(true);

  const [updating, setUpdating] = useState(null);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  // =====================================
  // FETCH APPLICATIONS
  // =====================================

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications");

      setApplications(response.data.applications || []);
    } catch (error) {
      console.error("Fetch Applications Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // UPDATE APPLICATION STATUS
  // =====================================

  const updateStatus = async (applicationId, status) => {
    setUpdating(applicationId);

    try {
      const response = await api.put(`/applications/${applicationId}`, {
        status,
      });

      setApplications((previous) =>
        previous.map((application) =>
          application._id === applicationId
            ? {
                ...application,
                status: response.data.application.status,
              }
            : application,
        ),
      );
    } catch (error) {
      console.error("Update Status Error:", error);

      alert(error.response?.data?.message || "Failed to update status");
    } finally {
      setUpdating(null);
    }
  };

  // =====================================
  // LOAD APPLICATIONS
  // =====================================

  useEffect(() => {
    fetchApplications();
  }, []);

  // =====================================
  // SEARCH + FILTER
  // =====================================

  const filteredApplications = applications.filter((application) => {
    const title = application.job?.title?.toLowerCase() || "";

    const company = application.job?.company?.toLowerCase() || "";

    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      title.includes(searchText) || company.includes(searchText);

    const matchesStatus =
      statusFilter === "All" || application.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // =====================================
  // GET APPLICATIONS BY STATUS
  // =====================================

  const getApplicationsByStatus = (status) => {
    return filteredApplications.filter(
      (application) => application.status === status,
    );
  };

  // =====================================
  // SUMMARY COUNTS
  // =====================================

  const totalApplications = applications.length;

  const appliedApplications = applications.filter(
    (application) => application.status === "Applied",
  ).length;

  const shortlistedApplications = applications.filter(
    (application) => application.status === "Shortlisted",
  ).length;

  const interviewApplications = applications.filter(
    (application) => application.status === "Interview",
  ).length;

  const selectedApplications = applications.filter(
    (application) => application.status === "Selected",
  ).length;

  const rejectedApplications = applications.filter(
    (application) => application.status === "Rejected",
  ).length;

  // =====================================
  // LOADING UI
  // =====================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>

          <p className="text-slate-500 mt-4">Loading applications...</p>
        </div>
      </div>
    );
  }

  // =====================================
  // MAIN UI
  // =====================================

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* =====================================
            HEADER
        ===================================== */}

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Application Tracker
          </h1>

          <p className="text-slate-500 mt-2">
            Track your job applications from application to offer.
          </p>
        </div>

        {/* =====================================
            SUMMARY CARDS
        ===================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          <SummaryCard
            title="Total Applications"
            count={totalApplications}
            icon="📋"
            color="text-slate-900"
          />

          <SummaryCard
            title="Applied"
            count={appliedApplications}
            icon="📨"
            color="text-blue-600"
          />

          <SummaryCard
            title="Shortlisted"
            count={shortlistedApplications}
            icon="⭐"
            color="text-yellow-600"
          />

          <SummaryCard
            title="Interviews"
            count={interviewApplications}
            icon="🎤"
            color="text-purple-600"
          />

          <SummaryCard
            title="Selected"
            count={selectedApplications}
            icon="🎉"
            color="text-green-600"
          />
        </div>

        {/* =====================================
            SEARCH + FILTER
        ===================================== */}

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          {/* Search */}

          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by job title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter */}

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-56 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Statuses</option>

            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* =====================================
            NO APPLICATIONS
        ===================================== */}

        {applications.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center mt-8">
            <div className="text-5xl">📋</div>

            <h2 className="text-xl font-semibold text-slate-800 mt-4">
              No Applications Yet
            </h2>

            <p className="text-slate-500 mt-2">
              Apply to jobs to start tracking your applications.
            </p>
          </div>
        ) : (
          /* =====================================
             KANBAN BOARD
          ===================================== */

          <div className="mt-8 overflow-x-auto pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 min-w-[1100px]">
              {statuses.map((status) => {
                const config = statusConfig[status];

                const columnApplications = getApplicationsByStatus(status);

                return (
                  <div
                    key={status}
                    className="bg-slate-100 rounded-2xl p-4 min-h-[400px]"
                  >
                    {/* COLUMN HEADER */}

                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${config.dot}`}
                        ></span>

                        <h2 className={`font-bold ${config.header}`}>
                          {config.title}
                        </h2>
                      </div>

                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-bold ${config.badge}`}
                      >
                        {columnApplications.length}
                      </span>
                    </div>

                    {/* APPLICATION CARDS */}

                    <div className="space-y-4">
                      {columnApplications.length === 0 ? (
                        <div className="border border-dashed border-slate-300 rounded-xl p-6 text-center">
                          <p className="text-sm text-slate-400">
                            No applications
                          </p>
                        </div>
                      ) : (
                        columnApplications.map((application) => (
                          <ApplicationCard
                            key={application._id}
                            application={application}
                            updating={updating}
                            updateStatus={updateStatus}
                          />
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =====================================
            FILTER EMPTY STATE
        ===================================== */}

        {applications.length > 0 && filteredApplications.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center mt-6">
            <div className="text-4xl">🔍</div>

            <h2 className="text-xl font-semibold text-slate-800 mt-3">
              No Matching Applications
            </h2>

            <p className="text-slate-500 mt-2">
              Try changing your search or status filter.
            </p>

            <button
              onClick={() => {
                setSearch("");

                setStatusFilter("All");
              }}
              className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
