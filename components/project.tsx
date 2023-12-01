/**
 * project.tsx
 * This file defines the Project component used in a personal website to display individual projects.
 * It includes project details such as title, description, and image, and features interactive animations
 * on scroll. The component showcases the user's projects in a visually appealing and interactive manner.
 */

"use client";

// Importing necessary React hooks and data
import { useRef } from "react";
import { projectsData } from "@/lib/data"; // Data for the projects
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"; // For animations

// Type definition for ProjectProps
type ProjectProps = (typeof projectsData)[number];

// Project component: Displays a single project with details
export default function Project({
  title, // Title of the project
  description, // Description of the project
  tags, // Tags related to the project
  imageUrl, // Image URL of the project
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null); // Reference to the component
  const { scrollYProgress } = useScroll({
    target: ref, // Target element for scroll tracking
    offset: ["0 1", "1.33 1"], // Offset for triggering the scroll
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // Scale transformation on scroll
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // Opacity transformation on scroll

  return (
    // Motion div for animated effects
    <motion.div
      ref={ref} // Reference to the component
      style={{
        scale: scaleProgess, // Applying scale transformation
        opacity: opacityProgess, // Applying opacity transformation
      }}
      className="group mb-3 sm:mb-8 last:mb-0" // Styling classes
    >
      {/* Project section with styling */}
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        {/* Project details */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>{" "}
          {/* Project title */}
          <p className="mt-2 leading-relaxed text-gray-700">
            {description}
          </p>{" "}
          {/* Project description */}
          {/* Tags list */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag} {/* Tag name */}
              </li>
            ))}
          </ul>
        </div>

        {/* Project image */}
        <Image
          src={imageUrl} // Image source
          alt="Projects I worked on" // Alt text for accessibility
          quality={95} // Image quality
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40" // Styling classes
        />
      </section>
    </motion.div>
  );
}
