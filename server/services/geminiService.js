import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

export const analyzeResumeWithAI = async (
  resumeText
) => {

  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

  const prompt = `
You are an expert ATS resume analyzer and career coach.

Analyze the following resume.

Resume:
${resumeText}

Return ONLY valid JSON.

Use exactly this structure:

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": []
}

Rules:

1. atsScore must be a number between 0 and 100.
2. Give 3-5 strengths.
3. Give 3-5 weaknesses.
4. Give 3-8 missing or recommended skills.
5. Give 3-5 actionable resume improvement suggestions.
6. Keep the summary concise.
7. Do not include markdown.
`;

  const result =
    await model.generateContent(
      prompt
    );

  const response =
    result.response.text();

  return response;
};