import { useEffect, useState } from "react";
import api from "../services/api";

const interviewTypes = [
  "Technical",
  "HR",
  "Behavioral",
  "System Design",
  "General",
];

const statuses = ["Upcoming", "Completed", "Cancelled"];

const InterviewPrep = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    interviewType: "General",
    scheduledAt: "",
    notes: "",
  });

  // ===============================
  // FETCH INTERVIEWS
  // ===============================

  const fetchInterviews = async () => {
    try {
      const response = await api.get("/interviews");

      setInterviews(response.data.interviews || []);
    } catch (error) {
      console.error("Fetch Interviews Error:", error);

      alert(error.response?.data?.message || "Failed to fetch interviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  // ===============================
  // HANDLE INPUT
  // ===============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ===============================
  // RESET FORM
  // ===============================

  const resetForm = () => {
    setFormData({
      role: "",
      company: "",
      interviewType: "General",
      scheduledAt: "",
      notes: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ===============================
  // CREATE / UPDATE INTERVIEW
  // ===============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role.trim()) {
      alert("Please enter job role");

      return;
    }

    try {
      if (editingId) {
        await api.put(`/interviews/${editingId}`, {
          ...formData,
          scheduledAt: formData.scheduledAt
            ? new Date(formData.scheduledAt).toISOString()
            : null,
        });

        alert("Interview updated successfully");
      } else {
        await api.post("/interviews", {
          ...formData,
          scheduledAt: formData.scheduledAt
            ? new Date(formData.scheduledAt).toISOString()
            : null,
        });

        alert("Interview created successfully");
      }

      resetForm();

      fetchInterviews();
    } catch (error) {
      console.error("Interview Save Error:", error);

      alert(error.response?.data?.message || "Failed to save interview");
    }
  };

  // ===============================
  // EDIT INTERVIEW
  // ===============================

  const handleEdit = (interview) => {
    setEditingId(interview._id);

    setFormData({
      role: interview.role || "",
      company: interview.company || "",
      interviewType: interview.interviewType || "General",
      scheduledAt: interview.scheduledAt
        ? new Date(interview.scheduledAt).toISOString().slice(0, 16)
        : "",
      notes: interview.notes || "",
    });

    setShowForm(true);
  };

  // ===============================
  // UPDATE STATUS
  // ===============================

  const updateStatus = async (interviewId, status) => {
    try {
      await api.put(`/interviews/${interviewId}`, {
        status,
      });

      setInterviews((previous) =>
        previous.map((interview) =>
          interview._id === interviewId
            ? {
                ...interview,
                status,
              }
            : interview,
        ),
      );
    } catch (error) {
      console.error("Update Interview Status Error:", error);

      alert(error.response?.data?.message || "Failed to update status");
    }
  };

  // ===============================
  // DELETE INTERVIEW
  // ===============================

  const deleteInterview = async (interviewId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this interview?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await api.delete(`/interviews/${interviewId}`);

      setInterviews((previous) =>
        previous.filter((interview) => interview._id !== interviewId),
      );
    } catch (error) {
      console.error("Delete Interview Error:", error);

      alert(error.response?.data?.message || "Failed to delete interview");
    }
  };

  // ===============================
  // LOADING
  // ===============================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-500">Loading interviews...</p>
        </div>
      </div>
    );
  }

  // ===============================
  // UI
  // ===============================

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Interview Preparation
            </h1>

            <p className="text-slate-500 mt-2">
              Schedule and manage your upcoming interviews.
            </p>
          </div>

          <button
            onClick={() => {
              setEditingId(null);

              setFormData({
                role: "",
                company: "",
                interviewType: "General",
                scheduledAt: "",
                notes: "",
              });

              setShowForm(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium"
          >
            + Add Interview
          </button>
        </div>

        {/* FORM */}

        {showForm && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {editingId ? "Edit Interview" : "Schedule New Interview"}
              </h2>

              <button
                onClick={resetForm}
                className="text-slate-500 hover:text-slate-900 text-xl"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* ROLE */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Role
                </label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* COMPANY */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Google"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* INTERVIEW TYPE */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interview Type
                </label>

                <select
                  name="interviewType"
                  value={formData.interviewType}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {interviewTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interview Date & Time
                </label>

                <input
                  type="datetime-local"
                  name="scheduledAt"
                  value={formData.scheduledAt}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* NOTES */}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Notes
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Add preparation notes..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* BUTTONS */}

              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  {editingId ? "Update Interview" : "Create Interview"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* INTERVIEW LIST */}

        <div className="mt-8 space-y-5">
          {interviews.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
              <div className="text-5xl">🎯</div>

              <h2 className="text-xl font-semibold mt-4">
                No Interviews Scheduled
              </h2>

              <p className="text-slate-500 mt-2">
                Add your upcoming interviews to start preparing.
              </p>
            </div>
          ) : (
            interviews.map((interview) => (
              <div
                key={interview._id}
                className="bg-white border border-slate-200 rounded-2xl p-6"
              >
                {/* TOP */}

                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                      {interview.role}
                    </h2>

                    <p className="text-slate-500 mt-1">
                      {interview.company || "Company not specified"}
                    </p>
                  </div>

                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full h-fit text-sm font-medium">
                    {interview.status}
                  </span>
                </div>

                {/* DETAILS */}

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm">
                    🎯 {interview.interviewType}
                  </span>

                  {interview.scheduledAt && (
                    <span className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm">
                      📅 {new Date(interview.scheduledAt).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* NOTES */}

                {interview.notes && (
                  <div className="mt-5 bg-slate-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-slate-700">
                      Preparation Notes
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      {interview.notes}
                    </p>
                  </div>
                )}

                {/* ACTIONS */}

                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <select
                    value={interview.status}
                    onChange={(e) =>
                      updateStatus(interview._id, e.target.value)
                    }
                    className="border border-slate-300 rounded-lg px-3 py-2"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => handleEdit(interview)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteInterview(interview._id)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
