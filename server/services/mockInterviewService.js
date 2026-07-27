import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const generateMockInterviewQuestion = async ({
  role,
  interviewType,
  difficulty,
}) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const prompt = `
You are an expert technical interviewer.

Generate ONE interview question for the candidate.

Job Role:
${role}

Interview Type:
${interviewType}

Difficulty:
${difficulty}

Rules:
1. Generate only ONE question.
2. The question should be relevant to the job role.
3. The question should match the interview type.
4. Difficulty should match the requested level.
5. Return ONLY the question.
6. Do not use markdown.
`;

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  return response.trim();
};