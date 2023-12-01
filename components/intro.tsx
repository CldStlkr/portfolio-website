"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center text-center sm:mb-0">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile_pic.jpg"
              alt="This is a picture of me!"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4x1 absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            ✌🏾
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span className="font-bold">Neel</span>!{" "}
        <div className="flex-col">
          <span className="font-bold">Student</span>,{" "}
          <span className="font-bold">Teacher</span>,{" "}
          <span className="font-bold">Traveller</span>
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3
                flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:animate-bounce" />
        </a>

        <a
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
          href="https://www.linkedin.com/in/neel-tamtam/"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
