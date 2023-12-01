/**
 * active-section-context.tsx
 * This file defines the ActiveSectionContext and its provider for a personal website. It manages
 * the state of the active section on the website, facilitating dynamic navigation and user interactions.
 * The context is used across various components to synchronize the active section state.
 */

"use client";

// Importing necessary React functionalities
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data"; // Navigation links data

// Type definition for SectionName
type SectionName = (typeof links)[number]["name"];

// Type definition for ActiveSectionContextProviderProps
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Type definition for ActiveSectionContextType
type ActiveSectionContextType = {
  activeSection: SectionName; // Currently active section
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // Function to set the active section
  timeOfLastClick: number; // Time of the last click event
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>; // Function to set the time of the last click
};

// Creating the ActiveSectionContext
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// ActiveSectionContextProvider component: Provides the ActiveSectionContext
export default function ActiveSectionContextProvider({
  children, // React children elements
}: ActiveSectionContextProviderProps) {
  // State hooks for active section and time of last click
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    // Providing context value to child components
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children} {/* Child components rendered here */}
    </ActiveSectionContext.Provider>
  );
}

// Custom hook for using the ActiveSectionContext
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    // Error handling for misuse of the context
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
