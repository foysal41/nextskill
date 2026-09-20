import { Suspense } from "react";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">
            Loading register...
          </p>
        </section>
      }
    >
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;