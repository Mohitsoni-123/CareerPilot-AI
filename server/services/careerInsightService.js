import { generateAIResponse } from "./aiGateway.js";

export const generateCareerInsight = async ({
  profile,
  applications = [],
  savedJobs = [],
}) => {
  const prompt = `
You are an expert executive AI career advisor.
Analyze the candidate's profile, job applications, and saved jobs to provide strategic career guidance.

CANDIDATE PROFILE:
Name: ${profile?.name || "Candidate"}
Skills: ${JSON.stringify(profile?.skills || [])}
Education: ${JSON.stringify(profile?.education || [])}
Experience: ${JSON.stringify(profile?.experience || [])}
Projects: ${JSON.stringify(profile?.projects || [])}
Certifications: ${JSON.stringify(profile?.certifications || [])}

APPLICATIONS (${applications.length}):
${JSON.stringify(
  applications.map((app) => ({
    title: app.job?.title,
    company: app.job?.company,
    status: app.status,
  }))
)}

SAVED JOBS (${savedJobs.length}):
${JSON.stringify(
  savedJobs.map((s) => ({
    title: s.job?.title,
    company: s.job?.company,
    skills: s.job?.skills,
  }))
)}

Return ONLY valid JSON with this exact structure:
{
  "careerSummary": "Concise 2-3 sentence personalized career trajectory analysis.",
  "marketCompetitivenessScore": 82,
  "recommendedSkills": ["skill 1", "skill 2", "skill 3", "skill 4"],
  "targetRoles": ["role 1", "role 2", "role 3"],
  "interviewTips": [
    "Actionable interview tip 1",
    "Actionable interview tip 2",
    "Actionable interview tip 3"
  ],
  "nextSteps": [
    "Clear actionable next step 1",
    "Clear actionable next step 2",
    "Clear actionable next step 3"
  ]
}
`;

  return await generateAIResponse({
    prompt,
    systemPrompt: "You are an executive talent strategist and career counselor.",
    jsonMode: true,
    temperature: 0.3,
  });
};
