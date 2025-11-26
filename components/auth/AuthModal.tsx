"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Login from "./Login";
import SignUp from "./SignUp";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange }) => {
  const [authState, setAuthState] = useState<"login" | "signup">("login");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {authState === "login" ? "Welcome Back" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex gap-4 mt-4 mb-6 border-b pb-2">
          <button
            onClick={() => setAuthState("login")}
            className={`${
              authState === "login"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setAuthState("signup")}
            className={`${
              authState === "signup"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Render Forms */}
        {authState === "login" && <Login />}
        {authState === "signup" && <SignUp />}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
