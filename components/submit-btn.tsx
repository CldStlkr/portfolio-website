/**
 * submit-btn.tsx
 * This file defines the SubmitBtn component for a personal website. It's a customizable submit button
 * for forms, featuring an animated spinner when the form is submitting and an icon for a visually
 * appealing design. The component enhances user experience during form interactions.
 */

// Importing React and necessary icons
import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Icon for the submit button
import { useFormStatus } from "react-dom"; // Hook for form status

// SubmitBtn component: Provides a styled submit button for forms
export default function SubmitBtn() {
  const { pending } = useFormStatus(); // Hook to determine if the form is in pending state

  return (
    // Submit button with conditional styling and behavior
    <button
      type="submit" // Button type for form submission
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65" // Styling classes
      disabled={pending} // Disable button when form is pending
    >
      {pending ? (
        // Spinner icon when the form is submitting
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        // Submit text and icon when the form is not submitting
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
