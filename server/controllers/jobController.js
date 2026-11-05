import Job from "../models/Job.js";

const DEFAULT_JOBS = [
  {
    title: "Full Stack Engineer (MERN)",
    company: "Razorpay",
    location: "Bengaluru, India (Hybrid)",
    jobType: "Full Time",
    salary: "₹18 - ₹26 LPA",
    description: "Looking for an experienced Full Stack Developer to build high-scale payment gateway workflows and developer tools using React, Node.js, Express, and distributed databases. You will architect robust microservices and ensure seamless developer experience.",
    skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "REST APIs", "Docker"],
    applyUrl: "https://razorpay.com/careers",
  },
  {
    title: "Frontend React Developer",
    company: "Swiggy",
    location: "Remote / Bengaluru",
    jobType: "Full Time",
    salary: "₹14 - ₹20 LPA",
    description: "Join our consumer experience engineering team building lightning-fast web applications. You will be responsible for creating pixel-perfect, accessible UI components with React 19, Redux Toolkit, and Tailwind CSS.",
    skills: ["React", "JavaScript", "Redux", "Tailwind CSS", "Next.js", "HTML/CSS", "Web Performance"],
    applyUrl: "https://swiggy.com/careers",
  },
  {
    title: "AI / ML Software Engineering Intern",
    company: "Google Cloud AI",
    location: "Bengaluru / Hyderabad (On-site)",
    jobType: "Internship",
    salary: "₹80,000 / month stipend",
    description: "Work alongside leading research scientists and machine learning engineers to build GenAI agent workflows, optimize LLM fine-tuning pipelines, and integrate generative capabilities into cloud enterprise tools.",
    skills: ["Python", "Machine Learning", "LLMs", "FastAPI", "PyTorch", "Git", "REST APIs"],
    applyUrl: "https://careers.google.com",
  },
  {
    title: "Backend Node.js & Cloud Architect",
    company: "Zomato",
    location: "Gurugram, India",
    jobType: "Full Time",
    salary: "₹22 - ₹32 LPA",
    description: "Architect high-throughput event-driven microservices handling millions of orders per day. Deep expertise in Node.js, Redis caching, Kafka message queues, and AWS serverless infrastructure required.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Kafka", "AWS", "Microservices"],
    applyUrl: "https://zomato.com/careers",
  },
  {
    title: "Associate DevOps & Cloud Engineer",
    company: "Microsoft",
    location: "Noida / Remote",
    jobType: "Full Time",
    salary: "₹16 - ₹24 LPA",
    description: "Build automated CI/CD deployment pipelines, manage containerized Kubernetes clusters on Azure, and implement automated infrastructure monitoring and security compliance.",
    skills: ["Docker", "Kubernetes", "CI/CD", "Azure", "GitHub Actions", "Linux", "Terraform"],
    applyUrl: "https://careers.microsoft.com",
  },
  {
    title: "Frontend Engineering Intern",
    company: "Cred",
    location: "Bengaluru (Hybrid)",
    jobType: "Internship",
    salary: "₹60,000 / month stipend",
    description: "Craft hyper-engaging, aesthetically delightful web and mobile-web animations and interfaces for high-trust financial products. Heavy focus on design systems, micro-interactions, and React.",
    skills: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "TypeScript"],
    applyUrl: "https://cred.club/careers",
  },
];

// Get All Jobs
export const getJobs = async (req, res) => {
  try {
    let jobs = await Job.find().sort({ createdAt: -1 });

    // Auto-seed default realistic jobs if database has no jobs yet
    if (!jobs || jobs.length === 0) {
      try {
        const seeded = await Job.insertMany(
          DEFAULT_JOBS.map((j) => ({ ...j, postedBy: req.user?._id || null }))
        );
        jobs = seeded;
      } catch (seedErr) {
        console.warn("Failed to insert seed jobs into DB, returning in-memory defaults:", seedErr.message);
        jobs = DEFAULT_JOBS.map((j, i) => ({ ...j, _id: `seed-job-${i + 1}`, createdAt: new Date() }));
      }
    }

    res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.error("Get Jobs Error:", error);
    // If DB read fails entirely, return default jobs so page still displays
    res.status(200).json({
      success: true,
      jobs: DEFAULT_JOBS.map((j, i) => ({ ...j, _id: `seed-job-${i + 1}`, createdAt: new Date() })),
    });
  }
};

// Get Single Job
export const getJobById = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      // Check if it's a seed job
      const seedMatch = DEFAULT_JOBS.find(
        (j, i) => `seed-job-${i + 1}` === req.params.id
      );
      if (seedMatch) {
        job = { ...seedMatch, _id: req.params.id };
      }
    }

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
    });
  }
};

// Create Job
export const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      jobType,
      description,
      skills,
      salary,
      applyUrl,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      location: location || "Remote",
      jobType: jobType || "Full Time",
      description,
      skills: Array.isArray(skills) ? skills : (skills ? skills.split(",").map(s => s.trim()) : []),
      salary: salary || "Not specified",
      applyUrl: applyUrl || "",
      postedBy: req.user?._id || null,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error("Create Job Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create job",
    });
  }
};
