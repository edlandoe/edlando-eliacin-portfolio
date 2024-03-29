"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl hover:scale-[1.15] active:scale-105 rounded-full flex items-center justify-center transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      aria-label={theme == "light" ? "Toggle Dark Mode" : "Toggle Light Mode"}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
