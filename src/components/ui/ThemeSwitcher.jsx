"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }

  return (
    <button
      //   className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      className="dark:text-green-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon className="text-green-600" /> : <Sun />}
    </button>
  );
}
