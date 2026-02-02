import Link from 'next/link';
import styles from './sections.module.css';

const Hero = () => {
    return (
        <section className={`container ${styles.hero}`}>
            <h1 className={styles.heroTitle}>
                Building <br />
                Digital Excellence.
            </h1>
            <p className={styles.heroSubtitle}>
                I&apos;m Sean Wi. I craft high-performance web applications and premium digital experiences.
            </p>
            <div className={styles.ctaGroup}>
                <Link href="/portfolio" className={styles.buttonPrimary}>
                    View Work
                </Link>
                <Link href="/career" className={styles.buttonSecondary}>
                    My Journey
                </Link>
            </div>
        </section>
    );
};

export default Hero;
