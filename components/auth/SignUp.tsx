"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  // Add type to the event parameter
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents page reload
    router.push("/signup-success"); // redirect
  };

  return (
    <div>
      <form onSubmit={handleSignup} className="-mt-4">
        <div className="flex gap-4">
          <div className="w-full">
            <label className="font-bold">First Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-full">
            <label className="font-bold">Last Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
        </div>

        <div className="pt-6">
          <label className="font-bold">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div className="pt-6">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div className="pt-6">
          <label className="font-bold">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Phone Number"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div className="pt-6">
          <label className="font-bold">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div className="pt-4">
          <label>
            <input type="checkbox" required /> I accept the{" "}
            <span className="text-green-900">terms and Privacy Policy</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-900 text-white rounded-full mt-6"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
