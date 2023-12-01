/**
 * projects.tsx
 * This file defines the Projects section for a personal website. It renders a collection of
 * individual projects, each represented by a Project component. The section highlights
 * the user's work and accomplishments in a structured and visually appealing manner.
 */

"use client";

// Importing necessary React hooks and components
import React, { useEffect } from "react";
import SectionHeading from "./section-heading"; // Custom component for section headings
import { projectsData } from "@/lib/data"; // Data for the projects
import Project from "./project"; // Individual project component
import { useSectionInView } from "@/lib/hooks"; // Custom hook for section in view detection
import { useActiveSectionContext } from "@/context/active-section-context"; // Context for active sections

// Projects component: Displays the Projects section of the website
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.55); // Custom hook to handle section in view

  return (
    <section
      ref={ref} // Reference for in-view detection
      id="projects" // Section ID
      className="scroll-mt-28 mb-28" // Styling classes
    >
      <SectionHeading>My projects</SectionHeading> {/* Section heading */}
      {/* Container for individual project components */}
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} /> {/* Project component with project data */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
