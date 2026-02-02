"use client";

import styles from './sections.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useViewMode } from '@/context/ViewModeContext';

const About = () => {
    const { t } = useLanguage();
    const { mode } = useViewMode();

    return (
        <section className={`container ${styles.section} ${styles.aboutSection}`}>
            <div className={styles.aboutContainer}>
                <div className={styles.profileColumn}>
                    {/* Placeholder for Profile Image */}
                    <div className={styles.profileImagePlaceholder}>Profile IMG</div>
                </div>
                <div className={styles.infoColumn}>
                    <h2 className={styles.sectionTitle}>{t.about.title}</h2>
                    <p className={styles.aboutDescription}>{t.about.description}</p>

                    <div className={styles.specItem}>
                        <strong>Education</strong>
                        <span>{t.about.education}</span>
                    </div>

                    <div className={styles.keywordList}>
                        {t.about.keywords.map((kw, i) => (
                            <span key={i} className={styles.keyword}>{kw}</span>
                        ))}
                    </div>

                    <div className={styles.skillGroup}>
                        <h3 className={styles.skillTitle}>
                            {mode === 'marketing' ? 'Marketing Skills' : 'Tech & Product Skills'}
                        </h3>
                        <div className={styles.skillBadges}>
                            {mode === 'marketing'
                                ? t.about.skills.marketing.map(s => <span key={s} className={styles.badge}>{s}</span>)
                                : t.about.skills.tech.map(s => <span key={s} className={styles.badge}>{s}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
