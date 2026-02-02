"use client";

import styles from './sections.module.css';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section className={`container ${styles.section} ${styles.aboutSection}`} id="about">
            <div className={styles.aboutContainer} style={{ gridTemplateColumns: 'minmax(250px, 1fr) 2fr', alignItems: 'start' }}>
                <div className={styles.profileColumn}>
                    {/* Placeholder for Profile IMG - make it square/circle */}
                    <div className={styles.profileImagePlaceholder} style={{ background: '#ddd', color: '#333' }}>
                        Profile IMG
                    </div>
                </div>

                <div className={styles.infoColumn}>
                    <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '1rem' }}>Global Profile</h2>

                    <div className={styles.specItem} style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>Education</h3>
                        <p style={{ fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))' }}>{t.about.education}</p>
                    </div>

                    <div className={styles.specItem} style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>Core Identity</h3>
                        <div className={styles.keywordList}>
                            {t.about.keywords.map((kw: string, i: number) => (
                                <span key={i} className={styles.keyword} style={{ fontSize: '1.1rem', fontWeight: 600 }}>{kw}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.specItem}>
                        <h3 style={{ fontSize: '1.2rem', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>Skills</h3>
                        <div className={styles.skillBadges}>
                            {t.about.skills.map((s: string) => (
                                <span key={s} className={styles.badge} style={{ fontFamily: 'var(--font-geist-mono)' }}>{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
