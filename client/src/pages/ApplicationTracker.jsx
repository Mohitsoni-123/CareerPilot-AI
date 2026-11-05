import { useEffect, useState } from "react";
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  Calendar,
  DollarSign,
  MapPin,
  ExternalLink,
  Trash2,
  Columns,
  List,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import api from "../services/api";

const COLUMNS = [
  { id: "Applied", title: "Applied", color: "blue", border: "border-blue-500", bg: "bg-blue-50" },
  { id: "Shortlisted", title: "Shortlisted", color: "amber", border: "border-amber-500", bg: "bg-amber-50" },
  { id: "Interview", title: "Interviewing", color: "purple", border: "border-purple-500", bg: "bg-purple-50" },
  { id: "Selected", title: "Offer / Selected", color: "emerald", border: "border-emerald-500", bg: "bg-emerald-50" },
  { id: "Rejected", title: "Archived / Rejected", color: "slate", border: "border-slate-400", bg: "bg-slate-100" },
];

const ApplicationTracker = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("kanban"); // "kanban" or "table"
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Modal State for adding manual application
  const [showAddModal, setShowAddModal] = useState(false);
  const [submittingManual, setSubmittingManual] = useState(false);
  const [manualForm, setManualForm] = useState({
    company: "",
    role: "",
    location: "Remote",
    salary: "",
    jobUrl: "",
    status: "Applied",
    priority: "Medium",
    interviewDate: "",
    notes: "",
  });

  // Fetch Applications
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

  useEffect(() => {
    fetchApplications();
  }, []);

  // Update Status
  const handleUpdateStatus = async (applicationId, newStatus) => {
    try {
      const response = await api.put(`/applications/${applicationId}`, {
        status: newStatus,
      });

      setApplications((prev) =>
        prev.map((app) =>
          app._id === applicationId
            ? { ...app, status: response.data.application.status }
            : app
        )
      );
    } catch (error) {
      console.error("Update Status Error:", error);
      alert("Failed to update status");
    }
  };

  // Delete Application
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await api.delete(`/applications/${id}`);
      setApplications((prev) => prev.filter((a) => a._id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete application");
    }
  };

  // Add Manual Application
  const handleAddManual = async (e) => {
    e.preventDefault();
    if (!manualForm.company || !manualForm.role) {
      alert("Company and Role are required");
      return;
    }

    setSubmittingManual(true);
    try {
      const response = await api.post("/applications/manual", manualForm);
      setApplications((prev) => [response.data.application, ...prev]);
      setShowAddModal(false);
      setManualForm({
        company: "",
        role: "",
        location: "Remote",
        salary: "",
        jobUrl: "",
        status: "Applied",
        priority: "Medium",
        interviewDate: "",
        notes: "",
      });
    } catch (error) {
      console.error("Add manual error:", error);
      alert(error.response?.data?.message || "Failed to add application");
    } finally {
      setSubmittingManual(false);
    }
  };

  // Filtered Applications
  const filteredApps = applications.filter((app) => {
    const comp = app.company || app.job?.company || "";
    const rol = app.role || app.job?.title || "";
    const matchesSearch =
      comp.toLowerCase().includes(search.toLowerCase()) ||
      rol.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" /> Job Search CRM
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Application Tracker & Pipeline
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Track job leads across hiring stages, schedule interviews, and organize your job search pipeline.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="bg-white border border-slate-200 p-1 rounded-xl flex items-center shadow-sm">
              <button
                onClick={() => setViewMode("kanban")}
                className={`p-2 rounded-lg flex items-center gap-1.5 text-xs font-bold transition ${
                  viewMode === "kanban"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Kanban Board View"
              >
                <Columns className="w-4 h-4" /> Kanban
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-lg flex items-center gap-1.5 text-xs font-bold transition ${
                  viewMode === "table"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Table List View"
              >
                <List className="w-4 h-4" /> Table
              </button>
            </div>

            {/* Add Application Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Application
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by company or role..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Status:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Stages ({applications.length})</option>
              <option value="Applied">Applied</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Interview">Interview</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* ================================================= */}
        {/* VIEW 1: KANBAN BOARD */}
        {/* ================================================= */}
        {viewMode === "kanban" && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
            {COLUMNS.map((col) => {
              const colApps = filteredApps.filter(
                (app) => app.status === col.id
              );

              return (
                <div
                  key={col.id}
                  className="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-3.5 flex flex-col min-h-[500px]"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          col.color === "blue"
                            ? "bg-blue-600"
                            : col.color === "amber"
                            ? "bg-amber-500"
                            : col.color === "purple"
                            ? "bg-purple-600"
                            : col.color === "emerald"
                            ? "bg-emerald-600"
                            : "bg-slate-500"
                        }`}
                      />
                      <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                        {col.title}
                      </h3>
                    </div>
                    <span className="bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full text-xs font-bold">
                      {colApps.length}
                    </span>
                  </div>

                  {/* Cards */}
                  <div className="flex-1 space-y-3 overflow-y-auto">
                    {colApps.map((app) => {
                      const company = app.company || app.job?.company || "Unknown Company";
                      const roleTitle = app.role || app.job?.title || "Role";
                      const location = app.location || app.job?.location || "Remote";
                      const salary = app.salary || app.job?.salary || "";

                      return (
                        <div
                          key={app._id}
                          className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-4 shadow-sm hover:shadow transition group relative"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-bold text-slate-900 text-sm leading-snug">
                                {roleTitle}
                              </h4>
                              <p className="text-xs font-semibold text-blue-600 mt-0.5">
                                {company}
                              </p>
                            </div>

                            <button
                              onClick={() => handleDelete(app._id)}
                              className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition p-1"
                              title="Delete Application"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Badges / Meta */}
                          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                            {location && (
                              <span className="bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                                <MapPin className="w-2.5 h-2.5 text-slate-400" /> {location}
                              </span>
                            )}
                            {salary && (
                              <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md flex items-center gap-1">
                                <DollarSign className="w-2.5 h-2.5" /> {salary}
                              </span>
                            )}
                            {app.priority && (
                              <span
                                className={`px-2 py-0.5 rounded-md font-semibold ${
                                  app.priority === "High"
                                    ? "bg-red-50 text-red-600"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                {app.priority}
                              </span>
                            )}
                          </div>

                          {/* Notes */}
                          {app.notes && (
                            <p className="mt-2 text-[11px] text-slate-500 line-clamp-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                              "{app.notes}"
                            </p>
                          )}

                          {/* Move Status Selector */}
                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-[10px] text-slate-400 uppercase font-semibold">
                              Move to:
                            </span>
                            <select
                              value={app.status}
                              onChange={(e) =>
                                handleUpdateStatus(app._id, e.target.value)
                              }
                              className="text-[11px] font-bold border border-slate-200 rounded-lg px-2 py-1 outline-none bg-slate-50 text-slate-700"
                            >
                              <option value="Applied">Applied</option>
                              <option value="Shortlisted">Shortlisted</option>
                              <option value="Interview">Interview</option>
                              <option value="Selected">Selected</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                        </div>
                      );
                    })}

                    {colApps.length === 0 && (
                      <div className="h-28 flex items-center justify-center border border-dashed border-slate-300 rounded-xl text-slate-400 text-xs font-medium">
                        No applications
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================================================= */}
        {/* VIEW 2: TABLE LIST VIEW */}
        {/* ================================================= */}
        {viewMode === "table" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6">Company & Role</th>
                    <th className="py-4 px-6">Location</th>
                    <th className="py-4 px-6">Compensation</th>
                    <th className="py-4 px-6">Stage</th>
                    <th className="py-4 px-6">Priority</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredApps.map((app) => {
                    const company = app.company || app.job?.company || "Unknown";
                    const roleTitle = app.role || app.job?.title || "Role";

                    return (
                      <tr key={app._id} className="hover:bg-slate-50/70 transition">
                        <td className="py-4 px-6">
                          <p className="font-bold text-slate-900">{roleTitle}</p>
                          <p className="text-xs text-blue-600 font-semibold">{company}</p>
                        </td>
                        <td className="py-4 px-6 text-slate-600 text-xs">
                          {app.location || app.job?.location || "Remote"}
                        </td>
                        <td className="py-4 px-6 text-slate-600 text-xs font-medium">
                          {app.salary || app.job?.salary || "-"}
                        </td>
                        <td className="py-4 px-6">
                          <select
                            value={app.status}
                            onChange={(e) =>
                              handleUpdateStatus(app._id, e.target.value)
                            }
                            className="text-xs font-bold border border-slate-200 rounded-lg px-2.5 py-1 outline-none bg-slate-50 text-slate-700"
                          >
                            <option value="Applied">Applied</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Interview">Interview</option>
                            <option value="Selected">Selected</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              app.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {app.priority || "Medium"}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDelete(app._id)}
                            className="text-slate-400 hover:text-red-600 p-1 transition"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredApps.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-400 text-sm">
                        No applications found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* MODAL: ADD MANUAL APPLICATION */}
        {/* ================================================= */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
              <h3 className="text-xl font-bold text-slate-900">
                Log New Job Application
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Keep track of jobs you applied to on LinkedIn, company portals, or referrals.
              </p>

              <form onSubmit={handleAddManual} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      value={manualForm.company}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, company: e.target.value })
                      }
                      placeholder="e.g. Google"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Role Title *
                    </label>
                    <input
                      type="text"
                      value={manualForm.role}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, role: e.target.value })
                      }
                      placeholder="e.g. Software Engineer"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={manualForm.location}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, location: e.target.value })
                      }
                      placeholder="Remote / City"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Compensation
                    </label>
                    <input
                      type="text"
                      value={manualForm.salary}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, salary: e.target.value })
                      }
                      placeholder="e.g. $90,000"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Stage
                    </label>
                    <select
                      value={manualForm.status}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, status: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Applied">Applied</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Interview">Interview</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Priority
                    </label>
                    <select
                      value={manualForm.priority}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, priority: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="High">High Priority</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Notes / Referral Contact
                  </label>
                  <textarea
                    value={manualForm.notes}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, notes: e.target.value })
                    }
                    rows={2}
                    placeholder="e.g. Referred by Sarah, interview scheduled for Tuesday"
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submittingManual}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow transition"
                  >
                    {submittingManual ? "Saving..." : "Save Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTracker;
