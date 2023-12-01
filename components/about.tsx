/**
 * about.tsx
 * This file defines the 'About' section for a personal website. It includes a personal
 * introduction, educational background, career focus, and personal interests. The section
 * uses animation effects from Framer Motion for a dynamic user experience.
 */

"use client";

// Importing necessary libraries and components
import React from "react";
import { motion } from "framer-motion"; // For animations
import SectionHeading from "./section-heading"; // Custom component for section headings
import { useInView } from "react-intersection-observer"; // To detect when an element is in view
import { useActiveSectionContext } from "@/context/active-section-context"; // Context for active sections
import { useSectionInView } from "@/lib/hooks"; // Custom hook for section in view detection

// About component: Displays the About section of the website
export default function About() {
  const { ref } = useSectionInView("About"); // Custom hook to handle section in view

  return (
    // Section with animation on scroll into view
    <motion.section
      ref={ref} // Reference for in-view detection
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" // Styling classes
      initial={{ opacity: 0, y: 100 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation on appear
      transition={{ delay: 0.175 }} // Animation delay
      id="about" // Section ID
    >
      <SectionHeading>About me</SectionHeading> {/* Section heading */}
      {/* Personal introduction and background */}
      <p className="mb-3">
        A soon-to-be-graduate of{" "}
        <span className="font-medium">Austin College</span> with a double major
        in <span className="font-medium">Computer Science</span> and{" "}
        <span className="font-medium">Japanese</span>. My focus is currently on{" "}
        <span className="font-medium">full-stack web development</span>, with my
        core stack being <span className="font-medium">MERN</span>. I am also
        familiar with AWS and Linux. Currently looking for a{" "}
        <span className="font-medium">full-time position</span> or{" "}
        <span className="font-medium">internship</span> as a software developer.
      </p>
      {/* Hobbies and interests */}
      <p>
        <span className="italic">In my free time</span>, I enjoy playing video
        games, reading Japanese novels, and practicing guitar. I also enjoy{" "}
        <span className="font-medium">learning new skills</span>. Recently, I
        have been working on{" "}
        <span className="font-medium">advanced calisthenics</span>. I also love
        to cook!
      </p>
    </motion.section>
  );
}
