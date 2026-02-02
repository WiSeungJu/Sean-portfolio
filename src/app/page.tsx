"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

// Actually, importing the Page component might be messy if it has "use client" and specific page handling.
// Let's create a dedicated CareerSection wrapper or refactor Career page.
// For now, let's assume we can reuse the logic but maybe we should copy the Career content into a section component
// to ensure it flows correctly in the single page.
// But wait, the user wants "Career & Experience (Timeline)".
// Let's import the ExperienceItem and build the section here or new component.

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
    </>
  );
}
