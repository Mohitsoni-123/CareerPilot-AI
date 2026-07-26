import { useEffect, useState } from "react";
import api from "../services/api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  // AI Match States
  const [selectedJob, setSelectedJob] = useState(null);
  const [matchResult, setMatchResult] = useState(null);
  const [matching, setMatching] = useState(false);

  // Apply State
  const [applying, setApplying] = useState(false);

  // Save Job State
  const [saving, setSaving] = useState(false);

  // ==========================================
  // FETCH JOBS
  // ==========================================

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs");

      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Fetch Jobs Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to fetch jobs"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // AI JOB MATCH
  // ==========================================

  const handleMatch = async (jobId) => {
    setMatching(true);

    // Clear previous result
    setMatchResult(null);

    try {
      const response = await api.post(
        "/jobs/match",
        {
          jobId,
        }
      );

      setSelectedJob(jobId);

      setMatchResult(
        response.data.result
      );
    } catch (error) {
      console.error(
        "AI Matching Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "AI matching failed"
      );
    } finally {
      setMatching(false);
    }
  };

  // ==========================================
  // APPLY FOR JOB
  // ==========================================

  const handleApply = async (jobId) => {
    setApplying(true);

    try {
      const response = await api.post(
        "/applications",
        {
          jobId,
        }
      );

      alert(
        response.data.message
      );

      // Find selected job
      const job = jobs.find(
        (item) => item._id === jobId
      );

      // Open external application URL
      if (job?.applyUrl) {
        window.open(
          job.applyUrl,
          "_blank"
        );
      }
    } catch (error) {
      console.error(
        "Apply Job Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to apply"
      );
    } finally {
      setApplying(false);
    }
  };

  // ==========================================
  // SAVE JOB
  // ==========================================

  const handleSaveJob = async (jobId) => {
    setSaving(true);

    try {
      const response = await api.post(
        "/saved-jobs",
        {
          jobId,
        }
      );

      alert(
        response.data.message
      );
    } catch (error) {
      console.error(
        "Save Job Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to save job"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // FETCH JOBS ON PAGE LOAD
  // ==========================================

  useEffect(() => {
    fetchJobs();
  }, []);

  // ==========================================
  // LOADING SCREEN
  // ==========================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-600">
            Loading jobs...
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN UI
  // ==========================================

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* ================================= */}
        {/* PAGE HEADER */}
        {/* ================================= */}

        <div>
          <h1 className="text-3xl font-bold">
            Job Matches
          </h1>

          <p className="text-slate-500 mt-2">
            Find opportunities that match
            your skills and career goals.
          </p>
        </div>

        {/* ================================= */}
        {/* JOB LIST */}
        {/* ================================= */}

        <div className="grid gap-5 mt-8">

          {jobs.length === 0 ? (

            // No Jobs
            <div className="bg-white border rounded-2xl p-10 text-center">

              <h2 className="text-xl font-semibold">
                No Jobs Available
              </h2>

              <p className="text-slate-500 mt-2">
                No job opportunities are
                available right now.
              </p>

            </div>

          ) : (

            // IMPORTANT:
            // Only ONE jobs.map() here
            jobs.map((job) => (

              <div
                key={job._id}
                className="bg-white border rounded-2xl p-6"
              >

                {/* ================================= */}
                {/* JOB HEADER */}
                {/* ================================= */}

                <div className="flex justify-between gap-4">

                  <div>

                    <h2 className="text-xl font-semibold">
                      {job.title}
                    </h2>

                    <p className="text-slate-500 mt-1">
                      {job.company}
                    </p>

                  </div>

                  <span className="text-blue-600 font-medium whitespace-nowrap">
                    {job.jobType}
                  </span>

                </div>


                {/* ================================= */}
                {/* LOCATION & SALARY */}
                {/* ================================= */}

                <div className="flex flex-wrap gap-3 mt-4">

                  <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                    📍 {job.location}
                  </span>

                  <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                    💰 {job.salary}
                  </span>

                </div>


                {/* ================================= */}
                {/* JOB DESCRIPTION */}
                {/* ================================= */}

                <p className="text-slate-600 mt-5">
                  {job.description}
                </p>


                {/* ================================= */}
                {/* JOB SKILLS */}
                {/* ================================= */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {job.skills?.map(
                    (skill) => (

                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>

                    )
                  )}

                </div>


                {/* ================================= */}
                {/* ACTION BUTTONS */}
                {/* ================================= */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {/* AI MATCH */}

                  <button
                    onClick={() =>
                      handleMatch(
                        job._id
                      )
                    }
                    disabled={matching}
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2 rounded-lg transition"
                  >
                    {matching &&
                    selectedJob ===
                      job._id
                      ? "Analyzing..."
                      : "🤖 AI Match"}
                  </button>


                  {/* SAVE JOB */}

                  <button
                    onClick={() =>
                      handleSaveJob(
                        job._id
                      )
                    }
                    disabled={saving}
                    className="border hover:bg-slate-50 disabled:opacity-50 px-5 py-2 rounded-lg transition"
                  >
                    {saving
                      ? "Saving..."
                      : "⭐ Save"}
                  </button>


                  {/* APPLY */}

                  <button
                    onClick={() =>
                      handleApply(
                        job._id
                      )
                    }
                    disabled={applying}
                    className="border border-green-600 text-green-600 hover:bg-green-50 disabled:opacity-50 px-5 py-2 rounded-lg transition"
                  >
                    {applying
                      ? "Applying..."
                      : "Apply"}
                  </button>

                </div>


                {/* ================================= */}
                {/* AI MATCH RESULT */}
                {/* ================================= */}

                {matchResult &&
                  selectedJob ===
                    job._id && (

                    <div className="mt-8 border-t pt-6">

                      {/* AI RESULT HEADER */}

                      <h3 className="text-xl font-semibold">
                        🤖 AI Job Match Analysis
                      </h3>


                      {/* MATCH SCORE */}

                      <div className="mt-5">

                        <p className="text-sm text-slate-500">
                          Your compatibility
                          with this job
                        </p>

                        <div className="text-5xl font-bold text-blue-600 mt-2">
                          {
                            matchResult.matchScore
                          }
                          %
                        </div>

                      </div>


                      {/* RECOMMENDATION */}

                      <div className="mt-6">

                        <h4 className="font-semibold">
                          AI Recommendation
                        </h4>

                        <p className="text-slate-600 mt-2">
                          {
                            matchResult.recommendation
                          }
                        </p>

                      </div>


                      {/* MATCHED SKILLS */}

                      <div className="mt-6">

                        <h4 className="font-semibold">
                          Matched Skills
                        </h4>

                        <div className="flex flex-wrap gap-2 mt-3">

                          {matchResult.matchedSkills?.map(
                            (skill) => (

                              <span
                                key={skill}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                              >
                                ✓ {skill}
                              </span>

                            )
                          )}

                        </div>

                      </div>


                      {/* MISSING SKILLS */}

                      <div className="mt-6">

                        <h4 className="font-semibold">
                          Missing Skills
                        </h4>

                        <div className="flex flex-wrap gap-2 mt-3">

                          {matchResult.missingSkills?.map(
                            (skill) => (

                              <span
                                key={skill}
                                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                              >
                                {skill}
                              </span>

                            )
                          )}

                        </div>

                      </div>


                      {/* IMPROVEMENT PLAN */}

                      <div className="mt-6">

                        <h4 className="font-semibold">
                          Improvement Plan
                        </h4>

                        <ul className="mt-3 space-y-2">

                          {matchResult.improvementPlan?.map(
                            (
                              item,
                              index
                            ) => (

                              <li
                                key={index}
                                className="text-slate-600 bg-slate-50 p-3 rounded-lg"
                              >
                                <span className="font-medium">
                                  {index + 1}.
                                </span>{" "}
                                {item}
                              </li>

                            )
                          )}

                        </ul>

                      </div>

                    </div>

                  )}

              </div>

            ))

          )}

        </div>

      </div>
    </div>
  );
};

export default Jobs;