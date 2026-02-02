"use client";

import styles from './sections.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    // Mapping for external links (hardcoded for now to match title order)
    const getProjectLink = (index: number) => {
        if (index === 0) return "https://planfit.ai";
        if (index === 1) return "https://gourmevel.com";
        if (index === 2) return "https://web.drinkig.com";
        return "#";
    };

    return (
        <section className={`container ${styles.section}`} id="projects">
            <h2 className={styles.sectionTitle} style={{ marginBottom: '3rem', textAlign: 'center' }}>
                Project Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {t.projects.map((project, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        padding: '2rem',
                        borderRadius: '0.75rem', // var(--radius)
                        background: 'hsla(var(--card))',
                        border: '1px solid hsla(var(--border))'
                    }}>
                        {/* Header: Title, Link, Period */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'hsl(var(--foreground))' }}>
                                    <a href={getProjectLink(index)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        {project.title}
                                        {getProjectLink(index) !== '#' && <span style={{ marginLeft: '0.5rem', fontSize: '1rem', verticalAlign: 'middle', opacity: 0.7 }}>↗</span>}
                                    </a>
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>{project.role}</p>
                            </div>
                            <span style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontFamily: 'var(--font-geist-mono)' }}>{project.period}</span>
                        </div>

                        {/* Summary */}
                        <div style={{ padding: '0.75rem 1rem', background: 'hsla(var(--primary) / 0.1)', borderRadius: '4px', borderLeft: '3px solid hsl(var(--primary))' }}>
                            <p style={{ fontWeight: 600, color: 'hsl(var(--foreground))' }}>&quot;{project.summary}&quot;</p>
                        </div>

                        {/* Description Bullets */}
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {project.description.map((desc: string, i: number) => (
                                <li key={i} style={{ paddingLeft: '1.5rem', position: 'relative', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
                                    <span style={{ position: 'absolute', left: 0, top: '0', color: 'hsl(var(--primary))' }}>•</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>

                        {/* Tech Stack */}
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                            {project.tech_stack.map((tag: string, i: number) => (
                                <span key={i} style={{
                                    fontSize: '0.85rem',
                                    padding: '0.3rem 0.8rem',
                                    background: 'hsla(var(--background))',
                                    border: '1px solid hsla(var(--border))',
                                    borderRadius: '999px',
                                    color: 'hsl(var(--foreground))',
                                    fontFamily: 'var(--font-geist-mono)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
