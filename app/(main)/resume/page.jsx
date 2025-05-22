import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";
import UploadResume from './_components/uploadresume';

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="font-bold gradient-title text-5xl md:text-6xl">
          Resume Anaylysis
        </h1>
        <div className="space-x-2">
        </div>
</div>
      {/* Upload Resume Component */}
      <UploadResume />

      {/* Resume Builder Component */}
      <div className="container mx-auto py-6">
        <ResumeBuilder initialContent={resume?.content} />
      </div>
    </main>
  );
}
