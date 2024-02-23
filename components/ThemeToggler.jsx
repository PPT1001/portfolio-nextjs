"use client";

import { Button } from "./ui/Button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full p-2 dark:bg-accent dark:text-accent-foreground transition-all relative"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transistion-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transistion-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}

export default ThemeToggler;