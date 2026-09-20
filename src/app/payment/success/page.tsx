"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();

  const sessionId =
    searchParams.get("session_id");

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          Your payment has been completed successfully.
          Thank you for enrolling in this course.
        </p>

        {/* Session ID */}
        {sessionId && (
          <div className="mt-6 rounded-lg bg-gray-100 p-4 text-left">
            <p className="text-xs font-semibold text-gray-500">
              Payment Session
            </p>

            <p className="mt-1 break-all text-sm text-gray-700">
              {sessionId}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            href="/explore"
            className="flex-1 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Browse Courses
          </Link>

          <Link
            href="/"
            className="flex-1 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Go Home
          </Link>

        </div>

      </div>
    </main>
  );
};

export default PaymentSuccessPage;