"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault(); // prevents page reload
    router.push("/signup-success"); // redirect
  };

  return (
    <div>
      <form action="" className="-mt-4">
        <div className="flex">
          <div className="w-full">
            <label htmlFor="" className="font-bold">
              First Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-md"
               required 
            />
          </div>

          <div className="ml-4">
            <label htmlFor="" className="font-bold">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-md"
               required 
            />
          </div>
        </div>

        <div className="w-full pt-6">
          <label htmlFor="" className="font-bold">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="border p-2 w-full rounded-md"
             required 
          />
        </div>

        <div className="w-full pt-6">
          <label htmlFor="" className="font-bold">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-2 w-full rounded-md"
             required 
          />
        </div>

        <div className="w-full pt-6">
          <label htmlFor="" className="font-bold">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Phone Number"
            className="border p-2 w-full rounded-md"
             required 
          />
        </div>

        <div className="pt-8">
          <label className="font-bold">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 w-full rounded-md"
             required 
          />
        </div>
      </form>

      <div>
        <span className="pt-5 pb-5">
          <input type="checkbox" className="mt-4 mb-4"  required /> I accept the{" "}
          <span className="text-green-900">terms and Privacy Policy</span>
        </span>
      </div>

      {/* 🔥 Button Redirects */}
      <button
        onClick={handleSignup}
        className="w-full p-3 bg-green-900 border rounded-full text-white mt-4"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
