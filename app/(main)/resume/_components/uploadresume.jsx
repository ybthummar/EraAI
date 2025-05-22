"use client";

import { useState } from "react";
import {
  Upload,
  FileCheck2,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setPrediction(null);
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        "https://resumeanalyzer-eraai.up.railway.app/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.statusText}`);
      }

      const data = await res.json();
      if (data.prediction) {
        setPrediction(data.prediction);
      } else {
        setError("No prediction received.");
      }
    } catch (err) {
      setError(err.message || "Failed to get prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 border rounded shadow">
      <label
        htmlFor="resume-upload"
        className="flex cursor-pointer items-center justify-center gap-2 rounded border border-dashed border-gray-400 p-6 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition"
      >
        <Upload className="h-6 w-6" />
        <span>
          {file ? file.name : "Click to select your resume (PDF, DOCX)"}
        </span>
        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className={`w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white transition ${
          loading ? "cursor-wait opacity-70" : "hover:bg-blue-700"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="inline-block h-5 w-5 animate-spin mr-2" />
            Analyzing...
          </>
        ) : (
          "Analyze Resume"
        )}
      </button>

      {/* Result Section */}
      {prediction && (
        <div className="flex items-center gap-2 rounded border border-green-500 bg-green-100 p-3 text-green-800 font-semibold animate-fadeIn">
          <FileCheck2 className="h-6 w-6" />
          <span>Analysis Result: {prediction}</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 rounded border border-red-500 bg-red-100 p-3 text-red-700 font-semibold animate-shake">
          <AlertCircle className="h-6 w-6" />
          <span>Error: {error}</span>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease;
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-5px);
          }
          40%,
          80% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
