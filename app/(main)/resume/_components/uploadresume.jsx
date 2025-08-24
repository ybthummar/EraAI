"use client";

import { useState } from "react";
import {
  Upload,
  FileCheck2,
  Loader2,
  AlertCircle,
  FileText,
  Brain,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
        let errorMsg = `Server error: ${res.status} ${res.statusText}`;
        try {
          const errorData = await res.json();
          if (errorData.detail) errorMsg += ` - ${errorData.detail}`;
          else if (errorData.error) errorMsg += ` - ${errorData.error}`;
        } catch {}
        throw new Error(errorMsg);
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
    <div className="max-w-3xl mx-auto space-y-6 p-6">
      <p className="text-center text-muted-foreground max-w-lg mx-auto">
        Upload your resume and let our AI analyze it for strengths, weaknesses, 
        and potential career fit.
      </p>

      <Card className="shadow-lg border rounded-2xl">
        <CardHeader className="flex flex-col items-center gap-2">
          <Upload className="h-10 w-10 text-blue-600" />
          <CardTitle>Upload Resume</CardTitle>
          <CardDescription>
            Supported formats: PDF, DOCX
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <label
            htmlFor="resume-upload"
            className="flex cursor-pointer items-center justify-center w-full gap-2 rounded-lg border border-dashed border-gray-400 p-6 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition"
          >
            <FileText className="h-6 w-6" />
            <span>{file ? file.name : "Click to select your resume"}</span>
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
            className={`w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition shadow-md ${
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
        </CardContent>
      </Card>

      {/* Results Section */}
      {prediction && (
        <Card className="border-green-500 bg-green-50">
          <CardHeader className="flex flex-row items-center gap-2">
            <FileCheck2 className="h-6 w-6 text-green-600" />
            <CardTitle>Analysis Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold text-green-700">
              Career Fit: <Badge variant="outline">{prediction}</Badge>
            </div>
            <div className="mt-3">
              <Progress value={80} className="h-2 bg-green-200" />
              <p className="text-xs text-gray-500 mt-1">
                AI confidence score (demo value)
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-red-500 bg-red-50">
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-600" />
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700 font-medium">{error}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
