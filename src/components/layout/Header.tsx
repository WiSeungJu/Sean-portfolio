"use client";

import Link from 'next/link';
import styles from './layout.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.logo}>
                    Sean Wi
                </Link>
                <nav className={styles.nav}>
                    <Link href="#about" className={styles.navLink}>{t.about.title}</Link>
                    <Link href="#projects" className={styles.navLink}>{t.common.portfolio}</Link>
                    <Link href="#career" className={styles.navLink}>{t.common.career}</Link>
                    <button
                        onClick={toggleLanguage}
                        className={styles.navLink}
                        style={{
                            background: 'none',
                            border: '1px solid hsla(var(--border))',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginLeft: '1rem',
                            fontWeight: 600
                        }}
                    >
                        {language === 'ko' ? 'EN' : 'KO'}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
