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

/**
 * Strips markdown code fences (```json ... ```) if the model wraps
 * its JSON response in them, so JSON.parse doesn't fail.
 */
function cleanJsonResponse(text) {
  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

export const generateCareerRoadmap = async ({
  targetRole,
  currentLevel,
  currentSkills,
}) => {
  const groq = getGroqClient();

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
1. Create between 4 and 6 phases that logically progress from foundational to advanced to job-ready, tailored SPECIFICALLY to "${targetRole}" (not a generic web development roadmap unless the role actually is web development).
2. If the person already has some of the listed current skills, take that into account — do not repeat topics they already know as an early phase; adjust the starting point accordingly.
3. Each phase must be realistic and relevant to the actual skills, tools, and knowledge needed for "${targetRole}" specifically (for example, a "DSA" roadmap should focus on data structures, algorithms, complexity analysis, and problem solving — NOT React, Node.js, or MongoDB unless directly relevant).
4. Return ONLY valid JSON, and nothing else — no markdown, no explanation, no preamble.
5. The JSON must be an array of phase objects, each with this exact structure:

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

Do not include a "completed" field — that will be added separately.
Do not wrap the JSON in markdown code fences.
Return only the JSON array.
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.6,
  });

  const rawText = completion.choices[0]?.message?.content || "";
  const cleanedText = cleanJsonResponse(rawText);

  let phases;
  try {
    phases = JSON.parse(cleanedText);
  } catch (err) {
    console.error("Failed to parse AI roadmap JSON:", cleanedText);
    throw new Error("AI returned an invalid roadmap format. Please try again.");
  }

  if (!Array.isArray(phases) || phases.length === 0) {
    throw new Error("AI did not return a valid roadmap.");
  }

  // Add the "completed" field to every phase (always starts false)
  const roadmap = phases.map((phase) => ({
    phase: phase.phase || "",
    title: phase.title || "",
    description: phase.description || "",
    skills: Array.isArray(phase.skills) ? phase.skills : [],
    projects: Array.isArray(phase.projects) ? phase.projects : [],
    duration: phase.duration || "",
    completed: false,
  }));

  return roadmap;
};
