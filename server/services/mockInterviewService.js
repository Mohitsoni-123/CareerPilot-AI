import Groq from "groq-sdk";

let groqClient = null;

function getGroqClient() {
  if (!groqClient) {
    if (!process.env.GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not set in environment variables");
    }
    groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  return groqClient;
}

export const generateMockInterviewQuestion = async ({
  role,
  interviewType,
  difficulty,
}) => {
  const groq = getGroqClient();

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

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });

  const response = completion.choices[0]?.message?.content;

  return response.trim();
};