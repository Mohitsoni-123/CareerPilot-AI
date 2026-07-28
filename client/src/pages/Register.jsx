import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";

import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await api.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Section */}

      <div className="hidden lg:flex bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white items-center justify-center p-12">

        <div>

          <h1 className="text-5xl font-bold">
            CareerPilot
            <span className="text-cyan-300">
              AI
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            Start Your Career Journey
          </p>

          <div className="mt-10 space-y-4 text-slate-300">

            <p>✔ Resume Analyzer</p>

            <p>✔ AI Interview</p>

            <p>✔ Skill Gap Analysis</p>

            <p>✔ Career Roadmap</p>

            <p>✔ Job Matches</p>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center justify-center bg-slate-100 p-8">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-900">
              Create Account 🚀
            </h2>

            <p className="text-slate-500 mt-2">
              Join CareerPilot AI today
            </p>

          </div>

          {error && (
            <div className="mt-6 p-3 rounded-lg bg-red-100 border border-red-300 text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            {/* Name */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <div className="relative">

                <Mail
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-3.5"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
            >
              <UserPlus size={20} />

              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="text-center mt-6 text-slate-600">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;