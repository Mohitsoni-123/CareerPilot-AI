import User from "../models/User.js";

// Get Profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error("Get Profile Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get profile",
    });
  }
};


// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      profileImage,
      skills,
      education,
      experience,
      projects,
      certifications,
    } = req.body;

    const user = await User.findById(
      req.user._id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name || user.name;

    user.profileImage =
      profileImage ?? user.profileImage;

    user.skills =
      skills ?? user.skills;

    user.education =
      education ?? user.education;

    user.experience =
      experience ?? user.experience;

    user.projects =
      projects ?? user.projects;

    user.certifications =
      certifications ?? user.certifications;

    await user.save();

    const updatedUser = await User.findById(
      user._id
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (error) {
    console.error(
      "Update Profile Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};