import { useState } from "react";

import api from "../services/api";


const ResumeAnalyzer = () => {

  const [file, setFile] =
    useState(null);

  const [analysis, setAnalysis] =
    useState(null);

  const [loading, setLoading] =
    useState(false);


  const handleUpload = async () => {

    if (!file) {
      alert(
        "Please select a PDF resume"
      );

      return;
    }


    const formData =
      new FormData();

    formData.append(
      "resume",
      file
    );


    setLoading(true);


    try {

      const response =
        await api.post(
          "/resumes/analyze",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );


      setAnalysis(
        response.data.resume
      );


    } catch (error) {

      console.error(
        error
      );

      alert(
        error.response?.data?.message ||
        "Resume analysis failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-5xl mx-auto">


        <h1 className="text-3xl font-bold">
          AI Resume Analyzer
        </h1>

        <p className="text-slate-500 mt-2">
          Upload your resume and get
          AI-powered ATS feedback.
        </p>


        {/* Upload */}

        <div className="bg-white rounded-2xl p-8 mt-8 border">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
            className="w-full border p-4 rounded-lg"
          />


          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >

            {loading
              ? "Analyzing Resume..."
              : "Analyze Resume"}

          </button>

        </div>


        {/* Results */}

        {analysis && (

          <div className="mt-8 space-y-6">


            {/* ATS Score */}

            <div className="bg-white rounded-2xl p-8 border">

              <h2 className="text-xl font-semibold">
                ATS Score
              </h2>

              <div className="text-6xl font-bold text-blue-600 mt-4">
                {analysis.atsScore}%
              </div>

            </div>


            {/* Summary */}

            <div className="bg-white rounded-2xl p-8 border">

              <h2 className="text-xl font-semibold">
                AI Summary
              </h2>

              <p className="text-slate-600 mt-3">
                {analysis.summary}
              </p>

            </div>


            {/* Strengths */}

            <div className="bg-white rounded-2xl p-8 border">

              <h2 className="text-xl font-semibold">
                Strengths
              </h2>

              <ul className="mt-4 space-y-2">

                {analysis.strengths.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="text-green-600"
                    >
                      ✓ {item}
                    </li>

                  )
                )}

              </ul>

            </div>


            {/* Weaknesses */}

            <div className="bg-white rounded-2xl p-8 border">

              <h2 className="text-xl font-semibold">
                Areas to Improve
              </h2>

              <ul className="mt-4 space-y-2">

                {analysis.weaknesses.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="text-red-500"
                    >
                      • {item}
                    </li>

                  )
                )}

              </ul>

            </div>


            {/* Missing Skills */}

            <div className="bg-white rounded-2xl p-8 border">

              <h2 className="text-xl font-semibold">
                Recommended Skills
              </h2>

              <div className="flex flex-wrap gap-3 mt-4">

                {analysis.missingSkills.map(
                  (skill, index) => (

                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>

                  )
                )}

              </div>

            </div>


            {/* Suggestions */}

            <div className="bg-white rounded-2xl p-8 border">

              <h2 className="text-xl font-semibold">
                AI Suggestions
              </h2>

              <ul className="mt-4 space-y-3">

                {analysis.suggestions.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="p-3 bg-slate-50 rounded-lg"
                    >
                      {index + 1}. {item}
                    </li>

                  )
                )}

              </ul>

            </div>


          </div>

        )}

      </div>

    </div>

  );

};


export default ResumeAnalyzer;