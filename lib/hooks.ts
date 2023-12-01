/**
 * hooks.ts
 * This file defines the 'useSectionInView' custom hook. It uses the 'useInView' hook from 'react-intersection-observer'
 * to determine when a section is in the viewport. When a section comes into view, the hook updates the
 * application's active section state using 'useActiveSectionContext'. This is particularly useful for
 * highlighting the currently active section in a navigation menu or for any related dynamic UI updates.
 */

import { useActiveSectionContext } from "@/context/active-section-context"; // Importing the context for active section management
import { useEffect } from "react"; // Importing useEffect hook from React
import { useInView } from "react-intersection-observer"; // Importing useInView hook for intersection observer functionality
import type { SectionName } from "./types"; // Importing the SectionName type

// Custom hook: useSectionInView
export function useSectionInView(sectionName: SectionName, threshold = 1) {
  const { ref, inView } = useInView({
    // Using useInView hook to detect if a section is in the viewport
    threshold, // Threshold value for triggering inView
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext(); // Extracting values from the active section context

  useEffect(() => {
    // useEffect hook to perform side effects
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // Checking if the section is in view and if the last click was over 1 second ago
      setActiveSection(sectionName); // Setting the active section
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]); // Dependencies array for the useEffect hook

  return {
    ref, // Returning the ref to be attached to the section element
  };
}
