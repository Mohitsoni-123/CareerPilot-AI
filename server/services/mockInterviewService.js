import { generateAIResponse } from "./aiGateway.js";

// =====================================
// GENERATE SINGLE QUESTION
// =====================================
export const generateMockInterviewQuestion = async ({
  role,
  interviewType = "Technical",
  difficulty = "Medium",
  previousQuestions = [],
}) => {
  const previousList = previousQuestions.length
    ? `Avoid repeating or asking questions too similar to these previous ones:\n${previousQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`
    : "";

  const prompt = `
You are a senior hiring manager and tech lead at a top technology company.
Generate ONE real-world, engaging interview question for a candidate.

Target Role: ${role}
Interview Type: ${interviewType}
Difficulty Level: ${difficulty}
${previousList}

Requirements:
- Return ONLY the interview question text.
- Do NOT include question number, greetings, intro or markdown formatting.
- Make it realistic and practical, reflecting modern industry standards.
`;

  const question = await generateAIResponse({
    prompt,
    systemPrompt: "You are an expert technical and HR interviewer.",
    temperature: 0.6,
  });

  return question.replace(/^["']|["']$/g, "").trim();
};

// =====================================
// EVALUATE SINGLE ANSWER
// =====================================
export const evaluateMockInterviewAnswer = async ({
  role,
  interviewType,
  difficulty,
  question,
  answer,
}) => {
  const prompt = `
You are an expert interviewer evaluating a candidate's response.

Candidate Target Role: ${role}
Interview Type: ${interviewType}
Difficulty: ${difficulty}

Question Asked:
"${question}"

Candidate Answer:
"${answer}"

Evaluate the answer thoroughly. Return ONLY valid JSON with this exact schema:
{
  "score": 85,
  "communicationScore": 80,
  "technicalAccuracy": 90,
  "strengths": "Point out 1-2 specific strong points in the answer",
  "improvements": "Point out 1-2 constructive ways the answer could be improved",
  "modelAnswer": "Provide a concise, high-impact model answer (3-4 sentences) that an ideal candidate would give."
}

Rules:
- score must be an integer between 0 and 100.
- If answer is very brief or unrelated, score proportionally lower (e.g. 10-40) with polite constructive feedback.
- If answer is thorough, accurate, and articulate, give a well-earned high score (80-95).
`;

  try {
    const evaluation = await generateAIResponse({
      prompt,
      systemPrompt: "You are a fair, expert technical interviewer who provides constructive scoring.",
      jsonMode: true,
      temperature: 0.2,
    });

    return {
      score: Math.min(100, Math.max(0, Number(evaluation.score) || 70)),
      communicationScore: Math.min(100, Math.max(0, Number(evaluation.communicationScore) || 70)),
      technicalAccuracy: Math.min(100, Math.max(0, Number(evaluation.technicalAccuracy) || 70)),
      strengths: evaluation.strengths || "Addressed the core aspects of the question.",
      improvements: evaluation.improvements || "Could provide more specific concrete examples or metrics.",
      modelAnswer: evaluation.modelAnswer || "A complete and structured response highlighting key principles and practical experience.",
      feedback: `${evaluation.strengths ? `Strengths: ${evaluation.strengths} ` : ""}${evaluation.improvements ? `Improvements: ${evaluation.improvements}` : ""}`.trim(),
    };
  } catch (err) {
    console.error("Answer evaluation failed, using fallback rubric:", err.message);
    const wordCount = answer.trim().split(/\s+/).length;
    const baseScore = Math.min(90, Math.max(40, wordCount * 3));
    return {
      score: baseScore,
      communicationScore: Math.min(95, baseScore + 5),
      technicalAccuracy: baseScore,
      strengths: "Good effort answering the question clearly.",
      improvements: "Consider adding deeper technical depth and specific project examples.",
      modelAnswer: "Focus on articulating principles, challenges, and measurable results.",
      feedback: "Good response. Try to structure using the STAR method (Situation, Task, Action, Result).",
    };
  }
};

// =====================================
// GENERATE OVERALL INTERVIEW SUMMARY
// =====================================
export const generateFinalInterviewSummary = async ({
  role,
  interviewType,
  questionsWithAnswers = [],
}) => {
  const qaSummary = questionsWithAnswers
    .map(
      (qa, idx) =>
        `Q${idx + 1}: ${qa.question}\nAnswer: ${qa.answer || "[No answer provided]"}\nScore: ${qa.score || 0}/100`
    )
    .join("\n\n");

  const prompt = `
You are the lead hiring panel reviewing a completed mock interview.

Role: ${role}
Interview Type: ${interviewType}

Candidate Q&A History:
${qaSummary}

Generate an overall scorecard and feedback summary. Return ONLY valid JSON:
{
  "overallScore": 82,
  "technicalScore": 85,
  "communicationScore": 80,
  "confidenceScore": 80,
  "summary": "2-3 sentences summarizing overall readiness and performance",
  "topStrengths": ["strength 1", "strength 2", "strength 3"],
  "areasForImprovement": ["area 1", "area 2", "area 3"],
  "recommendedActionItems": ["action 1", "action 2"]
}
`;

  try {
    const summary = await generateAIResponse({
      prompt,
      systemPrompt: "You are a senior hiring director summarizing interview results.",
      jsonMode: true,
      temperature: 0.3,
    });
    return summary;
  } catch (err) {
    console.error("Overall summary generation error:", err.message);
    const avgScore =
      questionsWithAnswers.length > 0
        ? Math.round(
            questionsWithAnswers.reduce((acc, q) => acc + (q.score || 70), 0) /
              questionsWithAnswers.length
          )
        : 75;

    return {
      overallScore: avgScore,
      technicalScore: avgScore,
      communicationScore: Math.min(100, avgScore + 5),
      confidenceScore: Math.min(100, avgScore + 2),
      summary: "You demonstrated solid knowledge of foundational concepts. Consistent practice will help sharpen your communication clarity and precision.",
      topStrengths: ["Clear effort in explaining thoughts", "Relevant role-specific terminology"],
      areasForImprovement: ["Provide more quantitative impact in your answers", "Deepen system-level reasoning"],
      recommendedActionItems: ["Practice answering with the STAR format", "Review recent industry case studies"],
    };
  }
};
