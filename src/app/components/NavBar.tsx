import { CalculatorIcon } from "@/ui/CalculatorIcon";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-center h-20 z-10">
      <ul className="flex items-center justify-between">
        <li>
          <Link
            className="text-2xl font-bold text-white hover:text-yellow-300 transition flex items-center gap-2"
            href="/"
          >
            <CalculatorIcon className="w-8 h-8 inline-block" />
            What's My TDEE?
          </Link>
        </li>
      </ul>
    </nav>
  );
};
