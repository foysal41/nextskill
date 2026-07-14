import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center bg-gray-50 px-4 py-35">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join NextSkill and start your learning journey.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="********"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-orange-500 text-white font-semibold transition hover:bg-orange-600"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="px-4 text-sm text-gray-500">OR</span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google Register */}
        <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 font-medium transition hover:bg-gray-100">
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Login */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-orange-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;