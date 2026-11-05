import express from "express";
import { chatWithCareerAssistant } from "../controllers/careerAssistantController.js";

const router = express.Router();

// Career Assistant allows authenticated or guest conversations seamlessly
router.post("/chat", chatWithCareerAssistant);

export default router;
