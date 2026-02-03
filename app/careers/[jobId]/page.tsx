import { jobs } from "@/data/jobs";
import JobDetails from "./JobDetails";  

export async function generateStaticParams() {
  return jobs.map((job) => ({
    jobId: job.id,  // ← Pre-builds pages like /careers/electrical-automation-engineer
  }));
}

// Default export: Pass params to the client component
export default function JobDetailsPage({ params }: { params: { jobId: string } }) {
  return <JobDetails jobId={params.jobId} />;  // ← Pass jobId as prop (no client hooks here!)
}