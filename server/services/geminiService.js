// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Create Gemini client when needed
// const getGeminiModel = () => {
//   const apiKey = process.env.GEMINI_API_KEY;

//   if (!apiKey) {
//     throw new Error("GEMINI_API_KEY is not configured");
//   }

//   const genAI = new GoogleGenerativeAI(apiKey);

//   return genAI.getGenerativeModel({
//     model: "gemini-2.0-flash",
//   });
// };


// // =====================================
// // RESUME AI ANALYSIS
// // =====================================

// export const analyzeResumeWithAI = async (resumeText) => {
//   const model = getGeminiModel();

//   const prompt = `
// You are an expert ATS resume analyzer and career coach.

// Analyze the following resume.

// Resume:
// ${resumeText}

// Return ONLY valid JSON.

// Use exactly this structure:

// {
//   "atsScore": 0,
//   "summary": "",
//   "strengths": [],
//   "weaknesses": [],
//   "missingSkills": [],
//   "suggestions": []
// }

// Rules:

// 1. atsScore must be a number between 0 and 100.
// 2. Give 3-5 strengths.
// 3. Give 3-5 weaknesses.
// 4. Give 3-8 missing or recommended skills.
// 5. Give 3-5 actionable resume improvement suggestions.
// 6. Keep the summary concise.
// 7. Do not include markdown.
// `;

//   const result = await model.generateContent(prompt);

//   const response = result.response.text();

//   return response;
// };


// // =====================================
// // AI CAREER ROADMAP
// // =====================================

// export const generateCareerRoadmapWithAI = async ({
//   targetRole,
//   currentLevel,
//   currentSkills,
// }) => {
//   const model = getGeminiModel();

//   const skills = Array.isArray(currentSkills)
//     ? currentSkills
//     : [];

//   const prompt = `
// You are an expert career coach and technical roadmap planner.

// Create a personalized learning roadmap for a user who wants to become a ${targetRole}.

// User's current level:
// ${currentLevel}

// User's current skills:
// ${skills.join(", ")}

// Return ONLY valid JSON.

// Use exactly this structure:

// {
//   "phases": [
//     {
//       "title": "",
//       "description": "",
//       "skills": [],
//       "projects": []
//     }
//   ]
// }

// Rules:

// 1. Create 5 to 8 learning phases.
// 2. Start from the user's current skill level.
// 3. Do not unnecessarily recommend skills the user already knows.
// 4. Focus on skills required for the target role.
// 5. Include missing or advanced skills that the user should learn.
// 6. Order phases from beginner to advanced based on the user's current level.
// 7. Each phase must have:
//    - title
//    - concise description
//    - 3 to 6 skills
//    - 1 to 3 practical projects
// 8. Projects should be realistic and relevant to the target role.
// 9. The roadmap should be practical for getting job-ready.
// 10. Do not include markdown.
// 11. Return ONLY valid JSON.
// `;

//   const result = await model.generateContent(prompt);

//   const response = result.response.text();

//   return response;
// };

















import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeResumeWithAI = async (resumeText) => {
  const prompt = `
You are an expert ATS resume analyzer and career coach.

Analyze the following resume.

Resume:
${resumeText}

Return ONLY valid JSON.

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": []
}
`;

  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};

export const generateCareerRoadmapWithAI = async ({
  targetRole,
  currentLevel,
  currentSkills,
}) => {
  const prompt = `
You are an expert career coach.

Create a roadmap for becoming a ${targetRole}.

Current Level:
${currentLevel}

Skills:
${currentSkills.join(",")}

Return ONLY valid JSON.

{
  "phases":[
    {
      "title":"",
      "description":"",
      "skills":[],
      "projects":[]
    }
  ]
}
`;

  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};