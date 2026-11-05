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

    const trimmedMessage = message.trim();

    // Optional user authentication extraction
    let candidateName = "Candidate";
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
            candidateName = user.name || "Candidate";
            userContext = `Candidate Name: ${candidateName}
Skills: ${(user.skills || []).join(", ") || "Fullstack Software Engineering"}
Latest ATS Resume Score: ${resume?.atsScore ? resume.atsScore + "%" : "Not yet analyzed"}`;
          }
        }
      }
    } catch (authErr) {
      // Non-blocking: continue as guest
    }

    // Prepare multi-turn chat messages
    const chatMessages = [
      ...history.slice(-6).map((msg) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content,
      })),
      { role: "user", content: trimmedMessage },
    ];

    const systemPrompt = `You are CareerPilot Copilot, an empathetic, encouraging, and senior AI Tech Career Mentor & Interview Coach.
Candidate Profile: ${userContext || "Candidate preparing for software engineering & tech roles."}
Talk in a natural, warm, and highly practical conversational tone. If the user speaks in Hindi or Hinglish, reply with friendly Hinglish. If they ask a technical question, give clean explanations with code snippets where helpful. If they greet you, greet them warmly and ask how you can help them prepare.`;

    const reply = await generateAIResponse({
      prompt: `Candidate's current message: "${trimmedMessage}"`,
      userQuery: trimmedMessage,
      chatMessages,
      systemPrompt,
      temperature: 0.6,
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
        "Hey! 👋 I'm your CareerPilot AI Copilot. How is your interview preparation or job search going? Feel free to ask me anything about technical rounds, resume ATS optimization, or salary negotiation!",
    });
  }
};
