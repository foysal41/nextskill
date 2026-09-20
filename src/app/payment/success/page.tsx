import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

const PaymentSuccessPage = () => {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />

            <h1 className="mt-6 text-2xl font-bold text-gray-800">
              Verifying your payment...
            </h1>

            <p className="mt-2 text-gray-500">
              Please wait a moment.
            </p>
          </div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
};

export default PaymentSuccessPage;