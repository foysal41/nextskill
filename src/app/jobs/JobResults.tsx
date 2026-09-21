import Image from "next/image";

type Job = {
  id: number;
  title: string;
  organization: string;
  organization_logo?: string;
  url: string;

  locations?: {
    address?: {
      addressLocality?: string;
      addressRegion?: string;
      addressCountry?: string;
    };
  }[];

  salary?: string | null;

  employment_type?: string[];

  seniority?: string;

  ai_experience_level?: string;

  ai_work_arrangement?: string;

  ai_salary_currency?: string;

  ai_salary_value?: number;

  ai_salary_min_value?: number | null;

  ai_salary_max_value?: number | null;

  ai_salary_unit_text?: string;

  ai_key_skills?: string[];

  ai_benefits?: string[];

  description_text?: string;

  date_posted?: string;
};

type JobResultsProps = {
  jobs: unknown[];
  loading: boolean;
};

const JobResults = ({
  jobs,
  loading,
}: JobResultsProps) => {
  if (loading) {
    return (
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-600">
            Searching jobs...
          </p>
        </div>
      </section>
    );
  }

  if (jobs.length === 0) {
    return (
      <section className="px-4 py-12 max-w-[1500px] mx-auto px-[1rem]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-600">
            No jobs found.
          </p>
        </div>
      </section>
    );
  }

  const typedJobs = jobs as Job[];

  return (
    <section className="px-4 py-12 max-w-[1500px] mx-auto ">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {typedJobs.length} Jobs Found
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest job opportunities matching your search
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {typedJobs.map((job) => {
            const location =
              job.locations?.[0]?.address
                ?.addressLocality ||
              job.locations?.[0]?.address
                ?.addressCountry ||
              "Location not specified";

            const salary =
              job.ai_salary_value &&
              job.ai_salary_currency
                ? `${job.ai_salary_currency} ${job.ai_salary_value.toLocaleString()}${job.ai_salary_unit_text === "MONTH" ? "/month" : ""}`
                : null;

            return (
              <article
                key={job.id}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Company Logo + Job Info */}
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                    {job.organization_logo ? (
                      <Image
                        src={job.organization_logo}
                        height={512}
                        width={512}
                        alt={`${job.organization} logo`}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";

                          const fallback =
                            e.currentTarget.parentElement?.querySelector(
                              "[data-logo-fallback]",
                            );

                          if (fallback) {
                            fallback.classList.remove("hidden");
                          }
                        }}
                      />
                    ) : null}

                    <span
                      data-logo-fallback
                      className={`text-xl font-bold text-orange-500 ${
                        job.organization_logo ? "hidden" : ""
                      }`}
                    >
                      {job.organization?.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Company */}
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-lg font-bold text-gray-900 transition group-hover:text-orange-500">
                      {job.title}
                    </h3>

                    <p className="mt-1 truncate text-sm font-medium text-gray-600">
                      {job.organization}
                    </p>
                  </div>
                </div>

                {/* Job Meta */}
                <div className="mt-5 space-y-3">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📍</span>

                    <span>{location}</span>
                  </div>

                  {/* Work Arrangement */}
                  {job.ai_work_arrangement && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>💼</span>

                      <span>{job.ai_work_arrangement}</span>
                    </div>
                  )}

                  {/* Experience */}
                  {job.ai_experience_level && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>🎯</span>

                      <span>{job.ai_experience_level} years</span>
                    </div>
                  )}

                  {/* Employment */}
                  {job.employment_type?.length && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>⏱️</span>

                      <span>{job.employment_type.join(", ")}</span>
                    </div>
                  )}

                  {/* Salary */}
                  {salary && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <span>💰</span>

                      <span>{salary}</span>
                    </div>
                  )}
                </div>

                {/* Skills */}
                {job.ai_key_skills && job.ai_key_skills.length > 0 && (
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Skills
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.ai_key_skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {job.description_text && (
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-500">
                    {job.description_text}
                  </p>
                )}

                {/* Footer */}
                <div className="mt-auto pt-6">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    View Job →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobResults;