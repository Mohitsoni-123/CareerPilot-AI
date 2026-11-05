import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const userExists = await User.findOne({ email: normalizedEmail });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      skills: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Git"],
      education: ["B.Tech Computer Science & Engineering"],
    });

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find user
    let user = await User.findOne({ email: normalizedEmail });

    // Auto-create demo user if attempting demo login and user does not exist in DB yet
    if (!user && normalizedEmail === "demo@careerpilot.ai" && password === "password123") {
      const hashedPassword = await bcrypt.hash("password123", 10);
      user = await User.create({
        name: "Demo Candidate",
        email: "demo@careerpilot.ai",
        password: hashedPassword,
        skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Tailwind CSS", "Git"],
        education: ["B.Tech Computer Science & Engineering (2022-2026)"],
        experience: ["Full Stack Web Development Intern - Tech Labs (6 Mos)"],
        projects: ["CareerPilot AI - Autonomous Career Platform"],
        certifications: ["Meta Front-End Developer Specialization"],
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Account not found with this email. Please click 'Register' below to create your account first!",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password. Please verify your password or reset it.",
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
        education: user.education,
        experience: user.experience,
        projects: user.projects,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// Get current user profile
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
};
