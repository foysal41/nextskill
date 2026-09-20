import { Suspense } from "react";
import CheckoutForm from "./CheckoutForm";


const CheckoutPage = () => {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />

            <h1 className="mt-6 text-2xl font-bold text-gray-800">
              Preparing your checkout...
            </h1>

            <p className="mt-2 text-gray-500">
              Please wait...
            </p>
          </div>
        </section>
      }
    >
      <CheckoutForm />
    </Suspense>
  );
};

export default CheckoutPage;