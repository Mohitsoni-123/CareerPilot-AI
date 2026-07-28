import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          CareerPilot AI
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="hover:text-cyan-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-extrabold">
          Build Your <span className="text-cyan-400">Career</span> with AI
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Analyze your resume, discover better jobs, identify skill gaps,
          prepare for interviews, and track applications—all in one platform.
        </p>

        <div className="mt-10 flex gap-5">
          <Link
            to="/register"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500"
          >
            Login
          </Link>
        </div>

        {/* Small Features */}
        <div className="flex gap-8 mt-12 text-gray-300 text-sm">
          <span>✅ Resume Analyzer</span>
          <span>✅ AI Job Finder</span>
          <span>✅ Mock Interview</span>
        </div>
      </div>

    </div>
  );
};

export default Home;