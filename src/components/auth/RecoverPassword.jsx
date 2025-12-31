import React, { useState } from "react";
import { Mail } from "lucide-react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RecoverPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setError("Email is required.");
    } else if (!emailRegex.test(value)) {
      setError("Enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    // TEMPORARY: replace later with real backend call
    console.log("Recover password email:", email);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-4 sm:px-0">
      {/* Background abstract shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 w-[850px] h-[850px] rounded-[40%] bg-[#0b0f0a] opacity-90 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-1/2 top-1/2 w-[650px] h-[650px] rounded-[40%] bg-lime-400/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-xl">
        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-2">
          <span className="text-[40px] sm:text-[52px] font-semibold tracking-tight text-lime-400">
            Qyoob
          </span>
          <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-300 border border-lime-400/40 self-start translate-y-2 sm:translate-y-3">
            BETA
          </span>
        </div>

        {/* Card */}
        <div className="mx-auto w-full max-w-md rounded-2xl bg-[#151515]/95 border border-[#262626] shadow-[0_24px_80px_rgba(0,0,0,0.85)] px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-xl font-semibold mb-2">Recover Password</h2>
          <p className="text-md text-gray-400 mb-6">
            Enter your registered email address. We will send you a password reset link.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-200 mb-2"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="john@gmail.com"
                  className={`w-full rounded-md border bg-black/60 pl-10 pr-4 py-3 text-md outline-none transition focus:ring-2 
                  ${
                    error
                      ? "border-red-500 focus:ring-red-500/60"
                      : "border-[#333333] focus:border-lime-400 focus:ring-lime-400/60"
                  } placeholder:text-gray-500`}
                />
              </div>
              {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-lime-400 py-3 text-md font-semibold text-black hover:bg-lime-300 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-lime-400"
              >
                Send Reset Link
              </button>
            </div>

            {/* Back to login */}
            <div className="text-center">
              <a
                href="/login"
                className="text-sm font-medium text-lime-300 hover:text-lime-200"
              >
                Back to Login
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-3 text-[13px] text-gray-400">
          <button type="button" className="hover:text-gray-200">
            Terms &amp; Conditions
          </button>
          <span className="text-gray-600">|</span>
          <button type="button" className="hover:text-gray-200">
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}
