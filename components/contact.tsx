/**
 * contact.tsx
 * This file defines the 'Contact' section for a personal website. It includes a form for
 * sending emails, along with direct contact information. The section is enhanced with animations
 * and interactive elements to engage users.
 */

"use client";

import React from "react";
import SectionHeading from "./section-heading"; // Custom component for section headings
import { motion } from "framer-motion"; // For animations
import { useSectionInView } from "@/lib/hooks"; // Custom hook for section in view detection
import { sendEmail } from "@/actions/sendEmail"; // Function to handle email sending
import SubmitBtn from "./submit-btn"; // Custom submit button component
import toast from "react-hot-toast"; // Toast notifications

// Contact component: Displays the Contact section of the website
export default function Contact() {
  const { ref } = useSectionInView("Contact"); // Custom hook to handle section in view

  return (
    // Section with animation on scroll into view
    <motion.section
      id="contact" // Section ID
      ref={ref} // Reference for in-view detection
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28" // Styling classes
      initial={{ opacity: 0 }} // Initial animation state
      whileInView={{ opacity: 1 }} // Animation on appear
      transition={{ duration: 1 }} // Animation duration
      viewport={{ once: true }} // Viewport settings
    >
      <SectionHeading>Contact me</SectionHeading> {/* Section heading */}
      {/* Contact information */}
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ntamtam614@outlook.com">
          ntamtam614@outlook.com
        </a>{" "}
        or through this form.
      </p>
      {/* Contact form */}
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          // Handling form submission
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error); // Display error message
            return;
          }
          toast.success("Email sent successfully!"); // Display success message
        }}
      >
        {/* Input fields and submit button */}
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn /> {/* Submit button */}
      </form>
    </motion.section>
  );
}
