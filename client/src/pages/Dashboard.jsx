import {
  FileText,
  Briefcase,
  ClipboardList,
  Target,
} from "lucide-react";

import { useSelector } from "react-redux";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const Dashboard = () => {

  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}

      <Sidebar />


      {/* Main Content */}

      <main className="flex-1 p-8">

        {/* Welcome */}

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-slate-900">

            Good morning, {user?.name} 👋

          </h1>

          <p className="text-slate-500 mt-2">

            Here's your career overview for today.

          </p>

        </div>


        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Resume ATS Score"
            value="82%"
            description="Good profile"
            icon={FileText}
          />

          <StatCard
            title="Job Matches"
            value="24"
            description="New matches"
            icon={Target}
          />

          <StatCard
            title="Applications"
            value="12"
            description="Total applications"
            icon={ClipboardList}
          />

          <StatCard
            title="Interview Ready"
            value="76%"
            description="Keep improving"
            icon={Briefcase}
          />

        </div>


        {/* Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">


          {/* Career Progress */}

          <div className="bg-white rounded-2xl border border-slate-200 p-6">

            <h2 className="text-xl font-semibold">
              Career Profile
            </h2>

            <p className="text-slate-500 mt-2">
              Complete your profile to get better AI recommendations.
            </p>


            <div className="mt-6">

              <div className="flex justify-between mb-2">

                <span>
                  Profile Completion
                </span>

                <span>
                  70%
                </span>

              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">

                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: "70%",
                  }}
                />

              </div>

            </div>

          </div>


          {/* AI Recommendation */}

          <div className="bg-slate-950 text-white rounded-2xl p-6">

            <h2 className="text-xl font-semibold">
              🤖 AI Career Insight
            </h2>

            <p className="text-slate-300 mt-3">

              Based on your current skills, you should focus
              on improving your backend development and system
              design knowledge.

            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">

              View Career Roadmap

            </button>

          </div>

        </div>


        {/* Recommended Jobs */}

        <div className="mt-8">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-2xl font-bold">
              Recommended Jobs
            </h2>

            <button className="text-blue-600">
              View All
            </button>

          </div>


          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold text-lg">
                  Full Stack Developer
                </h3>

                <p className="text-slate-500">
                  Tech Company • Remote
                </p>

              </div>

              <div className="text-right">

                <p className="text-green-600 font-semibold">
                  92% Match
                </p>

                <button className="text-blue-600 mt-2">
                  View Job →
                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;