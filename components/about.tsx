"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A soon-to-be-graduate of{" "}
        <span className="font-medium">Austin College</span> with a double major
        in <span className="font-medium">Computer Science</span> and{" "}
        <span className="font-medium">Japanese</span>. My focus is currently on{" "}
        <span className="font-medium"> full-stack web development</span>, with
        my core stack being <span className="font-medium">MERN</span>. I am also
        familiar with AWS and Linux. Currently looking for a{" "}
        <span className="font-medium">full-time position</span> or{" "}
        <span className="font-medium">internship</span> as a software developer.
      </p>

      <p>
        <span className="italic">In my free time</span>, I enjoy playing video
        games, reading Japanese novels, and practicing guitar. I also enjoy{" "}
        <span className="font-medium">learning new skills</span>. I am currently
        learning <span className="font-medium">advanced calisthenics</span>. I
        also enjoy cooking!
      </p>
    </motion.section>
  );
}
