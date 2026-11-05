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
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "ATS Resume Analyzer",
      icon: FileText,
      path: "/resume-analyzer",
    },
    {
      name: "AI Mock Interview",
      icon: MessageSquare,
      path: "/mock-interview",
    },
    {
      name: "Job Applications",
      icon: ClipboardList,
      path: "/applications",
    },
    {
      name: "Explore Jobs",
      icon: Briefcase,
      path: "/jobs",
    },
    {
      name: "Interview Prep Q&A",
      icon: CalendarCheck,
      path: "/interview-prep",
    },
    {
      name: "Skill Gap Analysis",
      icon: Brain,
      path: "/skill-gap",
    },
    {
      name: "Career Roadmap",
      icon: Map,
      path: "/career-roadmap",
    },
    {
      name: "Candidate Profile",
      icon: User,
      path: "/profile",
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
    <aside className="w-64 shrink-0 bg-slate-950 text-white flex flex-col justify-between sticky top-0 h-screen border-r border-slate-800/80 z-40 select-none">
      <div className="p-5 overflow-y-auto no-scrollbar flex-1">
        {/* Brand Logo */}
        <div className="mb-7 flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-md shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-white flex items-center gap-1">
              CareerPilot<span className="text-cyan-400">.AI</span>
            </h1>
            <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
              Autonomous Career OS
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold"
                      : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      className={`transition ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-cyan-400"
                      }`}
                    />
                    <span className="truncate">{item.name}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* User Info & Logout Footer */}
      <div className="p-4 border-t border-slate-900 bg-slate-950/80">
        {user && (
          <div className="mb-3 px-2 py-2 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-200 truncate leading-tight">
                {user.name || "Candidate"}
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                {user.email || "student@careerpilot.ai"}
              </p>
            </div>
          </div>
        )}

        {/* Theme Mode Switcher */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-between px-3.5 py-2 mb-2 w-full text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold transition"
          title="Toggle Light / Dark Mode"
        >
          <div className="flex items-center gap-2">
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-400" />
            )}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </div>
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-400">
            {isDark ? "Dark ON" : "Light ON"}
          </span>
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-3.5 py-2 w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl text-xs font-semibold transition"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
