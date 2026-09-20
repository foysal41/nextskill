import { Suspense } from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">
            Loading login...
          </p>
        </section>
      }
    >
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;