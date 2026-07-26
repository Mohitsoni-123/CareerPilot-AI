import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import Job from "./models/Job.js";

dotenv.config();

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    jobType: "Full Time",
    description:
      "We are looking for a frontend developer with strong knowledge of React.js, JavaScript, HTML, CSS, and Tailwind CSS. Experience with REST APIs and Git is preferred.",
    skills: [
      "JavaScript",
      "React.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST API",
      "Git",
    ],
    salary: "$70,000 - $90,000",
    applyUrl: "https://example.com",
  },

  {
    title: "MERN Stack Developer",
    company: "CodeSphere",
    location: "Bangalore",
    jobType: "Full Time",
    description:
      "Looking for a MERN Stack Developer with experience in MongoDB, Express.js, React.js, Node.js, REST APIs and JWT authentication.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
      "JWT",
    ],
    salary: "$80,000 - $110,000",
    applyUrl: "https://example.com",
  },

  {
    title: "Software Development Intern",
    company: "InnovateLabs",
    location: "Remote",
    jobType: "Internship",
    description:
      "We are looking for software development interns interested in JavaScript, Python, Git, problem solving and web development.",
    skills: [
      "JavaScript",
      "Python",
      "Git",
      "DSA",
      "Problem Solving",
    ],
    salary: "Paid Internship",
    applyUrl: "https://example.com",
  },
];


const seedJobs = async () => {

  try {

    await connectDB();

    await Job.deleteMany();

    await Job.insertMany(
      jobs
    );

    console.log(
      "Jobs seeded successfully"
    );

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);

  }

};


seedJobs();