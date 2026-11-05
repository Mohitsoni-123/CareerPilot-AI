import { generateAIResponse, parseJSONSafely } from "./aiGateway.js";

export const generateCareerRoadmap = async ({
  targetRole,
  currentLevel,
  currentSkills,
}) => {
  const skillsText =
    Array.isArray(currentSkills) && currentSkills.length > 0
      ? currentSkills.join(", ")
      : "None specified";

  const prompt = `
You are an expert career mentor and technical curriculum designer.

Generate a complete, realistic, phase-by-phase career roadmap for someone who wants to become a: "${targetRole}"

Their current skill level is: ${currentLevel}
Their current skills are: ${skillsText}

Rules:
1. Create between 4 and 6 phases that logically progress from foundational to advanced to job-ready, tailored SPECIFICALLY to "${targetRole}".
2. Each phase must be realistic and relevant to modern industry requirements.
3. Return ONLY valid JSON array with this exact structure:

[
  {
    "phase": "Phase 1",
    "title": "Short phase title",
    "description": "One or two sentence description of what this phase covers and why.",
    "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    "projects": ["Project idea 1", "Project idea 2"],
    "duration": "e.g. 2-4 Weeks"
  }
]
`;

  const parsed = await generateAIResponse({
    prompt,
    systemPrompt: "You are a senior tech curriculum planner. Respond with a valid JSON array only.",
    jsonMode: false,
    temperature: 0.5,
  });

  const phases = typeof parsed === "string" ? parseJSONSafely(parsed) : parsed;

  if (!Array.isArray(phases) || phases.length === 0) {
    throw new Error("AI did not return a valid roadmap array. Please try again.");
  }

  return phases.map((phase, idx) => ({
    phase: phase.phase || `Phase ${idx + 1}`,
    title: phase.title || `Phase ${idx + 1}`,
    description: phase.description || "",
    skills: Array.isArray(phase.skills) ? phase.skills : [],
    projects: Array.isArray(phase.projects) ? phase.projects : [],
    duration: phase.duration || "3-4 Weeks",
    completed: false,
  }));
};
