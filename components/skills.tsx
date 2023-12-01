/**
 * skills.tsx
 * This file defines the Skills section for a personal website. It showcases a list of skills in a
 * visually engaging manner with staggered fade-in animations. The section highlights the user's
 * technical and professional skills.
 */

"use client";

// Importing React and necessary components and hooks
import React from "react";
import SectionHeading from "./section-heading"; // Component for section headings
import { skillsData } from "@/lib/data"; // Data for skills
import { useSectionInView } from "@/lib/hooks"; // Hook for detecting section in view
import { motion } from "framer-motion"; // For animations

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Delay based on index for staggered effect
    },
  }),
};

// Skills component: Displays the Skills section of the website
export default function Skills() {
  const { ref } = useSectionInView("Skills"); // Custom hook to handle section in view

  return (
    // Section element with id and reference
    <section
      id="skills" // Section ID
      ref={ref} // Reference for in-view detection
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" // Styling classes
    >
      <SectionHeading>My skills</SectionHeading> {/* Section heading */}
      {/* List of skills with animation */}
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          // Skill item with animation
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 border border-black/10" // Styling classes
            key={index} // Key for list item
            variants={fadeInAnimationVariants} // Animation variants
            initial="initial" // Initial animation state
            whileInView="animate" // Animation on appear
            viewport={{ once: true }} // Only animate once
            custom={index} // Custom property for staggered animation
          >
            {skill} {/* Skill name */}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
