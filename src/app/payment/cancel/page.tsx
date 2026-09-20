import Link from "next/link";

const PaymentCancelPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-10 w-10 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Payment Cancelled
        </h1>

        <p className="mt-3 text-gray-600">
          Your payment was cancelled. No payment
          was completed.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default PaymentCancelPage;