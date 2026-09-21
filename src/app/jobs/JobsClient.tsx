"use client";

import { useState } from "react";
import JobSearchForm from "./JobSearchForm";
import JobResults from "./JobResults";

type JobsClientProps = {
  apiUrl: string | undefined;
};

export default function JobsClient({
  apiUrl,
}: JobsClientProps) {
  const [jobs, setJobs] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <JobSearchForm
        apiUrl={apiUrl}
        onSearch={setJobs}
        loading={loading}
        setLoading={setLoading}
      />

      <JobResults jobs={jobs} loading={loading} />
    </main>
  );
}


