"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary check (You can replace with real auth later)
    if (account && password) {
      router.push("/welcome"); // redirect to welcome page
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      <div className="border p-4 bg-green-50 rounded-2xl">
        <h1 className="text-gray-600">
          Username:{" "}
          <span className="font-bold text-green-800">Employer or Candidate</span>
        </h1>
        <h1 className="text-gray-600">
          Password: <span className="font-bold text-green-800">uxper123</span>
        </h1>
      </div>

      <form className="pt-5 gap-5" onSubmit={handleLogin}>
        <div>
          <label className="font-bold">Account or Email</label>
          <br />
          <input
            type="text"
            placeholder="Enter Account or Email"
            className="border p-2 w-full pl-4 rounded-md"
            onChange={(e) => setAccount(e.target.value)}
             required 
          />
        </div>

        <div className="pt-8">
          <label className="font-bold">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 w-full pl-4 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
             required 
          />
        </div>

        <h1 className="pt-5 pb-5">
          Forgot your password?{" "}
          <span className="text-green-900">Reset password.</span>
        </h1>

        <button
          type="submit"
          className="w-full p-3 bg-green-900 text-white rounded-full mt-4"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
