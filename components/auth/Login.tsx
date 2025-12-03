"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  // Add proper type to the event parameter
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (account && password) {
      router.push("/welcome"); // redirect after login
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="pt-5 gap-5">
        <div>
          <label className="font-bold">Account or Email</label>
          <input
            type="text"
            placeholder="Enter Account or Email"
            className="border p-2 w-full rounded-md"
            required
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>

        <div className="pt-8">
          <label className="font-bold">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 w-full rounded-md"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-900 text-white rounded-full mt-6"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
