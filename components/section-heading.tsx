/**
 * section-heading.tsx
 * This file defines the SectionHeading component for a personal website. It's used to render
 * uniform and styled headings for various sections of the site, ensuring visual consistency and
 * clarity across the website.
 */

import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
