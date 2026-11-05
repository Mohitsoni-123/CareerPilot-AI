import { generateAIResponse, parseJSONSafely } from "./aiGateway.js";

export const generateCareerRoadmap = async ({
  targetRole,
  currentLevel,
  currentSkills,
}) => {
  const skillsText =
    Array.isArray(currentSkills) && currentSkills.length > 0
      ? currentSkills.join(", ")
      : "None specified";

  const prompt = `
You are an expert career mentor and technical curriculum designer.

Generate a complete, realistic, phase-by-phase career roadmap for someone who wants to become a: "${targetRole}"

Their current skill level is: ${currentLevel}
Their current skills are: ${skillsText}

Rules:
1. Create between 4 and 6 phases that logically progress from foundational to advanced to job-ready, tailored SPECIFICALLY to "${targetRole}".
2. Each phase must be realistic and relevant to modern industry requirements.
3. Return ONLY valid JSON array with this exact structure:

[
  {
    "phase": "Phase 1",
    "title": "Short phase title",
    "description": "One or two sentence description of what this phase covers and why.",
    "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    "projects": ["Project idea 1", "Project idea 2"],
    "duration": "e.g. 2-4 Weeks"
  }
]
`;

  try {
    const parsed = await generateAIResponse({
      prompt,
      systemPrompt: "You are a senior tech curriculum planner. Respond with a valid JSON array only.",
      jsonMode: true,
      temperature: 0.4,
    });

    let phases = typeof parsed === "string" ? parseJSONSafely(parsed) : parsed;

    if (phases && typeof phases === "object" && !Array.isArray(phases) && Array.isArray(phases.phases)) {
      phases = phases.phases;
    }

    if (Array.isArray(phases) && phases.length > 0) {
      return phases.map((phase, idx) => ({
        phase: phase.phase || `Phase ${idx + 1}`,
        title: phase.title || `Phase ${idx + 1}`,
        description: phase.description || "",
        skills: Array.isArray(phase.skills) ? phase.skills : [],
        projects: Array.isArray(phase.projects) ? phase.projects : [],
        duration: phase.duration || "3-4 Weeks",
        completed: false,
      }));
    }
  } catch (err) {
    console.warn("AI Roadmap generation note, falling back to algorithmic curriculum:", err.message);
  }

  // Built-in intelligent curriculum based on target role
  return generateRoleSpecificFallback(targetRole);
};

