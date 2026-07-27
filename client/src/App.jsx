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

import InterviewPrep from "./pages/InterviewPrep";

import MockInterview from "./pages/MockInterview";

import SkillGap from "./pages/SkillGap";

import CareerRoadmap from "./pages/CareerRoadmap";
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

          {/* <Route
            path="/applications"
            element={
                <Applications />
            }
          /> */}

          <Route path="/interview-prep" element={<InterviewPrep />} />

          <Route path="/mock-interview" element={<MockInterview />} />

          <Route path="/skill-gap" element={<SkillGap />} />

          <Route path="/career-roadmap" element={<CareerRoadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
