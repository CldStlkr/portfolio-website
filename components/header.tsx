/**
 * header.tsx
 * This file defines the Header component for the website. Includes dynamic navigation
 * bar with links to different sections of the site. The header uses animations for visual effects
 * and context for managing active sections, enhancing user interaction and navigation experience.
 */

"use client";

// Necessary imports for React, animations, routing, and context management
import React from "react";
import { motion } from "framer-motion"; // For animations
import { links } from "@/lib/data"; // Navigation links data
import Link from "next/link"; // Next.js Link component for routing
import clsx from "clsx"; // Utility for conditional class names
import { useActiveSectionContext } from "@/context/active-section-context"; // Context for active sections

// Header component: Provides the navigation bar for the website
export default function Header() {
  // Extracting context values for active section management
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Animated container for the header */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
          sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }} // Initial animation state
        animate={{ y: 0, x: "-50%", opacity: 1 }} // Animation on appear
      ></motion.div>

      {/* Navigation bar with list of links */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] front-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash} // Key for list rendering
              initial={{ y: -100, opacity: 0 }} // Initial animation state
              animate={{ y: 0, opacity: 1 }} // Animation on appear
            >
              {/* Link component with active section highlighting */}
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950",
                  {
                    "text-gray-950": activeSection === link.name, // Highlighting active section
                  }
                )}
                href={link.hash} // Link destination
                onClick={() => {
                  setActiveSection(link.name); // Set active section on click
                  setTimeOfLastClick(Date.now); // Set time of last click
                }}
              >
                {link.name} {/* Link text */}
                {/* Highlighting effect for active section */}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection" // ID for layout animation
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
