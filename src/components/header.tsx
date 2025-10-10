"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md hairline" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-max py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              בית
            </Link>
            <Link
              href="/about"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              אודות
            </Link>
            <Link
              href="/services"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              שירותים
            </Link>
            <Link
              href="/contact"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              יצירת קשר
            </Link>
            <Link
              href="/faq"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              שאלות נפוצות
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <a href="/contact" className="btn btn-primary hidden md:inline-flex">
            קבעו שיחת ייעוץ
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors"
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40">
          <nav className="container-max py-8 flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold text-lg"
            >
              בית
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold text-lg"
            >
              אודות
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold text-lg"
            >
              שירותים
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold text-lg"
            >
              יצירת קשר
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold text-lg"
            >
              שאלות נפוצות
            </Link>
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary w-full text-center mt-4"
            >
              קבעו שיחת ייעוץ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
