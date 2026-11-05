import { generateAIResponse } from "./aiGateway.js";

// =====================================
// RESUME AI ANALYSIS
// =====================================
export const analyzeResumeWithAI = async (resumeText) => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) algorithm and senior career coach.
Analyze the following resume text thoroughly.

Resume:
"""
${resumeText}
"""

Evaluate ATS compatibility, formatting, structure, impact verbs, and technical competency.
Return ONLY valid JSON with this exact schema:
{
  "atsScore": 84,
  "summary": "2-3 sentences executive summary of the candidate profile and market competitiveness",
  "strengths": [
    "strength 1",
    "strength 2",
    "strength 3",
    "strength 4"
  ],
  "weaknesses": [
    "weakness 1",
    "weakness 2",
    "weakness 3"
  ],
  "missingSkills": [
    "skill 1",
    "skill 2",
    "skill 3",
    "skill 4"
  ],
  "suggestions": [
    "suggestion 1",
    "suggestion 2",
    "suggestion 3",
    "suggestion 4"
  ]
}

Rules:
1. atsScore must be an integer between 0 and 100 based on quantifiable metrics, relevant tech stack, formatting, and impact.
2. Provide concrete, actionable strengths and weaknesses.
3. Suggest high-demand skills currently missing or underrepresented.
`;

  return await generateAIResponse({
    prompt,
    systemPrompt: "You are a professional ATS resume parser and evaluator.",
    jsonMode: true,
    temperature: 0.3,
  });
};

// =====================================
// MATCH RESUME AGAINST JOB DESCRIPTION
// =====================================
export const matchResumeWithJobDescription = async ({
  resumeText,
  jobTitle,
  jobDescription,
}) => {
  const prompt = `
You are an advanced ATS Matcher & Recruiter screening tool.

CANDIDATE RESUME:
"""
${resumeText}
"""

TARGET JOB:
Role: ${jobTitle}
Description:
"""
${jobDescription}
"""

Compare the resume against this specific job description. Return ONLY valid JSON:
{
  "matchPercentage": 78,
  "verdict": "Strong Match" | "Moderate Match" | "Low Match",
  "summary": "2-3 sentences evaluating candidate readiness for this exact role",
  "matchedSkills": ["skill1", "skill2", "skill3"],
  "missingKeywords": ["keyword1", "keyword2", "keyword3"],
  "tailoredBulletPoints": [
    "Rewritten bullet point using high-impact action verbs and metrics highlighting relevant skills",
    "Another optimized bullet point directly aligning candidate experience with the job requirements"
  ],
  "keyAdvice": "Specific actionable steps to optimize application before submitting"
}

Rules:
- matchPercentage must be an integer between 0 and 100.
- matchedSkills should be skills found in both the resume and the JD.
- missingKeywords should be critical terms from the JD absent from the resume.
- tailoredBulletPoints should suggest 2-3 improved resume bullet points the candidate can adopt.
`;

  return await generateAIResponse({
    prompt,
    systemPrompt: "You are an ATS optimization specialist.",
    jsonMode: true,
    temperature: 0.3,
  });
};

// =====================================
// GENERATE COVER LETTER & COLD EMAIL
// =====================================
export const generateCoverLetterAI = async ({
  candidateName,
  candidateSkills = [],
  candidateExperience = "",
  jobTitle,
  companyName,
  jobDescription,
  tone = "Professional",
}) => {
  const prompt = `
You are an executive career coach and expert copywriter.
Generate a tailored cover letter and a LinkedIn outreach message for a candidate applying to a job.

Candidate Name: ${candidateName}
Candidate Skills: ${candidateSkills.join(", ")}
Candidate Experience: ${candidateExperience}

Target Company: ${companyName || "the hiring team"}
Target Role: ${jobTitle}
Job Description:
"""
${jobDescription || "Standard responsibilities for " + jobTitle}
"""

Tone: ${tone} (e.g. Professional, Confident, Enthusiastic)

Return ONLY valid JSON:
{
  "coverLetter": "Full structured cover letter with Salutation, 3 high-impact body paragraphs connecting skills to company goals, and strong Call-To-Action closing.",
  "coldMessage": "A crisp, 3-sentence LinkedIn / email message to the hiring manager requesting a brief chat.",
  "keyHighlights": ["Highlight 1", "Highlight 2", "Highlight 3"]
}
`;

  return await generateAIResponse({
    prompt,
    systemPrompt: "You are a professional hiring strategist and cover letter writer.",
    jsonMode: true,
    temperature: 0.4,
  });
};

// =====================================
// AI CAREER ROADMAP
// =====================================
export const generateCareerRoadmapWithAI = async ({
  targetRole,
  currentLevel,
  currentSkills,
}) => {
  const skills = Array.isArray(currentSkills) ? currentSkills.join(", ") : currentSkills;

  const prompt = `
You are an elite tech career architect and mentor.
Create an in-depth, step-by-step career mastery roadmap for becoming a top-tier ${targetRole}.

Candidate Current Level: ${currentLevel}
Current Skills: ${skills || "None listed"}

Design 5 to 7 progressive phases taking the candidate from their current level to job-ready excellence.
Return ONLY valid JSON:
{
  "phases": [
    {
      "title": "Phase title (e.g., Phase 1: Core Fundamentals & Modern Tooling)",
      "duration": "Estimated weeks or months (e.g. 4-6 Weeks)",
      "description": "Clear explanation of what to learn and achieve in this phase",
      "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      "projects": [
        {
          "name": "Project Name",
          "description": "Brief description of practical portfolio project to build",
          "techStack": ["React", "Tailwind"]
        }
      ],
      "resources": [
        "Recommended resource or topic to study"
      ]
    }
  ]
}
`;

  return await generateAIResponse({
    prompt,
    systemPrompt: "You are an expert technical curriculum designer.",
    jsonMode: true,
    temperature: 0.3,
  });
};
