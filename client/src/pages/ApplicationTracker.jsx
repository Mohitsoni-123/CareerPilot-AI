import { useEffect, useState } from "react";
import api from "../services/api";

const statuses = [
  "Applied",
  "Shortlisted",
  "Interview",
  "Selected",
  "Rejected",
];

const statusConfig = {
  Applied: {
    color: "blue",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
  Shortlisted: {
    color: "yellow",
    badge: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-500",
  },
  Interview: {
    color: "purple",
    badge: "bg-purple-100 text-purple-700",
    dot: "bg-purple-500",
  },
  Selected: {
    color: "green",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },
  Rejected: {
    color: "red",
    badge: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },
};

const ApplicationTracker = () => {
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
  // UPDATE STATUS
  // =====================================

  const updateStatus = async (applicationId, status) => {
    setUpdating(applicationId);

    try {
      const response = await api.put(
        `/applications/${applicationId}`,
        {
          status,
        }
      );

      setApplications((previous) =>
        previous.map((application) =>
          application._id === applicationId
            ? {
                ...application,
                status:
                  response.data.application.status,
              }
            : application
        )
      );
    } catch (error) {
      console.error("Update Status Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to update status"
      );
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
  // FILTER APPLICATIONS
  // =====================================

  const filteredApplications =
    applications.filter((application) => {
      const title =
        application.job?.title?.toLowerCase() || "";

      const company =
        application.job?.company?.toLowerCase() || "";

      const searchText =
        search.toLowerCase().trim();

      const matchesSearch =
        title.includes(searchText) ||
        company.includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        application.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  // =====================================
  // GET APPLICATIONS BY STATUS
  // =====================================

  const getApplicationsByStatus = (status) => {
    return filteredApplications.filter(
      (application) =>
        application.status === status
    );
  };

  // =====================================
  // STATUS COUNT
  // =====================================

  const statusCount = (status) => {
    return applications.filter(
      (application) =>
        application.status === status
    ).length;
  };

  // =====================================
  // LOADING
  // =====================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-sm border p-8 text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="text-slate-500 mt-4">
            Loading applications...
          </p>
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

          {/* Applied */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Applied
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {statusCount("Applied")}
            </h2>
          </div>

          {/* Shortlisted */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Shortlisted
            </p>

            <h2 className="text-3xl font-bold text-yellow-600 mt-2">
              {statusCount("Shortlisted")}
            </h2>
          </div>

          {/* Interview */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Interview
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              {statusCount("Interview")}
            </h2>
          </div>

          {/* Selected */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Selected
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {statusCount("Selected")}
            </h2>
          </div>

          {/* Rejected */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Rejected
            </p>

            <h2 className="text-3xl font-bold text-red-600 mt-2">
              {statusCount("Rejected")}
            </h2>
          </div>

        </div>

        {/* =====================================
            SEARCH AND FILTER
        ===================================== */}

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          {/* Search */}

          <div className="relative flex-1">

            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by job title or company..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Status Filter */}

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="w-full md:w-56 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option value="All">
              All Statuses
            </option>

            {statuses.map((status) => (
              <option
                key={status}
                value={status}
              >
                {status}
              </option>
            ))}

          </select>

        </div>

        {/* =====================================
            APPLICATIONS
        ===================================== */}

        {applications.length === 0 ? (

          <div className="bg-white border rounded-2xl p-12 text-center mt-8">

            <div className="text-5xl">
              📋
            </div>

            <h2 className="text-xl font-semibold mt-4">
              No Applications Yet
            </h2>

            <p className="text-slate-500 mt-2">
              Start applying to jobs to track your progress.
            </p>

          </div>

        ) : (

          /* =====================================
             KANBAN BOARD
          ===================================== */

          <div className="mt-8 overflow-x-auto pb-8">

            <div className="grid grid-cols-5 gap-5 min-w-[1200px]">

              {statuses.map((status) => {

                const config =
                  statusConfig[status];

                const columnApplications =
                  getApplicationsByStatus(status);

                return (

                  <div
                    key={status}
                    className="bg-slate-100 rounded-2xl p-4 min-h-[500px]"
                  >

                    {/* COLUMN HEADER */}

                    <div className="flex items-center justify-between mb-5">

                      <div className="flex items-center gap-2">

                        <span
                          className={`w-2.5 h-2.5 rounded-full ${config.dot}`}
                        ></span>

                        <h2 className="font-bold text-slate-800">
                          {status}
                        </h2>

                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${config.badge}`}
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

                        columnApplications.map(
                          (application) => (

                            <div
                              key={application._id}
                              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                            >

                              {/* Job Title */}

                              <h3 className="font-bold text-slate-800 text-lg">
                                {application.job?.title ||
                                  "Job Title"}
                              </h3>

                              {/* Company */}

                              <p className="text-sm text-slate-500 mt-1">
                                {application.job?.company ||
                                  "Company"}
                              </p>

                              {/* Location */}

                              {application.job?.location && (
                                <p className="text-sm text-slate-600 mt-4">
                                  📍{" "}
                                  {application.job.location}
                                </p>
                              )}

                              {/* Job Type */}

                              {application.job?.jobType && (
                                <p className="text-sm text-slate-600 mt-2">
                                  💼{" "}
                                  {application.job.jobType}
                                </p>
                              )}

                              {/* Status */}

                              <div className="mt-4">

                                <span
                                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${config.badge}`}
                                >
                                  {application.status}
                                </span>

                              </div>

                              {/* Update Status */}

                              <div className="mt-5">

                                <label className="block text-xs font-semibold text-slate-500 mb-2">
                                  Update Status
                                </label>

                                <select
                                  value={
                                    application.status
                                  }
                                  disabled={
                                    updating ===
                                    application._id
                                  }
                                  onChange={(e) =>
                                    updateStatus(
                                      application._id,
                                      e.target.value
                                    )
                                  }
                                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                >

                                  {statuses.map(
                                    (statusOption) => (

                                      <option
                                        key={
                                          statusOption
                                        }
                                        value={
                                          statusOption
                                        }
                                      >
                                        {statusOption}
                                      </option>

                                    )
                                  )}

                                </select>

                                {updating ===
                                  application._id && (
                                  <p className="text-xs text-blue-600 mt-2">
                                    Updating...
                                  </p>
                                )}

                              </div>

                              {/* View Job */}

                              {application.job?.applyUrl && (
                                <button
                                  onClick={() =>
                                    window.open(
                                      application.job.applyUrl,
                                      "_blank",
                                      "noopener,noreferrer"
                                    )
                                  }
                                  className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-sm font-medium transition"
                                >
                                  View Job
                                </button>
                              )}

                            </div>

                          )
                        )

                      )}

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        )}

      </div>
    </div>
  );
};

export default ApplicationTracker;