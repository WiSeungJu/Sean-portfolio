"use client";

import ProjectCard from "@/components/portfolio/ProjectCard";
import styles from './sections.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useViewMode } from '@/context/ViewModeContext';

const Projects = () => {
    const { t } = useLanguage();
    const { mode } = useViewMode();

    // Map content to specific links/images based on title match or order
    // Start with order-based mapping for simplicity as per requirements
    const getProjectExtras = (mode: string, index: number) => {
        if (mode === 'marketing') {
            if (index === 0) return { link: "https://gourmevel.com", tags: ["Branding", "Instagram"] }; // Gourmevel
            if (index === 1) return { link: "https://planfit.ai", tags: ["Growth", "Amplitude"] }; // Planfit
        } else {
            if (index === 0) return { link: "https://planfit.ai", tags: ["AI", "Product Engineer"] }; // Planfit
            if (index === 1) return { link: "https://web.drinkig.com", tags: ["React Native", "iOS"] }; // Drinkig
        }
        return { link: "#", tags: [] };
    };

    const currentProjects = mode === 'marketing' ? t.projects.marketing : t.projects.po;

    return (
        <section className={`container ${styles.section}`}>
            <h2 className={styles.sectionTitle}>
                {mode === 'marketing' ? 'Selected Projects' : 'Key Achievements'}
            </h2>

            <div className={styles.aboutContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {currentProjects.map((project, index) => {
                    const extras = getProjectExtras(mode, index);
                    return (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags || extras.tags} // Use tags from translation if available, else hardcoded
                            link={extras.link}
                            github="#" // Optional
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
