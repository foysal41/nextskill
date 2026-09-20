"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
      // =====================================
      // 1. Check Authentication
      // =====================================

      const { data: session } =
        await authClient.getSession();

      // =====================================
      // 2. User is NOT Logged In
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
      // 3. User is Logged In
      // =====================================

      setLoading(true);

      // =====================================
      // 4. Backend URL
      // =====================================

      const serverURL =
        process.env.NEXT_PUBLIC_SERVER_URL ||
        "http://localhost:5000";

      // =====================================
      // 5. Create Stripe Checkout Session
      // =====================================

      const response = await fetch(
        `${serverURL}/api/create-checkout-session`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            courseId,
          }),
        }
      );

      // =====================================
      // 6. Read Backend Response
      // =====================================

      const responseText =
        await response.text();

      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error(
          "Invalid backend response:",
          responseText
        );

        throw new Error(
          "Server returned an invalid response."
        );
      }

      // =====================================
      // 7. Handle Backend Error
      // =====================================

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to create checkout session."
        );
      }

      // =====================================
      // 8. Check Stripe Checkout URL
      // =====================================

      if (!data.checkoutUrl) {
        throw new Error(
          "Stripe checkout URL was not returned."
        );
      }

      // =====================================
      // 9. Redirect to Stripe Checkout
      // =====================================

      window.location.href =
        data.checkoutUrl;

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

  // =====================================
  // Button UI
  // =====================================

  return (
    <button
      type="button"
      onClick={handleEnroll}
      disabled={loading}
      className="mt-8 w-full py-4 rounded-xl bg-[#FE7310] text-white font-bold hover:bg-orange-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading
        ? "Redirecting..."
        : "Enroll Now"}
    </button>
  );
};

export default EnrollButton;