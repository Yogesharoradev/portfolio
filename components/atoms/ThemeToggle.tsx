"use client";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-6 h-6 rounded-full absolute right-[22%] -top-2 animate-bounce delay-500 border-4 transition-all bg-bg_toggle_theme border-border_toggle_theme"
    />
  );
};

export default ThemeToggle;
