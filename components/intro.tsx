/**
 * intro.tsx
 * This file defines the Introduction section for a personal website. It features a profile image,
 * a welcoming message, and interactive links for contacting and accessing a CV. The section is
 * visually enhanced with animations for an engaging user experience.
 */

"use client";

// Importing necessary React components and hooks
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import Link from "next/link"; // Next.js Link component for routing
import { BsArrowRight, BsLinkedin } from "react-icons/bs"; // Icon components
import { HiDownload } from "react-icons/hi"; // Icon component
import { useSectionInView } from "@/lib/hooks"; // Custom hook for section in view detection

// Intro component: Displays the introduction section of the website
export default function Intro() {
  const { ref } = useSectionInView("Home"); // Custom hook to handle section in view

  return (
    <section
      ref={ref} // Reference for in-view detection
      id="home" // Section ID
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" // Styling classes
    >
      {/* Profile image with animation */}
      <div className="flex items-center justify-center text-center sm:mb-0">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }} // Initial animation state
            animate={{ opacity: 1, scale: 1 }} // Animation on appear
            transition={{ type: "tween", duration: 0.2 }} // Transition settings
          >
            <Image
              src="/profile_pic.jpg" // Image source
              alt="This is a picture of me!" // Alt text for accessibility
              width="192" // Image width
              height="192" // Image height
              quality="95" // Image quality
              priority={true} // Priority loading
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl" // Styling classes
            />
          </motion.div>
          {/* Emoji with animation */}
          <motion.span
            className="text-4x1 absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }} // Initial animation state
            animate={{ opacity: 1, scale: 1 }} // Animation on appear
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }} // Transition settings
          >
            ✌🏾
          </motion.span>
        </div>
      </div>

      {/* Introduction text with animation */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" // Styling classes
        initial={{ opacity: 0, y: 100 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation on appear
      >
        Hi, I'm <span className="font-bold">Neel</span>!{" "}
        {/* Name and introduction */}
        <div className="flex-col">
          <span className="font-bold">Student</span>, {/* Role */}
          <span className="font-bold">Developer</span>, {/* Role */}
          <span className="font-bold">Traveller</span> {/* Role */}
        </div>
      </motion.h1>

      {/* Action buttons with animations */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 text-lg font-medium" // Styling classes
        initial={{ opacity: 0, y: 100 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation on appear
        transition={{ delay: 0.1 }} // Transition settings
      >
        {/* Contact me link */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3
                flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                hover:bg-gray-950 active:scale-105 transition" // Styling classes
        >
          Contact me here
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />{" "}
          {/* Icon */}
        </Link>

        {/* Download CV link */}
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition cursor-pointer border border-black/10" // Styling classes
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:animate-bounce" />{" "}
          {/* Icon */}
        </a>

        {/* LinkedIn link */}
        <a
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10" // Styling classes
          href="https://www.linkedin.com/in/neel-tamtam/"
        >
          <BsLinkedin /> {/* Icon */}
        </a>
      </motion.div>
    </section>
  );
}
