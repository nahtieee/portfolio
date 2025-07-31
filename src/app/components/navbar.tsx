"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollUpStart = useRef<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop <= 0) {
        setScrolledDown(false);
      } else if (scrollTop < lastScrollTop.current) {
        if (scrollUpStart.current === null) {
          scrollUpStart.current = lastScrollTop.current;
        } else if (scrollUpStart.current - scrollTop >= 300) {
          setScrolledDown(false);
        }
      } else {
        setScrolledDown(true);
        scrollUpStart.current = null;
      }
      lastScrollTop.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setScrolledDown(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <nav
      className={`autohide w-full flex items-center justify-between py-4 bg-[#F8F8F8E6] text-black sticky top-0 z-100 transition-transform duration-300 navbar ${
        scrolledDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold flex items-center h-8">
          <Link href="/">ETHAN DITH</Link>
        </div>
        <ul className="hidden sm:flex gap-10 font-semibold text-xl items-center">
          <li>
            <Link href="/#work" className="hover:underline">
              WORK
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/files/Resume.pdf"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </Link>
          </li>
          {/* Theme Toggle Switch - right of links, hidden on mobile */}
          <li className="flex items-center">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="focus:outline-none hidden sm:block h-8"
              style={{ minWidth: 56 }}
            >
              <span
                className={`
        relative inline-block w-14 h-8 rounded-full transition-colors duration-300
        ${theme === "dark" ? "bg-[#d8d8d8]" : "bg-[#bebebe]"}
      `}
              >
                <span
                  className={`
          absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300 shadow-md
          ${
            theme === "dark"
              ? "translate-x-6 bg-gradient-to-br from-yellow-400 to-yellow-500"
              : "translate-x-0 bg-gradient-to-br from-gray-200 to-white"
          }
        `}
                  style={{
                    boxShadow:
                      theme === "dark"
                        ? "0 2px 8px 0 #0004"
                        : "0 2px 8px 0 #8882",
                  }}
                />
                {/* Sun/Moon icons */}
                <span
                  className="absolute left-2 top-2 text-xs select-none pointer-events-none transition-opacity duration-300"
                  style={{ opacity: theme === "dark" ? 0 : 1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-sun-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                </span>
                <span
                  className="absolute right-2 top-2 text-xs select-none pointer-events-none transition-opacity duration-300"
                  style={{ opacity: theme === "dark" ? 1 : 0 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-moon-stars-fill"
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                </span>
              </span>
            </button>
          </li>
        </ul>
        {/* Hamburger menu for mobile remains unchanged */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 relative z-60"
          style={{ marginTop: 0 }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 mobile-menu-button ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 my-1 mobile-menu-button ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 mobile-menu-button ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {open && (
          <div className="fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-center sm:hidden transition-all mobile-menu bg-background text-foreground">
            <ul className="flex flex-col gap-10 text-3xl font-semibold mb-10 text-center">
              <li>
                <Link
                  href="/#work"
                  className="hover:underline"
                  onClick={() => setOpen(false)}
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline"
                  onClick={() => setOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/files/Resume.pdf"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  RESUME
                </Link>
              </li>
            </ul>
            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/ethandith/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-blue-700"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="mailto:ethandith@gmail.com"
                aria-label="Email"
                className="text-gray-700 hover:text-red-600"
              >
                <Image
                  src="/images/mail.svg"
                  alt="Email"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
