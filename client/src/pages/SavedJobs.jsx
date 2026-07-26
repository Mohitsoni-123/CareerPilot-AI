import { useEffect, useState } from "react";
import api from "../services/api";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Saved Jobs
  const fetchSavedJobs = async () => {
    try {
      const response = await api.get(
        "/saved-jobs"
      );

      setSavedJobs(
        response.data.savedJobs
      );
    } catch (error) {
      console.error(
        "Fetch Saved Jobs Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to fetch saved jobs"
      );
    } finally {
      setLoading(false);
    }
  };

  // Remove Saved Job
  const handleRemove = async (jobId) => {
    try {
      await api.delete(
        `/saved-jobs/${jobId}`
      );

      // Update UI immediately
      setSavedJobs((previousJobs) =>
        previousJobs.filter(
          (item) =>
            item.job?._id !== jobId
        )
      );

      alert(
        "Job removed from saved jobs"
      );
    } catch (error) {
      console.error(
        "Remove Saved Job Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to remove job"
      );
    }
  };

  // Load Saved Jobs
  useEffect(() => {
    fetchSavedJobs();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-600">
            Loading saved jobs...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <h1 className="text-3xl font-bold">
          Saved Jobs
        </h1>

        <p className="text-slate-500 mt-2">
          Jobs you saved for later.
        </p>

        {/* No Jobs */}

        {savedJobs.length === 0 ? (

          <div className="bg-white border rounded-2xl p-10 mt-8 text-center">

            <div className="text-5xl">
              ⭐
            </div>

            <h2 className="text-xl font-semibold mt-4">
              No Saved Jobs
            </h2>

            <p className="text-slate-500 mt-2">
              You haven't saved any jobs yet.
            </p>

          </div>

        ) : (

          <div className="grid gap-5 mt-8">

            {savedJobs.map(
              (savedJob) => {

                const job =
                  savedJob.job;

                return (
                  <div
                    key={savedJob._id}
                    className="bg-white border rounded-2xl p-6"
                  >

                    {/* Job Header */}

                    <div className="flex justify-between gap-4">

                      <div>

                        <h2 className="text-xl font-semibold">
                          {job?.title}
                        </h2>

                        <p className="text-slate-500 mt-1">
                          {job?.company}
                        </p>

                      </div>

                      <span className="text-blue-600 font-medium">
                        {job?.jobType}
                      </span>

                    </div>

                    {/* Location & Salary */}

                    <div className="flex flex-wrap gap-3 mt-4">

                      <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                        📍 {job?.location}
                      </span>

                      <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                        💰 {job?.salary}
                      </span>

                    </div>

                    {/* Description */}

                    <p className="text-slate-600 mt-5">
                      {job?.description}
                    </p>

                    {/* Skills */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {job?.skills?.map(
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

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-3 mt-6">

                      {/* Apply */}

                      <button
                        onClick={() => {

                          if (
                            job?.applyUrl
                          ) {
                            window.open(
                              job.applyUrl,
                              "_blank"
                            );
                          }

                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                      >
                        Apply
                      </button>

                      {/* Remove */}

                      <button
                        onClick={() =>
                          handleRemove(
                            job._id
                          )
                        }
                        className="border border-red-500 text-red-500 hover:bg-red-50 px-5 py-2 rounded-lg"
                      >
                        🗑 Remove
                      </button>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        )}

      </div>
    </div>
  );
};

export default SavedJobs;