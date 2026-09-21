"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

interface EnrollButtonProps {
  courseId: string;
}

const EnrollButton = ({
  courseId,
}: EnrollButtonProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setLoading(true);

      // =====================================
      // Check Authentication
      // =====================================

      const { data: session } =
        await authClient.getSession();

      // =====================================
      // Not Logged In
      // =====================================

      if (!session?.user) {
        const checkoutPath =
          `/checkout?courseId=${courseId}`;

        const loginUrl =
          `/auth/login?redirect=${encodeURIComponent(
            checkoutPath
          )}`;

        router.push(loginUrl);

        return;
      }

      // =====================================
      // Go To Checkout
      // =====================================

      router.push(
        `/checkout?courseId=${courseId}`
      );
    } catch (error) {
      console.error(
        "Enrollment error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );

      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleEnroll}
      disabled={loading}
      className="mt-8 w-full py-4 rounded-xl bg-[#FE7310] text-white font-bold hover:bg-orange-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading
        ? "Preparing..."
        : "Enroll Now"}
    </button>
  );
};

export default EnrollButton;