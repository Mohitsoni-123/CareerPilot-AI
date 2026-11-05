import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Resume from "../models/Resume.js";
import { generateAIResponse } from "../services/aiGateway.js";

export const chatWithCareerAssistant = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Optional user authentication extraction
    let userContext = "";
    try {
      let token = null;
      if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (token && process.env.JWT_SECRET) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded?.userId) {
          const user = await User.findById(decoded.userId).select("name skills education");
          const resume = await Resume.findOne({ user: decoded.userId }).sort({ createdAt: -1 });

          if (user) {
            userContext = `Candidate Name: ${user.name || "Candidate"}
Skills: ${(user.skills || []).join(", ") || "Fullstack Software Engineering"}
Latest ATS Resume Score: ${resume?.atsScore ? resume.atsScore + "%" : "Not yet analyzed"}`;
          }
        }
      }
    } catch (authErr) {
      // Non-blocking: continue as guest
    }

    const conversationHistory = history
      .slice(-6)
      .map((msg) => `${msg.role === "user" ? "Candidate" : "CareerPilot Assistant"}: ${msg.content}`)
      .join("\n");

    const prompt = `
Context about candidate:
${userContext || "Candidate preparing for software engineering & tech industry roles."}

Conversation History:
${conversationHistory}

Candidate's current message:
"${message}"

Provide a structured, encouraging, highly professional, and actionable response. Focus on practical interview and career strategies.
`;

    const reply = await generateAIResponse({
      prompt,
      systemPrompt: "You are CareerPilot Copilot, an elite AI Career Advisor, Mock Interview Mentor, and Tech Recruiter. Always give encouraging, pragmatic, and high-value professional advice.",
      temperature: 0.5,
      jsonMode: false,
    });

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Career Assistant Chat Error:", error);
    res.status(200).json({
      success: true,
      reply:
        "Hello! I am your CareerPilot Copilot 🚀. I am ready to help you optimize your resume, prepare for mock interviews, or negotiate your offer. What specific area are you working on today?",
    });
  }
};
