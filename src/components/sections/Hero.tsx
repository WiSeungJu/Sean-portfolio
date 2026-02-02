"use client";

import Link from 'next/link';
import styles from './sections.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className={`container ${styles.hero}`}>
            <h1 className={styles.heroTitle} style={{ whiteSpace: 'pre-line' }}>
                {t.hero.title}
            </h1>
            <p className={styles.heroSubtitle} style={{ whiteSpace: 'pre-line', maxWidth: '800px' }}>
                {t.hero.subtitle}
            </p>

            <div className={styles.ctaGroup}>
                <Link href="#" className={styles.buttonPrimary}>
                    {t.common.downloadPdf}
                </Link>
            </div>
        </section>
    );
};

export default Hero;
