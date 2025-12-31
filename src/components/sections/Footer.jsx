import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import MaxWrapper from "./../layout/MaxWrapper";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <MaxWrapper>
        {/* MAIN FOOTER GRID */}
        <div className="border-t border-gray-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
            {/* LOGO */}
            <div className="flex flex-col items-start space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <a href="/">
                  <img
                    src="/image/logo.svg"
                    alt="Qyoob Logo"
                    className="w-30"
                  />
                </a>
              </div>

              {/* About Text */}
              <div className="text-sm text-gray-400 leading-relaxed space-y-3">
                <p>
                  Qyoob delivers secure, enterprise-ready AI automation by
                  orchestrating workflows across chat, voice, APIs, and internal
                  systems—empowering teams to work faster and smarter.
                </p>
              </div>
            </div>

            {/* PRODUCT */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Important Links</h4>
              <ul className="space-y-2 opacity-90">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="https://app.qyoob.ai/login">Login</a>
                </li>
                {/* <li>
                  <Link to="/plans">Pricing</Link>
                </li> */}
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/contact">Request a demo</Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 opacity-90">
                {/* <li>
                <a href="/about">About</a>
              </li> */}
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <a href="/contact">Contact</a>
                </li>
                {/* <li>Privacy Policy</li>
              <li>Terms and conditions</li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-20 border-t border-gray-800 pt-12">
          <p className="text-lg font-medium mb-3">
            Get the latest updates about enterprise AI
          </p>
          <p className="text-gray-400 mb-6">Subscribe to Qyoob’s</p>

          <div className="flex items-center max-w-lg w-full bg-[#111] rounded-full border border-gray-700 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-3 text-white outline-none"
            />
            <button className="px-8 py-3 bg-lime-400 hover:bg-lime-500 transition text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-lime-400">
              →
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            {" "}
            © {new Date().getFullYear()} Qyoob. All rights reserved.
          </p>

          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/company/qyoob-ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} className="hover:text-white cursor-pointer" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/terms"
              className="hover:text-white"
            >
              TERMS & CONDITIONS
            </Link>
            <span>|</span>
            <span className="cursor-pointer hover:text-white">
              PRIVACY POLICY
            </span>
          </div>
        </div>
      </MaxWrapper>
    </footer>
  );
}
