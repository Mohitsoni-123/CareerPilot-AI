import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Eye, EyeOff, LogIn } from "lucide-react";

import api from "../services/api";
import { login } from "../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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

    setLoading(true);
    setError("");

    try {
      const response = await api.post(
        "/auth/login",
        formData
      );

      dispatch(
        login({
          token: response.data.token,
          user: response.data.user,
        })
      );

      navigate("/dashboard");

    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left */}

      <div className="hidden lg:flex bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white items-center justify-center p-12">

        <div>

          <h1 className="text-5xl font-bold">
            CareerPilot
            <span className="text-cyan-300">
              AI
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            Your AI Career Companion
          </p>

          <div className="mt-10 space-y-4 text-slate-300">

            <p>✔ Resume Analyzer</p>

            <p>✔ AI Interview</p>

            <p>✔ Job Matches</p>

            <p>✔ Skill Gap Analysis</p>

            <p>✔ Career Roadmap</p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center justify-center bg-slate-100 p-8">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-900">
              Welcome Back 👋
            </h2>

            <p className="text-slate-500 mt-2">
              Login to continue
            </p>

          </div>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mt-6">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            <div>

              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
            >
              <LogIn size={18} />

              {loading
                ? "Logging in..."
                : "Login"}

            </button>

          </form>

          <p className="text-center mt-6 text-slate-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;