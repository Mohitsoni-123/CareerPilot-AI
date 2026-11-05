import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Trash2,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { useSelector } from "react-redux";
import api from "../services/api";

const QUICK_PROMPTS = [
  "How to answer 'Tell me about yourself'?",
  "Review my resume bullet points with XYZ formula",
  "How to negotiate entry or mid-level salary?",
  "Top 3 questions to ask the interviewer at the end",
  "Explain STAR method with a real engineering example",
  "MERN Stack developer interview roadmap",
];

const CareerCopilotModal = () => {
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hey ${
        user?.name ? user.name.split(" ")[0] : "there"
      }! 👋 I'm your **CareerPilot AI Senior Tech Mentor**.\n\nWhether you need help cracking a tough interview, optimizing your ATS resume, practicing behavioral questions (STAR method), or negotiating an offer—I'm here for you! You can type or click the 🎤 mic to talk to me. What are you preparing for today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognizer = new SpeechRecognition();
      recognizer.continuous = false;
      recognizer.interimResults = false;
      recognizer.lang = "en-US";

      recognizer.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognizer.onerror = () => {
        setIsListening(false);
      };

      recognizer.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognizer;
    }
  }, []);

  const toggleListen = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn("Speech error:", err);
      }
    }
  };

  // Text to Speech
  const speakMessage = (text) => {
    if (!window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const cleanText = text.replace(/[*#_`]/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const copyText = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const clearChat = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setMessages([
      {
        role: "assistant",
        content: `Chat history cleared! How can I help you today, ${
          user?.name ? user.name.split(" ")[0] : "friend"
        }?`,
      },
    ]);
  };

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    if (isSpeaking && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const userMessage = { role: "user", content: query };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await api.post("/career-assistant/chat", {
        message: query,
        history: newMessages.slice(-5),
      });

      const reply =
        response.data?.reply ||
        generateLocalSmartAdvice(query, user?.name);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (error) {
      console.warn("Server chat call failed, using client fallback intelligence:", error);
      const fallbackReply = generateLocalSmartAdvice(query, user?.name);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fallbackReply,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Conversational Client-Side Intelligence
  const generateLocalSmartAdvice = (query, userName) => {
    const q = query.toLowerCase().trim();
    const name = userName ? userName.split(" ")[0] : "friend";

    // 1. Greetings
    if (
      /^(hi|hello|hey|yo|namaste|hola|greetings|good morning|good afternoon|good evening)\b/i.test(q) ||
      q === "hi" || q === "hello" || q === "hey"
    ) {
      return `Hey ${name}! 👋 Great to connect with you. I'm your **CareerPilot AI Senior Tech Mentor**!\n\nI can help you with:\n• 🎙️ **Mock Interviews**: Answering behavioral (STAR method) and technical interview questions\n• 📄 **Resume ATS Polish**: Crafting high-impact bullet points with the Google XYZ formula\n• 💰 **Salary Negotiation**: Tactics and scripts to maximize your compensation\n• 🗺️ **Career Roadmaps**: Guidance on MERN, Frontend, Backend, or DevOps stacks\n\nWhat are you currently preparing for? Tell me what you'd like to work on!`;
    }

    // 2. Kaise ho / How are you
    if (
      q.includes("how are you") ||
      q.includes("kaise ho") ||
      q.includes("kya haal") ||
      q.includes("kaisa hai")
    ) {
      return `Main bilkul badhiya hoon, ${name}! 😊 Thank you for asking. I'm energized and ready to help you crack your upcoming tech interviews.\n\nAre you currently prepping for a technical coding round, HR/behavioral interview, or updating your resume for new applications?`;
    }

    // 3. Who are you / Features
    if (
      q.includes("who are you") ||
      q.includes("what can you do") ||
      q.includes("kya kar sakte ho") ||
      q.includes("features") ||
      q.includes("help me")
    ) {
      return `I am **CareerPilot Copilot** 🚀, your autonomous AI Career Engineering Mentor built into this platform.\n\nHere is how I can assist you right now:\n1. **Interview Practice**: Give me a question like *"Tell me about yourself"* or *"Explain useEffect"*, and I'll evaluate your response.\n2. **Resume Optimizer**: Paste any experience bullet, and I'll rewrite it with measurable business impact.\n3. **Salary & Offer Negotiation**: Ask for negotiation scripts when an HR gives you a lowball offer.\n4. **Platform Navigation**: I can guide you through our **ATS Resume Analyzer**, **Voice Mock Interviews**, **Skill Gap Matrix**, and **Kanban Application CRM**.\n\nTry asking me: *"How should I answer 'What is your greatest weakness'?"* or *"Explain Event Loop in Node.js"!*`;
    }

    if (q.includes("tell me about yourself") || q.includes("intro") || q.includes("introduce")) {
      return `Here is a bulletproof 90-second formula for **"Tell Me About Yourself"**:\n\n1. **The Present (30s)**: "I'm a software developer with hands-on expertise in full-stack web applications using React, Node.js, and modern cloud databases."\n2. **The Past (40s)**: "Recently, I engineered scalable projects like an AI career platform and RESTful microservices, focusing on clean architecture, low latency, and secure JWT authentication."\n3. **The Future (20s)**: "I'm excited about this opportunity because your team values innovation and code quality, where I can make an immediate impact."\n\n💡 *Pro-Tip*: Never recite your whole resume—focus purely on impact and why you fit this exact role!`;
    }

    if (q.includes("star method") || q.includes("behavioral") || q.includes("conflict")) {
      return `### ⭐ The STAR Method Master Template:\n\n• **S - Situation**: *"In our capstone project, our backend response times were lagging over 1.5 seconds under concurrent user test loads."*\n• **T - Task**: *"I was responsible for analyzing API bottlenecks and cutting latency under 300ms before our demonstration deadline."*\n• **A - Action**: *"I profiled the MongoDB aggregation pipeline, added compound indexes, and integrated in-memory caching."*\n• **R - Result**: *"This slashed query times by 78% to 180ms and enabled seamless concurrency with zero server crashes."*\n\n👉 Spend 70% of your time on **Action** and **Result**!`;
    }

    if (q.includes("salary") || q.includes("negotiat") || q.includes("paisa") || q.includes("package")) {
      return `### 💰 Tactical Salary Negotiation Rules:\n\n1. **Never Anchor First**: If asked your expected CTC, say: *"I'm primarily interested in finding the best technical and team fit. What is the budgeted salary band for someone with my skill set?"*\n2. **Use Industry Benchmarks**: Check *Levels.fyi* and *Glassdoor* for the exact role and location tier.\n3. **Negotiate Beyond Base**: If base pay is strict, ask for sign-on bonus, early 6-month performance review, or remote allowances.\n4. **Counter Professionally**: *"Based on my experience architecting full-stack solutions and the current market average for this role, I was targeting closer to ₹X. Can we bridge this gap?"*`;
    }

    if (q.includes("bullet") || q.includes("resume") || q.includes("cv")) {
      return `### ✨ Google's XYZ Formula for High-Impact Resume Bullets:\n\nFormula: *"Accomplished [X] as measured by [Y], by doing [Z]"*\n\n❌ **Weak Bullet**: "Worked on the frontend and backend of an e-commerce website."\n\n✅ **Optimized Bullet**: "Architected a full-stack e-commerce platform using React, Node.js, and MongoDB, increasing page load speed by 35% and handling 500+ daily mock transactions."\n\n🔑 *Top Action Verbs*: **Spearheaded, Architected, Engineered, Streamlined, Orchestrated, Optimized.**`;
    }

    if (q.includes("question") && (q.includes("ask") || q.includes("interviewer") || q.includes("hr"))) {
      return `### 🎯 Top 3 Questions to Ask Your Interviewer:\n\n1. *"What does exceptional success look like for someone in this role in their first 90 days?"* (Shows leadership & drive)\n2. *"What is the most pressing technical bottleneck currently facing your engineering team?"* (Allows you to position your skills)\n3. *"How does the team approach code reviews, testing, and continuous deployment?"* (Signals engineering discipline)`;
    }

    if (q.includes("roadmap") || q.includes("mern") || q.includes("fullstack") || q.includes("kya padhe")) {
      return `### 🗺️ MERN Stack Job-Ready Roadmap for ${name}:\n\n1. **Core Foundations**: Modern ES6+ JavaScript (Closures, Event Loop, Promises, Async/Await).\n2. **Frontend Mastery**: React 19, Hooks (useEffect, useMemo, custom hooks), Redux Toolkit, Tailwind CSS.\n3. **Backend & Architecture**: Node.js, Express 5, RESTful API Design, JWT Auth, Middleware.\n4. **Databases**: MongoDB Aggregations, indexing, Mongoose schemas, and basic PostgreSQL queries.\n5. **DevOps & Polish**: Docker basics, Git branch workflows, CI/CD with GitHub Actions, and deployment on Render/Vercel.`;
    }

    // Hindi / Hinglish queries
    if (
      q.includes("kya") ||
      q.includes("kaise") ||
      q.includes("batao") ||
      q.includes("samjhao") ||
      q.includes("padhna") ||
      q.includes("kare")
    ) {
      return `Haan bilkul ${name}! 🙏 Main aapki poori help karunga.\n\nCareerPilot par aap:\n1. **Mock Interview**: Voice se interview questions answer karke score check kar sakte ho.\n2. **Resume ATS Check**: Resume upload karke check kar sakte ho ki kya missing hai.\n3. **Career Roadmap**: Apne target role ke liye step-by-step phases follow kar sakte ho.\n\nAapko specific kisme help chahiye—interview questions, resume bullet points, ya kisi technical concept mein?`;
    }

    // Default friendly conversational reply
    return `That's a great question, ${name}! 👍\n\nTo give you the most targeted advice:\n1. Are you preparing for a technical round, HR round, or resume review?\n2. Feel free to paste any question, job description, or resume bullet point right here, and I will critique and optimize it for you!\n\nLet me know what you want to tackle next! 🚀`;
  };

  return (
    <>
      {/* Floating Launcher Pill Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform hover:scale-105 group border-2 border-white/20"
          title="Open AI Career Copilot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></span>
          </div>
          <span className="font-bold text-sm hidden md:inline-block pr-1">
            CareerPilot AI Copilot
          </span>
          <span className="text-[10px] bg-white/20 text-cyan-200 px-2 py-0.5 rounded-full font-semibold hidden md:inline-block">
            Online
          </span>
        </button>
      )}

      {/* Main Chat Drawer / Window */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-300 ${
            isExpanded
              ? "bottom-4 right-4 w-[95vw] md:w-[700px] h-[88vh]"
              : "bottom-6 right-6 w-[95vw] sm:w-[450px] h-[620px]"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm tracking-wide flex items-center gap-2">
                  CareerPilot Copilot
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-400/20 font-bold">
                    Senior Tech Mentor
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active & Ready for Interview Prep
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
                title="Clear Chat History"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition hidden sm:inline-block"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => {
                  if (isSpeaking && window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(false);
                  }
                  setIsOpen(false);
                }}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/60 text-sm">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === "assistant";

              return (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    isAssistant ? "justify-start" : "justify-end"
                  }`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed text-xs md:text-sm shadow-sm ${
                      isAssistant
                        ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 whitespace-pre-wrap"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white whitespace-pre-wrap font-medium"
                    }`}
                  >
                    {msg.content}

                    {/* Action Toolbar on Assistant Messages */}
                    {isAssistant && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2 text-slate-400">
                        <button
                          onClick={() => speakMessage(msg.content)}
                          className="hover:text-blue-600 dark:hover:text-cyan-400 p-1 rounded transition"
                          title="Read Message Aloud"
                        >
                          {isSpeaking ? (
                            <VolumeX className="w-3.5 h-3.5 text-red-500" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => copyText(msg.content, index)}
                          className="hover:text-blue-600 dark:hover:text-cyan-400 p-1 rounded transition"
                          title="Copy Answer"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-sm text-xs text-slate-600 dark:text-slate-400">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  CareerPilot is crafting personalized advice...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="shrink-0 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-700 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 font-semibold transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box Footer with Voice Dictation */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            {/* Voice Dictation Button */}
            <button
              type="button"
              onClick={toggleListen}
              className={`p-2.5 rounded-xl border transition flex items-center justify-center shrink-0 ${
                isListening
                  ? "bg-red-500 text-white border-red-500 animate-pulse"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200"
              }`}
              title={isListening ? "Listening... click to stop" : "Speak your message"}
            >
              {isListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              )}
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening
                  ? "Listening to your voice... Speak now"
                  : "Ask anything in English or Hindi / Hinglish..."
              }
              className="flex-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white p-2.5 rounded-xl transition shadow flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CareerCopilotModal;
