import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="h-12 flex justify-center items-center flex-col text-xs z-10">
      <ul className="flex items-center gap-4 mb-2">
        <li>
          <Link
            href="/terms"
            title="terms"
            className="text-white hover:text-yellow-300 transition"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            href="/privacy"
            title="privacy"
            className="text-white hover:text-yellow-300 transition"
          >
            Privacy
          </Link>
        </li>
      </ul>
      <span>&copy; {new Date().getFullYear()} What's My TDEE?</span>
    </footer>
  );
};
