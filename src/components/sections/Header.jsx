import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MaxWrapper from "../layout/MaxWrapper";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
    { name: "Product", path: "/Product" },
    // { name: "Plans", path: "/plans" },
    // { name: "Contact", path: "/contact" },
  ];

  // Scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 40);

      if (current > lastScrollY && current > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-4 inset-x-0 z-50
          transition-all duration-300
          ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }
        `}
      >
        <MaxWrapper>
          <div
            className={`
              flex items-center justify-between
              px-6 py-4 rounded-2xl
              ${
                isScrolled
                  ? "bg-black/80 backdrop-blur-lg border border-[#2a2a2a] shadow-lg"
                  : "bg-black/50 backdrop-blur-md border border-[#1f1f1f]"
              }
            `}
          >
            {/* Logo */}
            <a href="/">
              <img src="/image/logo.svg" alt="Logo" className="w-32" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative font-medium transition
                      ${
                        isActive
                          ? "text-[#baff00]"
                          : "text-white hover:text-[#baff00]"
                      }
                    `}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#baff00] transition-all
                        ${isActive ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="bg-lime-300 hover:bg-lime-400 text-black font-medium px-5 py-2 rounded-full transition hover:scale-105"
              >
                Book a Demo
              </button>

              <button
                onClick={() => (window.location.href = "https://app.qyoob.ai")}
                className="border border-lime-400 text-white px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black transition hover:scale-105 font-semibold"
              >
                Login
              </button>
            </div>

            {/* Tablet CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:block lg:hidden bg-lime-400 text-black font-medium px-5 py-2 rounded-full"
            >
              Demo
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </MaxWrapper>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-lg flex flex-col p-10"
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X size={36} />
            </button>

            {/* Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setMenuOpen(false);
                  }}
                  className="text-white text-3xl font-light hover:text-[#baff00] transition"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="bg-lime-300 text-black py-3 rounded-full text-xl"
              >
                Book a Demo
              </button>

              <button
                onClick={() => (window.location.href = "https://app.qyoob.ai")}
                className="border border-lime-400 text-white py-3 rounded-full text-xl hover:bg-lime-400 hover:text-black transition"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
