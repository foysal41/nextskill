"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const CheckoutPage = () => {
  const searchParams = useSearchParams();

  const courseId = searchParams.get("courseId");

  const [error, setError] = useState("");

  useEffect(() => {
    const startCheckout = async () => {
      try {
        if (!courseId) {
          setError("Course ID is missing.");
          return;
        }

        // Check authentication
        const { data: session } =
          await authClient.getSession();

        if (!session?.user) {
          const loginUrl =
            `/auth/login?redirect=${encodeURIComponent(
              `/checkout?courseId=${courseId}`
            )}`;

          window.location.href = loginUrl;

          return;
        }

        // Backend URL
        const serverURL =
          process.env.NEXT_PUBLIC_SERVER_URL ||
          "http://localhost:5000";

        // Create Stripe Checkout Session
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
            "Invalid response from server."
          );
        }

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Failed to create checkout session."
          );
        }

        if (!data.checkoutUrl) {
          throw new Error(
            "Stripe checkout URL was not returned."
          );
        }

        // Redirect to Stripe
        window.location.href =
          data.checkoutUrl;

      } catch (error) {
        console.error(
          "Checkout error:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      }
    };

    startCheckout();
  }, [courseId]);

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Checkout Error
          </h1>

          <p className="mt-3 text-gray-600">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">

        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />

        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          Preparing your checkout...
        </h1>

        <p className="mt-2 text-gray-500">
          You will be redirected to Stripe shortly.
        </p>

      </div>
    </section>
  );
};

export default CheckoutPage;