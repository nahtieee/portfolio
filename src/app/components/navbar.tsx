"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollUpStart = useRef<number | null>(null);

  useEffect(() => {
    // This is the key part that prevents scrolling
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup function to ensure scrolling is re-enabled on component unmount
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
              href="/files/resume.pdf"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </Link>
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
                  href="/files/resume.pdf"
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