"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md hairline" : "bg-transparent"
      }`}
    >
      <div className="container-max py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/orly-landing/"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              בית
            </Link>
            <Link
              href="/orly-landing/about"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              אודות
            </Link>
            <Link
              href="/orly-landing/services"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              שירותים
            </Link>
            <Link
              href="/orly-landing/contact"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              יצירת קשר
            </Link>
            <Link
              href="/orly-landing/faq"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              שאלות נפוצות
            </Link>
          </nav>
          <a href="#contact" className="btn btn-primary">
            קבעו שיחת ייעוץ
          </a>
        </div>
      </div>
    </header>
  );
}
