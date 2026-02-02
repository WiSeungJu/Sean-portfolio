import Link from 'next/link';
import styles from './layout.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.logo}>
                    Sean Wi
                </Link>
                <nav className={styles.nav}>
                    {/* <Link href="/" className={styles.navLink}>Home</Link> */} {/* Home usually redundant if Logo links there, but can keep */}
                    <Link href="/career" className={styles.navLink}>Career</Link>
                    <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
