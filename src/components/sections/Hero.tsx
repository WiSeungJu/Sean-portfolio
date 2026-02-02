"use client";

import Link from 'next/link';
import styles from './sections.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useViewMode } from '@/context/ViewModeContext';

const Hero = () => {
    const { t } = useLanguage();
    const { mode, setMode } = useViewMode();

    return (
        <section className={`container ${styles.hero}`}>
            <h1 className={styles.heroTitle} style={{ whiteSpace: 'pre-line' }}>
                {t.hero.title}
            </h1>
            <p className={styles.heroSubtitle}>
                {t.hero.subtitle}
            </p>

            {/* Toggle Switch */}
            <div className={styles.toggleContainer}>
                <button
                    className={styles.toggleButton}
                    data-active={mode === 'marketing'}
                    onClick={() => setMode('marketing')}
                >
                    {t.hero.marketingAction}
                </button>
                <button
                    className={styles.toggleButton}
                    data-active={mode === 'po'}
                    onClick={() => setMode('po')}
                >
                    {t.hero.poAction}
                </button>
            </div>

            <div className={styles.ctaGroup}>
                <Link href="#" className={styles.buttonPrimary}>
                    {t.common.downloadPdf}
                </Link>
            </div>
        </section>
    );
};

export default Hero;
