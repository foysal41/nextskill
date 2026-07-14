'use client'
import { authClient } from "@/lib/auth-client";
import { LoginUser } from "@/types/LoginUser";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const formSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as unknown as LoginUser;

    //Form validation
    if (!user.email || !user.password ) {
      toast.error("Please fill in all fields");
      return;
    }

    const {data, error} = await authClient.signIn.email({
       email: user.email,
        password: user.password,
        callbackURL: "/"
    })

    if(error){
        toast.error("Account is not create");
        return;
    }

    toast.success("Account Login Successfully");
    
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to continue your learning journey.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formSubmit} className="mt-8 space-y-5">
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              href="/auth/forgot-password"
              className="text-orange-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-orange-500 font-semibold text-white transition hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="px-4 text-sm text-gray-500">OR</span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 font-medium transition hover:bg-gray-100"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600">
          Dont have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-orange-500 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;