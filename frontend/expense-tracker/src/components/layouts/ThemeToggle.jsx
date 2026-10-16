import React, { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-yellow-300 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <LuSun size={18} /> : <LuMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;