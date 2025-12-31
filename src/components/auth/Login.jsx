import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Live validation per field
    setErrors((prev) => {
      const next = { ...prev };

      if (name === "email") {
        if (!value) {
          next.email = "Email is required.";
        } else if (!emailRegex.test(value)) {
          next.email = "Enter a valid email address.";
        } else {
          next.email = "";
        }
      }

      if (name === "password") {
        if (!value) {
          next.password = "Password is required.";
        } else {
          next.password = "";
        }
      }

      return next;
    });
  };

  const validateForm = () => {
    const nextErrors = {
      email: "",
      password: "",
    };

    if (!form.email) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);

    return !nextErrors.email && !nextErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Temporary: replace with your real auth call later
    console.log("Login payload:", {
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background blob / abstract shape */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Center large soft shape behind card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-[40%] bg-[#0b0f0a] opacity-90" />

        {/* Green glow accent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-[40%] bg-lime-400/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-xl px-4 sm:px-0">
        {/* Logo / brand */}
        <div className="mb-10 flex items-center justify-center gap-2">
          <span className="text-[52px] font-semibold tracking-tight text-lime-400">
            Qyoob
          </span>
          <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-300 border border-lime-400/40 self-start translate-y-3">
            BETA
          </span>
        </div>

        {/* Card */}
        <div className="mx-auto w-full max-w-lg rounded-2xl bg-[#151515]/95 border border-[#262626] shadow-[0_24px_80px_rgba(0,0,0,0.85)] px-8 py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-200 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className={`w-full rounded-md border bg-black/60 px-4 py-3 text-md outline-none transition focus:ring-2 
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500/60"
                    : "border-[#333333] focus:border-lime-400 focus:ring-lime-400/60"
                } placeholder:text-gray-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-200 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className={`w-full rounded-md border bg-black/60 px-4 py-3 pr-12 text-md outline-none transition focus:ring-2 
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500/60"
                      : "border-[#333333] focus:border-lime-400 focus:ring-lime-400/60"
                  } placeholder:text-gray-500`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Sign in button */}
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-lime-400 py-3 text-md font-semibold text-black hover:bg-lime-300 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-lime-400"
              >
                Sign In
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-center">
              <button
                type="button"
                className="text-sm font-medium text-lime-300 hover:text-lime-200"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
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
