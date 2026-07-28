import fs from "fs";
import pdf from "pdf-parse";

import Resume from "../models/Resume.js";
import { analyzeResumeWithAI } from "../services/geminiService.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF resume",
      });
    }

    // Read PDF

    const dataBuffer = fs.readFileSync(req.file.path);

    // Extract text

    const pdfData = await pdf(dataBuffer);

    const resumeText = pdfData.text;

    if (!resumeText.trim()) {
      return res.status(400).json({
        success: false,
        message: "Could not extract text from resume",
      });
    }

    // Analyze using Gemini

    const aiResponse = await analyzeResumeWithAI(resumeText);

    // Clean AI response

    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleanedResponse);

    // Save to MongoDB

    const resume = await Resume.create({
      user: req.user._id,

      fileName: req.file.originalname,

      originalText: resumeText,

      atsScore: analysis.atsScore,

      summary: analysis.summary,

      strengths: analysis.strengths,

      weaknesses: analysis.weaknesses,

      missingSkills: analysis.missingSkills,

      suggestions: analysis.suggestions,
    });

    res.status(201).json({
      success: true,

      message: "Resume analyzed successfully",

      resume,
    });
  } catch (error) {
    console.error("Resume Analysis Error:", error);

    res.status(500).json({
      success: false,

      message: "Failed to analyze resume",

      error: error.message,
    });
  }
};
