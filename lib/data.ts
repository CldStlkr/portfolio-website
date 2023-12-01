import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fitnessImg from "@/public/fitness.jpg";
import discordImg from "@/public/discord.png";
import pokemonImg from "@/public/pokemon.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Travel",
    hash: "#travel",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Fitness App",
    description:
      "Created an app that tracks your workouts, diet and overall health metrics over time",
    tags: ["React Native", "C++", "AWS", "Tailwind", "MySQL"],
    imageUrl: fitnessImg,
  },
  {
    title: "Discord Clone",
    description:
      "Created a discord clone complete with real-time text, voice and video communication",
    tags: ["React", "TypeScript", "WebSocket", "Tailwind", "MySQL"],
    imageUrl: discordImg,
  },
  {
    title: "Lengendary Pokémon Guesser",
    description:
      "Trained and refined a machine learning model to guess whether or not a pokémon was legendary",
    tags: ["Python", "JupyterLab", "SciLearn", "Seaborn"],
    imageUrl: pokemonImg,
  },
] as const;

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
  "Framer Motion",
] as const;
