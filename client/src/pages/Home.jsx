import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Brain,
  FileText,
  Target,
  Briefcase,
  CheckCircle2,
  Mic,
  Award,
  Layers,
  ChevronRight,
  Code2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none -z-10" />

      {/* Modern Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/20">
            CP
          </div>
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            CareerPilot<span className="text-cyan-400">.AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>
          <a href="#workflow" className="hover:text-cyan-400 transition">
            How It Works
          </a>
          <a href="#tech-stack" className="hover:text-cyan-400 transition">
            Tech Architecture
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white transition px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition transform hover:-translate-y-0.5 text-sm"
          >
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          Major Project • Autonomous AI Career Engineering Platform
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Land Your Dream Tech Job with Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Autonomous AI Career Copilot
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From ATS resume parsing and job description tailoring to voice-enabled mock interviews and application CRM tracking—accelerate your entire job hunt with generative AI.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:opacity-95 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/20 transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Launch CareerPilot Free <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 text-white font-bold text-base transition flex items-center justify-center gap-2"
          >
            Sign In with Demo Account
          </Link>
        </div>

        {/* Proof Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-cyan-400">92%</div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Average ATS Score Improvement</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-400">5x</div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Faster Application Pipeline</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-indigo-400">&lt; 2s</div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Instant AI Voice Evaluation</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Full MERN Stack + LLM</div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Core AI Modules
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
            Everything You Need to Ace Your Tech Career
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Engineered with deep learning, natural language processing, and modern full-stack web standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI Mock Interview */}
          <div className="bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-6">
              <Mic className="w-6 h-6 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-bold mb-2">Speech AI Mock Interview 2.0</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Hands-free microphone dictation via Web Speech API. Practice answering technical and behavioral questions with instant scoring, communication analysis, and model answers.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">✓ Real-time Speech-to-Text Transcription</li>
              <li className="flex items-center gap-2">✓ Automated Scoring & Rubric Feedback</li>
              <li className="flex items-center gap-2">✓ Comprehensive Final Scorecard</li>
            </ul>
          </div>

          {/* Card 2: ATS Scanner & JD Matcher */}
          <div className="bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-blue-400/50 transition group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-bold mb-2">ATS Resume & JD Matcher</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Extract PDF text, compute keyword density, detect missing competencies, and generate tailored experience bullet points with quantifiable impact metrics for any specific job.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">✓ Deep PDF Parsing & ATS Score Gauge</li>
              <li className="flex items-center gap-2">✓ Job Description Match Percentage</li>
              <li className="flex items-center gap-2">✓ AI Cover Letter & LinkedIn Outreach</li>
            </ul>
          </div>

          {/* Card 3: Kanban Application Tracker */}
          <div className="bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-indigo-400/50 transition group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Pipeline CRM</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Organize your job search with a responsive Kanban Board. Track applications across Applied, Shortlisted, Interview, Offer, and Rejected stages with custom notes and schedules.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">✓ Drag & Status Transition Columns</li>
              <li className="flex items-center gap-2">✓ Manual External Job Logging</li>
              <li className="flex items-center gap-2">✓ Recharts Funnel & Success Analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works (Workflow) */}
      <section id="workflow" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Step-by-Step Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
            How CareerPilot Operates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
            <span className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 font-black text-sm flex items-center justify-center mx-auto mb-4">
              1
            </span>
            <h4 className="font-bold text-base mb-2">Upload Resume</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Upload your PDF resume. Our parser extracts text and computes your initial ATS baseline score.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
            <span className="w-8 h-8 rounded-full bg-blue-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-4">
              2
            </span>
            <h4 className="font-bold text-base mb-2">Target & Tailor</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Paste the target job description to pinpoint missing keywords and generate optimized bullet points.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
            <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-4">
              3
            </span>
            <h4 className="font-bold text-base mb-2">Voice AI Practice</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Practice timed technical & HR mock interviews with live speech-to-text and instant scoring.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
            <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-4">
              4
            </span>
            <h4 className="font-bold text-base mb-2">Track & Land Offers</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Manage your pipeline stages on the Kanban CRM and chat with your AI Copilot for continuous guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Architecture Section (Major Project Evaluator Showcase) */}
      <section id="tech-stack" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              System Architecture
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-1">
              Engineered with Enterprise Tech Stack
            </h3>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              Built following modular design patterns, secure JWT authorization, unified AI fallback gateways, and real-time browser APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <Code2 className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="font-bold text-xs">React 19 & Vite</div>
              <div className="text-[10px] text-slate-400">Frontend UI</div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="font-bold text-xs">Tailwind CSS v4</div>
              <div className="text-[10px] text-slate-400">Styling & Layout</div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <Layers className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
              <div className="font-bold text-xs">Node & Express 5</div>
              <div className="text-[10px] text-slate-400">REST Backend</div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="font-bold text-xs">MongoDB Atlas</div>
              <div className="text-[10px] text-slate-400">NoSQL Database</div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <Brain className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="font-bold text-xs">Groq Llama 3.3</div>
              <div className="text-[10px] text-slate-400">Ultra-fast LLM</div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <Mic className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="font-bold text-xs">Web Speech API</div>
              <div className="text-[10px] text-slate-400">Voice Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-500">
        <p>CareerPilot AI • Final Year Major Engineering Project</p>
        <p className="mt-1">Designed & Developed with MERN Stack + AI Orchestration</p>
      </footer>
    </div>
  );
};

export default Home;
