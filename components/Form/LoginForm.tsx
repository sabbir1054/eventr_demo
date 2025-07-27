"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const LoginForm = () => {
  return (
    <>
      <div className="border rounded-lg p-6 pt-10 shadow-sm bg-white md:min-w-[450px] max-w-[600px]">
        <h3 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-10">
          Login
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              User name or email <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              className="h-12"
              placeholder="User name or email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              className="h-12"
              placeholder="Enter password"
            />
          </div>

          <div className="md:mt-38 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>
            <Link
              href="/forgetPassword"
              className="text-pink-600 hover:underline"
            >
              Forgot password ?
            </Link>
          </div>

          <Button className="w-full bg-primary hover:bg-pink-600 hover:cursor-pointer text-white h-12">
            Log in
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
