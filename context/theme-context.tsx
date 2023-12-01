/**
 * theme-context.tsx
 * This file defines the ThemeContext and its provider for a personal website. It manages the theme
 * state (light or dark) across the website, providing a toggle functionality and synchronizing with
 * user preferences and system settings. This context ensures consistent theming throughout the website.
 */

"use client";

// Importing necessary React functionalities
import React, { useEffect, useState, createContext, useContext } from "react";

// Type definitions for Theme and ThemeContext
type Theme = "light" | "dark"; // Possible theme values

type ThemeContextProviderProps = {
  children: React.ReactNode; // React children elements
};

type ThemeContextType = {
  theme: Theme; // Current theme
  toggleTheme: () => void; // Function to toggle the theme
};

// Creating the ThemeContext
const ThemeContext = createContext<ThemeContextType | null>(null);

// ThemeContextProvider component: Provides the ThemeContext
export default function ThemeContextProvider({
  children, // React children elements
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light"); // State for the current theme

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark"); // Save theme preference
      document.documentElement.classList.add("dark"); // Apply dark theme styles
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light"); // Save theme preference
      document.documentElement.classList.remove("dark"); // Remove dark theme styles
    }
  };

  // Effect hook to synchronize theme with local storage and system preference
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark"); // Apply dark theme styles
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark"); // Apply dark theme styles
    }
  }, []);

  return (
    // Providing context value to child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Child components rendered here */}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    // Error handling for misuse of the context
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
