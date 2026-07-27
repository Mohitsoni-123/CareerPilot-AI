import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  ClipboardList,
  MessageSquare,
  Brain,
  Map,
  Settings,
  LogOut,
  CalendarCheck,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../redux/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "My Profile",
      icon: User,
      path: "/profile",
    },
    {
      name: "Resume Analyzer",
      icon: FileText,
      path: "/resume-analyzer",
    },
    {
      name: "Job Matches",
      icon: Briefcase,
      path: "/jobs",
    },
    {
      name: "Applications",
      icon: ClipboardList,
      path: "/applications",
    },
    {
      name: "Interview Preparation",
      icon: CalendarCheck,
      path: "/interview-prep",
    },
    {
      name: "AI Interview",
      icon: MessageSquare,
      path: "/mock-interview",
    },
    {
      name: "Skill Gap",
      icon: Brain,
      path: "/skill-gap",
    },
    {
      name: "Career Roadmap",
      icon: Map,
      path: "/career-roadmap",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-5">

      {/* Logo */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          CareerPilot
          <span className="text-blue-500">
            AI
          </span>
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Your AI Career Companion
        </p>
      </div>

      {/* Navigation */}

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 mt-8 w-full text-slate-400 hover:text-white hover:bg-red-500/20 rounded-lg"
      >
        <LogOut size={20} />

        Logout
      </button>

    </aside>
  );
};

export default Sidebar;