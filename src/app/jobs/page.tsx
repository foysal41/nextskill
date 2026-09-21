import JobsClient from "./JobsClient";

export default function JobsPage() {
  const apiUrl = process.env.NEXT_SERVER_URL;

  return <JobsClient apiUrl={apiUrl} />;
}