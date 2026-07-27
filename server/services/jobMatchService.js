import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeJobMatch = async ({ profile, resumeText, job }) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const prompt = `
You are an expert AI career advisor.

Analyze how well this candidate matches the job.

CANDIDATE PROFILE:

Name:
${profile.name}

Skills:
${JSON.stringify(profile.skills)}

Education:
${JSON.stringify(profile.education)}

Experience:
${JSON.stringify(profile.experience)}

Projects:
${JSON.stringify(profile.projects)}

Certifications:
${JSON.stringify(profile.certifications)}


RESUME:

${resumeText || "No resume available"}


JOB:

Title:
${job.title}

Company:
${job.company}

Description:
${job.description}

Required Skills:
${JSON.stringify(job.skills)}


Return ONLY valid JSON.

Use exactly this structure:

{
  "matchScore": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "recommendation": "",
  "improvementPlan": []
}

Rules:

1. matchScore must be between 0 and 100.
2. matchedSkills should contain skills the candidate already has.
3. missingSkills should contain skills needed for the job but missing from the candidate.
4. strengths should explain why the candidate is suitable.
5. weaknesses should explain the candidate's gaps.
6. recommendation should be concise.
7. improvementPlan should contain 3-5 actionable steps.
8. Do not include markdown.
`;

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  const cleanedResponse = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedResponse);
};
