"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  // Persisting dark mode preference
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedPreference);
    if (storedPreference) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-wrap items-center justify-between px-4 py-2 dark:bg-neutral-900"
          id="nav"
        >
          {/* Name (centered on small screens) */}
          <h1 className="name text-xl font-bold text-neutral-900 dark:text-neutral-100 w-full text-center sm:w-auto sm:text-left">
            Ayaan Rahman
          </h1>

          {/* Navbar Items */}
          <div className="flex flex-wrap items-center justify-center space-x-4">
            <Link href="/" className="nav-link text-sm sm:text-base">
              About
            </Link>
            <Link href="/projects" className="nav-link text-sm sm:text-base">
              Projects
            </Link>
            <Link href="/resume.pdf" className="nav-link text-sm sm:text-base">
              Resume
            </Link>
            <Link
              href="/transcript.pdf"
              className="nav-link text-sm sm:text-base"
            >
              Transcript
            </Link>
            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 clicker text-sm font-semibold dark:bg-gray-800 rounded text-center"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}
