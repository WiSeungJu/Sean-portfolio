import styles from './layout.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.socials}>
                    {/* Placeholders for social links */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                    <a href="mailto:hello@example.com" className={styles.socialLink}>Email</a>
                </div>
                <p className={styles.footerText}>
                    &copy; {new Date().getFullYear()} Sean Wi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
