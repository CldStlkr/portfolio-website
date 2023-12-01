/**
 * data.ts
 * This file contains static data used in the project, including navigation links, project information, and skills.
 * - 'links' provides navigation details for different sections of the website.
 * - 'projectsData' includes information about various projects, such as title, description, tags, and images.
 * - 'skillsData' lists the technical skills and technologies.
 */

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fitnessImg from "@/public/fitness.png";
import discordImg from "@/public/discord-app.png";
import pokemonImg from "@/public/pokemon.png";

// Navigation links for the website
export const links = [
  { name: "Home", hash: "#home" }, // Link to the Home section
  { name: "About", hash: "#about" }, // Link to the About section
  { name: "Projects", hash: "#projects" }, // Link to the Projects section
  { name: "Skills", hash: "#skills" }, // Link to the Skills section
  { name: "Travel", hash: "#travel" }, // Link to the Travel section (if exists)
  { name: "Contact", hash: "#contact" }, // Link to the Contact section
] as const;

// Data for various projects
export const projectsData = [
  {
    title: "Fitness App",
    description:
      "Created an app that tracks your workouts, diet and overall health metrics over time",
    tags: ["React Native", "C++", "AWS", "Tailwind", "MySQL"],
    imageUrl: fitnessImg, // Image for the Fitness App project
  },
  {
    title: "Discord Clone",
    description:
      "Created a discord clone complete with real-time text, voice and video communication",
    tags: ["React", "TypeScript", "WebSocket", "Tailwind", "MySQL"],
    imageUrl: discordImg, // Image for the Discord Clone project
  },
  {
    title: "Lengendary Pokémon Guesser",
    description:
      "Trained and refined a machine learning model to guess whether or not a pokémon was legendary",
    tags: ["Python", "JupyterLab", "SciLearn", "Seaborn"],
    imageUrl: pokemonImg, // Image for the Pokémon Guesser project
  },
] as const;

// List of skills
export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "AWS",
  "Framer Motion",
] as const;
