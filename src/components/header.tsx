"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";

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
            <a
              href="#hero"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              בית
            </a>
            <a
              href="#about"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              אודות
            </a>
            <a
              href="#services"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              שירותים
            </a>
            <a
              href="#contact"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              יצירת קשר
            </a>
            <a
              href="#faq"
              className="text-[var(--ink)] hover:text-[var(--rose-1)] transition-colors font-semibold"
            >
              שאלות נפוצות
            </a>
          </nav>
          <a href="#contact" className="btn btn-primary">
            קבעו שיחת ייעוץ
          </a>
        </div>
      </div>
    </header>
  );
}
