"use client";
import React from "react";

const Login = () => {
  return (
    <div className=" ">
      <div className="border  p-4 bg-green-50 rounded-2xl">
        <h1 className="text-gray-600">
          Username:{" "}
          <span className="font-bold text-green-800">
            {" "}
            Employer or Candidate
          </span>
        </h1>
        <h1 className="text-gray-600">
          Password: <span className="font-bold text-green-800"> uxper123 </span>
        </h1>
      </div>

      <form action="" className=" pt-5 gap-5">
        <div className="">
          <label htmlFor="" className="font-bold">
            Account or Email
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Account or Email"
            className="border p-2 w-full pl-4"
          />
        </div>

        <div className="pt-8">
          <label htmlFor="" className="font-bold">
            Password
          </label>
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter password"
            className="border p-2 w-full pl-4"
          />
        </div>
      </form>

      <h1 className="pt-5 pb-5">
        Forgot your password?{" "}
        <span className="text-green-900"> Reset password.</span>
      </h1>

      <button className="w-full p-3 bg-green-900 border rounded-full text-white pt-4">
        Sign in
      </button>
    </div>
  );
};

export default Login;
