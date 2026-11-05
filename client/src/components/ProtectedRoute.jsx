import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import CareerCopilotModal from "./CareerCopilotModal";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* Universal Fixed/Sticky Sidebar */}
      <Sidebar />

      {/* Main Page Content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <Outlet />
      </main>

      {/* Universal Floating AI Copilot */}
      <CareerCopilotModal />
    </div>
  );
};

export default ProtectedRoute;
