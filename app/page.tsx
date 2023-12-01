/**
 * page.tsx
 * This file defines the main page of the personal website, organizing and rendering
 * the Intro, About, Projects, Skills, and Contact sections. It serves as the central
 * hub for all primary content displayed on the website.
 */

// Importing components for different sections of the homepage
import Intro from "@/components/intro"; // Introduction section
import SectionDivider from "@/components/section-divider"; // Divider for separating sections
import About from "@/components/about"; // About section
import Projects from "@/components/projects"; // Projects section
import Skills from "@/components/skills"; // Skills section
import Contact from "@/components/contact"; // Contact section

// Home component: Represents the homepage of the website
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* Main content container with flex layout */}
      <Intro /> {/* Introduction section */}
      <SectionDivider /> {/* Section divider */}
      <About /> {/* About section */}
      <Projects /> {/* Projects section */}
      <Skills /> {/* Skills section */}
      <Contact /> {/* Contact section */}
    </main>
  );
}
