"use client";

import { useState } from "react";

type JobSearchFormProps = {
  apiUrl: string | undefined;
  onSearch: (jobs: unknown[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};
const JobSearchForm = ({
   apiUrl,
  onSearch,
  loading,
  setLoading,
}: JobSearchFormProps) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [workArrangement, setWorkArrangement] =
    useState<string[]>([]);
  const [experience, setExperience] = useState("0-2");
  const [employmentType, setEmploymentType] =
    useState("FULL_TIME");
  const [hasSalary, setHasSalary] = useState(false);

  const handleWorkArrangement = (value: string) => {
    setWorkArrangement((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const searchData = {
      keyword,
      location,
      workArrangement,
      experience,
      employmentType,
      hasSalary,
    };

    console.log("Job Search Data:", searchData);

    if (!apiUrl) {
      console.error(
        "NEXT_SERVER_URL is not available."
      );

      return;
    }

    try {
      setLoading(true);

      console.log(
        "Request URL:",
        `${apiUrl}/api/jobs/search`
      );

      const response = await fetch(
        `${apiUrl}/api/jobs/search`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(searchData),
        }
      );

      const data = await response.json();

      console.log(
        "Job Search Response:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to search jobs"
        );
      }

      onSearch(data.jobs || []);
    } catch (error) {
      console.error(
        "Job Search Error:",
        error
      );

      onSearch([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-25 max-w-[1500px] mx-auto rounded-2xl bg-white p-6 shadow-lg md:p-8"
    >
      {/* Job Title */}
      <div className="mb-6">
        <label
          htmlFor="keyword"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Job Title
        </label>

        <input
          id="keyword"
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="e.g. React Developer"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {/* Location */}
      <div className="mb-6">
        <label
          htmlFor="location"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Location
        </label>

        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          placeholder="e.g. United States"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {/* Work Arrangement */}
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold text-gray-700">
          Work Arrangement
        </p>

        <div className="flex flex-wrap gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={workArrangement.includes(
                "Remote Solely"
              )}
              onChange={() =>
                handleWorkArrangement(
                  "Remote Solely"
                )
              }
              className="h-4 w-4 accent-orange-500"
            />

            Remote
          </label>

          <label className="flex cursor-pointer items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={workArrangement.includes(
                "Hybrid"
              )}
              onChange={() =>
                handleWorkArrangement(
                  "Hybrid"
                )
              }
              className="h-4 w-4 accent-orange-500"
            />

            Hybrid
          </label>

          <label className="flex cursor-pointer items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={workArrangement.includes(
                "On-site"
              )}
              onChange={() =>
                handleWorkArrangement(
                  "On-site"
                )
              }
              className="h-4 w-4 accent-orange-500"
            />

            On-site
          </label>
        </div>
      </div>

      {/* Experience + Employment */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Experience */}
        <div>
          <label
            htmlFor="experience"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Experience
          </label>

          <select
            id="experience"
            value={experience}
            onChange={(e) =>
              setExperience(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          >
            <option value="0-2">
              0-2 years
            </option>

            <option value="2-5">
              2-5 years
            </option>

            <option value="5-10">
              5-10 years
            </option>

            <option value="10+">
              10+ years
            </option>
          </select>
        </div>

        {/* Employment Type */}
        <div>
          <label
            htmlFor="employmentType"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Employment Type
          </label>

          <select
            id="employmentType"
            value={employmentType}
            onChange={(e) =>
              setEmploymentType(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          >
            <option value="FULL_TIME">
              Full Time
            </option>

            <option value="PART_TIME">
              Part Time
            </option>

            <option value="CONTRACTOR">
              Contract
            </option>

            <option value="TEMPORARY">
              Temporary
            </option>

            <option value="INTERN">
              Internship
            </option>
          </select>
        </div>
      </div>

      {/* Salary */}
      <div className="mt-6">
        <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-gray-700">
          <input
            type="checkbox"
            checked={hasSalary}
            onChange={(e) =>
              setHasSalary(e.target.checked)
            }
            className="h-4 w-4 accent-orange-500"
          />

          Has Salary Information
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Searching..."
          : "🔍 Search Jobs"}
      </button>
    </form>
  );
};

export default JobSearchForm;