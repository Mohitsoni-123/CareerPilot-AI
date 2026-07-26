import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import api from "../services/api";

import { login } from "../redux/slices/authSlice";


const Profile = () => {

  const dispatch = useDispatch();

  const { user, token } =
    useSelector(
      (state) => state.auth
    );


  const [formData, setFormData] =
    useState({
      name: "",
      profileImage: "",
      skills: [],
      education: [],
      experience: [],
      projects: [],
      certifications: [],
    });


  const [skillInput, setSkillInput] =
    useState("");

  const [educationInput, setEducationInput] =
    useState("");

  const [experienceInput, setExperienceInput] =
    useState("");

  const [projectInput, setProjectInput] =
    useState("");

  const [certificationInput, setCertificationInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  // Get Profile

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const response =
          await api.get(
            "/users/profile"
          );

        const profile =
          response.data.user;

        setFormData({
          name:
            profile.name || "",

          profileImage:
            profile.profileImage || "",

          skills:
            profile.skills || [],

          education:
            profile.education || [],

          experience:
            profile.experience || [],

          projects:
            profile.projects || [],

          certifications:
            profile.certifications || [],
        });

      } catch (error) {

        console.error(
          "Profile Error:",
          error
        );

      }

    };


    fetchProfile();

  }, []);


  // Name Change

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });

  };


  // Add Array Item

  const addItem = (
    field,
    value,
    setValue
  ) => {

    if (!value.trim()) return;

    setFormData({
      ...formData,

      [field]: [
        ...formData[field],
        value.trim(),
      ],
    });

    setValue("");

  };


  // Remove Array Item

  const removeItem = (
    field,
    index
  ) => {

    setFormData({
      ...formData,

      [field]:
        formData[field].filter(
          (_, i) =>
            i !== index
        ),
    });

  };


  // Save Profile

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await api.put(
          "/users/profile",
          formData
        );

      const updatedUser =
        response.data.user;


      // Update Redux

      dispatch(
        login({
          token,
          user: updatedUser,
        })
      );


      alert(
        "Profile updated successfully!"
      );

    } catch (error) {

      console.error(
        "Update Profile Error:",
        error
      );

      alert(
        "Failed to update profile"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Complete your profile to get
          better AI career recommendations.
        </p>


        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 mt-8 space-y-8"
        >


          {/* Basic Information */}

          <div>

            <h2 className="text-xl font-semibold mb-4">
              Basic Information
            </h2>


            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />


            <input
              type="text"
              name="profileImage"
              value={
                formData.profileImage
              }
              onChange={handleChange}
              placeholder="Profile Image URL"
              className="w-full border p-3 rounded-lg mt-4"
            />

          </div>


          {/* Skills */}

          <div>

            <h2 className="text-xl font-semibold mb-4">
              Skills
            </h2>

            <div className="flex gap-3">

              <input
                value={skillInput}
                onChange={(e) =>
                  setSkillInput(
                    e.target.value
                  )
                }
                placeholder="e.g. React.js"
                className="flex-1 border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() =>
                  addItem(
                    "skills",
                    skillInput,
                    setSkillInput
                  )
                }
                className="bg-blue-600 text-white px-5 rounded-lg"
              >
                Add
              </button>

            </div>


            <div className="flex flex-wrap gap-2 mt-4">

              {formData.skills.map(
                (skill, index) => (

                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg"
                  >

                    {skill}

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(
                          "skills",
                          index
                        )
                      }
                      className="ml-2"
                    >
                      ×
                    </button>

                  </span>

                )
              )}

            </div>

          </div>


          {/* Education */}

          <div>

            <h2 className="text-xl font-semibold mb-4">
              Education
            </h2>

            <div className="flex gap-3">

              <input
                value={educationInput}
                onChange={(e) =>
                  setEducationInput(
                    e.target.value
                  )
                }
                placeholder="B.Tech CSE - JECRC University"
                className="flex-1 border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() =>
                  addItem(
                    "education",
                    educationInput,
                    setEducationInput
                  )
                }
                className="bg-blue-600 text-white px-5 rounded-lg"
              >
                Add
              </button>

            </div>


            <div className="mt-4 space-y-2">

              {formData.education.map(
                (item, index) => (

                  <div
                    key={index}
                    className="border p-3 rounded-lg flex justify-between"
                  >

                    {item}

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(
                          "education",
                          index
                        )
                      }
                    >
                      ×
                    </button>

                  </div>

                )
              )}

            </div>

          </div>


          {/* Experience */}

          <div>

            <h2 className="text-xl font-semibold mb-4">
              Experience
            </h2>

            <div className="flex gap-3">

              <input
                value={experienceInput}
                onChange={(e) =>
                  setExperienceInput(
                    e.target.value
                  )
                }
                placeholder="Web Development Intern - UDAAN"
                className="flex-1 border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() =>
                  addItem(
                    "experience",
                    experienceInput,
                    setExperienceInput
                  )
                }
                className="bg-blue-600 text-white px-5 rounded-lg"
              >
                Add
              </button>

            </div>


            <div className="mt-4 space-y-2">

              {formData.experience.map(
                (item, index) => (

                  <div
                    key={index}
                    className="border p-3 rounded-lg flex justify-between"
                  >

                    {item}

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(
                          "experience",
                          index
                        )
                      }
                    >
                      ×
                    </button>

                  </div>

                )
              )}

            </div>

          </div>


          {/* Projects */}

          <div>

            <h2 className="text-xl font-semibold mb-4">
              Projects
            </h2>

            <div className="flex gap-3">

              <input
                value={projectInput}
                onChange={(e) =>
                  setProjectInput(
                    e.target.value
                  )
                }
                placeholder="AI Resume Builder"
                className="flex-1 border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() =>
                  addItem(
                    "projects",
                    projectInput,
                    setProjectInput
                  )
                }
                className="bg-blue-600 text-white px-5 rounded-lg"
              >
                Add
              </button>

            </div>


            <div className="mt-4 space-y-2">

              {formData.projects.map(
                (item, index) => (

                  <div
                    key={index}
                    className="border p-3 rounded-lg flex justify-between"
                  >

                    {item}

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(
                          "projects",
                          index
                        )
                      }
                    >
                      ×
                    </button>

                  </div>

                )
              )}

            </div>

          </div>


          {/* Certifications */}

          <div>

            <h2 className="text-xl font-semibold mb-4">
              Certifications
            </h2>

            <div className="flex gap-3">

              <input
                value={
                  certificationInput
                }
                onChange={(e) =>
                  setCertificationInput(
                    e.target.value
                  )
                }
                placeholder="Google Cloud Certificate"
                className="flex-1 border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() =>
                  addItem(
                    "certifications",
                    certificationInput,
                    setCertificationInput
                  )
                }
                className="bg-blue-600 text-white px-5 rounded-lg"
              >
                Add
              </button>

            </div>


            <div className="mt-4 space-y-2">

              {formData.certifications.map(
                (item, index) => (

                  <div
                    key={index}
                    className="border p-3 rounded-lg flex justify-between"
                  >

                    {item}

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(
                          "certifications",
                          index
                        )
                      }
                    >
                      ×
                    </button>

                  </div>

                )
              )}

            </div>

          </div>


          {/* Save */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
          >

            {loading
              ? "Saving..."
              : "Save Profile"}

          </button>


        </form>

      </div>

    </div>

  );

};


export default Profile;