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
      className="dark:text-green-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon className="text-green-600" /> : <Sun />}
    </button>
  );
}
