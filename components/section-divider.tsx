/**
 * section-divider.tsx
 * This file defines the SectionDivider component for a personal website. It's used to visually
 * separate different sections of the website, enhancing the overall layout and user experience.
 * The component features a simple yet effective animation for a subtle visual transition.
 */

"use client";

// Importing necessary React library and animation functionality
import React from "react";
import { motion } from "framer-motion"; // For animations

// SectionDivider component: Provides a visual divider between sections
export default function SectionDivider() {
  return (
    // Animated divider with specific styling
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block" // Styling classes for the divider
      initial={{ opacity: 0, y: 100 }} // Initial state for animation (invisible and lower position)
      animate={{ opacity: 1, y: 0 }} // Animate to visible and move to final position
      transition={{ delay: 0.125 }} // Set delay for the animation start
    ></motion.div>
  );
}
