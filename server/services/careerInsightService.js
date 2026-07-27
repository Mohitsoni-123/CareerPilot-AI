import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateCareerInsight = async ({
  profile,
  applications = [],
  savedJobs = [],
}) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const prompt = `
You are an expert AI career advisor.

Analyze the candidate's profile, job applications, and saved jobs.

CANDIDATE PROFILE:

Name:
${profile?.name || "Not provided"}

Skills:
${JSON.stringify(profile?.skills || [])}

Education:
${JSON.stringify(profile?.education || [])}

Experience:
${JSON.stringify(profile?.experience || [])}

Projects:
${JSON.stringify(profile?.projects || [])}

Certifications:
${JSON.stringify(profile?.certifications || [])}


APPLICATIONS:

${JSON.stringify(
  applications.map((application) => ({
    jobTitle: application.job?.title,
    company: application.job?.company,
    status: application.status,
    skills: application.job?.skills,
  })),
)}


SAVED JOBS:

${JSON.stringify(
  savedJobs.map((savedJob) => ({
    jobTitle: savedJob.job?.title,
    company: savedJob.job?.company,
    skills: savedJob.job?.skills,
  })),
)}


Return ONLY valid JSON.

Use exactly this structure:

{
  "careerSummary": "",
  "recommendedSkills": [],
  "targetRoles": [],
  "interviewTips": [],
  "nextSteps": []
}

Rules:

1. careerSummary should be a concise personalized career analysis.
2. recommendedSkills should contain 3-5 skills the candidate should improve.
3. targetRoles should contain 3-5 suitable job roles.
4. interviewTips should contain 3-5 actionable interview preparation tips.
5. nextSteps should contain 3-5 actionable career steps.
6. Recommendations must be based on the candidate's actual profile and job data.
7. Do not include markdown.
`;

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  const cleanedResponse = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedResponse);
};
