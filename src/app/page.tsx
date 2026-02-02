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

import ExperienceItem from "@/components/career/ExperienceItem";
import styles from "@/components/career/career.module.css";
import sectionStyles from "@/components/sections/sections.module.css";
import { useLanguage } from "@/context/LanguageContext";

const CareerSection = () => {
  const { t } = useLanguage();
  return (
    <section className={`container ${sectionStyles.section}`}>
      <h2 className={sectionStyles.sectionTitle}>{t.career.title}</h2>
      <div className={styles.timeline}>
        {t.career.items.map((exp, index) => (
          <ExperienceItem
            key={index}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            tags={[]} // Tags are optional or can be added if needed
          />
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="career"><CareerSection /></div>
    </>
  );
}