function generateRoleSpecificFallback(role = "") {
  const r = role.toLowerCase();

  if (r.includes("frontend") || r.includes("react") || r.includes("ui")) {
    return [
      {
        phase: "Phase 1: Modern JavaScript & Web Essentials",
        title: "ES6+, DOM & TypeScript Basics",
        description: "Master modern asynchronous JavaScript, TypeScript typing, and responsive layout primitives.",
        skills: ["JavaScript ES6+", "TypeScript", "HTML5 & CSS Grid", "Git & GitHub"],
        projects: ["Interactive Component Library", "Responsive Dashboard Shell"],
        duration: "3-4 Weeks",
        completed: false,
      },
      {
        phase: "Phase 2: React 19 & Component Architecture",
        title: "Hooks, Router & Custom State Machines",
        description: "Build robust, reusable component trees with modern React paradigms and Tailwind styling.",
        skills: ["React.js", "Tailwind CSS", "React Router", "Vite"],
        projects: ["Real-time Kanban Task Board", "Interactive E-Commerce Catalog"],
        duration: "4 Weeks",
        completed: false,
      },
      {
        phase: "Phase 3: Global State & Network Synchronization",
        title: "Redux Toolkit & Server Caching",
        description: "Manage complex client state and network mutations with Redux Toolkit and React Query.",
        skills: ["Redux Toolkit", "TanStack Query", "REST APIs", "WebSocket Clients"],
        projects: ["Live Collaborative Whiteboard", "Social Feed with Optimistic Updates"],
        duration: "3 Weeks",
        completed: false,
      },
      {
        phase: "Phase 4: Next.js & Full-Stack Capabilities",
        title: "SSR, SSG & Server Components",
        description: "Deploy production-grade full-stack React applications with SEO optimization and Edge caching.",
        skills: ["Next.js App Router", "Server Actions", "Vercel Deployment", "Lighthouse Performance"],
        projects: ["Full-featured SaaS Landing & App", "Headless Blog with CMS"],
        duration: "4 Weeks",
        completed: false,
      },
      {
        phase: "Phase 5: Testing, Accessibility & Portfolio",
        title: "Jest, Playwright & Production Polish",
        description: "Ensure enterprise quality through automated unit testing, end-to-end flows, and WCAG accessibility.",
        skills: ["Jest", "React Testing Library", "Playwright", "Web Accessibility (a11y)"],
        projects: ["Production Portfolio Site", "Open-Source Component Package"],
        duration: "3 Weeks",
        completed: false,
      },
    ];
  }

  if (r.includes("ai") || r.includes("machine learning") || r.includes("data")) {
    return [
      {
        phase: "Phase 1: Python Core & Mathematical Foundations",
        title: "Python 3, Linear Algebra & Probability",
        description: "Establish strong foundations in scientific Python, vector mathematics, and exploratory data analysis.",
        skills: ["Python 3", "NumPy", "Pandas", "Matplotlib / Seaborn"],
        projects: ["Exploratory Data Analysis Report", "Statistical Data Visualizer"],
        duration: "4 Weeks",
        completed: false,
      },
      {
        phase: "Phase 2: Classical Machine Learning",
        title: "Supervised & Unsupervised Learning",
        description: "Train, evaluate, and tune classical regression, classification, and clustering models using Scikit-Learn.",
        skills: ["Scikit-Learn", "Feature Engineering", "Cross-Validation", "Model Evaluation"],
        projects: ["Customer Churn Prediction Model", "Housing Price Estimator"],
        duration: "4 Weeks",
        completed: false,
      },
      {
        phase: "Phase 3: Deep Learning & Neural Networks",
        title: "PyTorch & Computer Vision / NLP",
        description: "Construct and train deep neural networks with backpropagation, CNNs, and sequence models in PyTorch.",
        skills: ["PyTorch", "Convolutional Neural Nets", "Transformers", "Hugging Face"],
        projects: ["Image Classification Engine", "Sentiment Analysis Microservice"],
        duration: "5 Weeks",
        completed: false,
      },
      {
        phase: "Phase 4: GenAI & LLM Application Engineering",
        title: "LangChain, RAG & Vector Databases",
        description: "Build production generative AI agents with prompt engineering, retrieval-augmented generation, and embeddings.",
        skills: ["LangChain", "Vector Databases (Pinecone/Chroma)", "OpenAI / Gemini APIs", "Llama 3"],
        projects: ["Enterprise Document RAG Assistant", "AI Code Review Copilot"],
        duration: "4 Weeks",
        completed: false,
      },
      {
        phase: "Phase 5: MLOps & Model Deployment",
        title: "FastAPI, Docker & Model Monitoring",
        description: "Package models into high-performance REST APIs, containerize with Docker, and monitor inference latency.",
        skills: ["FastAPI", "Docker", "MLflow", "Cloud Deployment (AWS/GCP)"],
        projects: ["Production Model Serving API with Monitoring"],
        duration: "3 Weeks",
        completed: false,
      },
    ];
  }

  // Default: Full Stack Software Engineering
  return [
    {
      phase: "Phase 1: Programming & System Fundamentals",
      title: "Core Data Structures & Modern Language",
      description: "Master algorithms, modern ES6+ / TypeScript, version control workflows, and fundamental problem-solving.",
      skills: ["JavaScript / TypeScript", "Data Structures", "Git & GitHub", "Clean Code"],
      projects: ["CLI Developer Productivity Tool", "Algorithms Visualizer"],
      duration: "3-4 Weeks",
      completed: false,
    },
    {
      phase: "Phase 2: Frontend Engineering & UI Systems",
      title: "React 19 & Modern Design Systems",
      description: "Build accessible, responsive single-page web applications with state management and Tailwind CSS.",
      skills: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vite"],
      projects: ["Interactive Career Management Dashboard", "E-Commerce Web App"],
      duration: "4 Weeks",
      completed: false,
    },
    {
      phase: "Phase 3: Backend Architecture & Databases",
      title: "Node.js, Express & Distributed Storage",
      description: "Design high-performance REST APIs, JWT security, and relational/document database schemas.",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT & Auth"],
      projects: ["Scalable RESTful API with Role-Based Access Control"],
      duration: "4-5 Weeks",
      completed: false,
    },
    {
      phase: "Phase 4: Cloud, DevOps & Testing",
      title: "Docker, CI/CD Pipelines & Quality Assurance",
      description: "Containerize applications, automate integration test suites, and deploy to modern cloud environments.",
      skills: ["Docker", "GitHub Actions CI/CD", "Jest / Supertest", "AWS / Render"],
      projects: ["Full Containerized CI/CD Deployment Pipeline"],
      duration: "3 Weeks",
      completed: false,
    },
    {
      phase: "Phase 5: System Design & Career Launch",
      title: "Scalability, Caching & Interview Readiness",
      description: "Learn caching patterns with Redis, message queues, rate limiting, and technical interview mastery.",
      skills: ["Redis Caching", "System Design", "Rate Limiting", "Mock Technical Interviews"],
      projects: ["High-Scale Distributed Notification Service"],
      duration: "3 Weeks",
      completed: false,
    },
  ];
}
