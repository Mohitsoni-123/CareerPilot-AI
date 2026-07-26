import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Jobs from "./pages/Jobs";
import ApplicationTracker from "./pages/ApplicationTracker";
import SavedJobs from "./pages/SavedJobs";

import Applications from "./pages/Applications";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/applications" element={<ApplicationTracker />} />

          <Route path="/saved-jobs" element={<SavedJobs />} />

          <Route
            path="/applications"
            element={
                <Applications />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
