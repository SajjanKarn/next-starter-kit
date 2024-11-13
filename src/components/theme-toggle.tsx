"use client";

import { useEffect, useState } from "react";

import { LucideSun, MoonIcon } from "lucide-react";

import useSystemTheme from "@/hooks/use-system-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useSystemTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Ensures the component only renders on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <LucideSun
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          size={24}
          color="white"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          size={24}
          color="black"
        />
      )}
    </>
  );
}
