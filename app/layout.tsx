/**
 * layout.tsx
 * This file defines the root layout of the website, including the header, global styles,
 * and background design elements. It uses the ActiveSectionContextProvider to manage the
 * active sections of the website.
 */

// Importing necessary components and styles
import Header from "@/components/header"; // Header component
import "./globals.css"; // Global CSS styles
import { Inter } from "next/font/google"; // Google font
import ActiveSectionContextProvider from "@/context/active-section-context"; // Context provider for active sections

// Setting up the 'Inter' font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the website
export const metadata = {
  title: "Neel | Personal Website", // Title of the website
  description: "Hi!", // Short description of the website
};

// RootLayout component: Sets up the overall layout of the website
export default function RootLayout({
  children, // React children elements
}: {
  children: React.ReactNode; // Type definition for children
}) {
  return (
    // HTML structure with language and style configurations
    <html lang="en" className="!scroll-smooth">
      <body
        // Body styling with dynamic classes and fixed height
        className={`${inter.className} bg-gray-50 dark:text-opacity-90 h-[5000px] pt-28 sm:pt-36`}
      >
        {/* Background design elements */}
        <div className="bg-[#e2fbfa] absolute top-[-6rem] -z-10 right-[11rem] h-[62.5rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div
          className="bg-[#d7fbf1] absolute top-[-1rem] -z-10 left-[-35rem] h-[62.5rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>

        {/* ActiveSectionContextProvider wraps the Header and children components */}
        <ActiveSectionContextProvider>
          <Header /> {/* Header component */}
          {children} {/* Child components rendered here */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
