import styles from '@styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { raleway } from '../ui/fonts';

function Footer() {
    return (
        <footer className={`${styles.footer} ${raleway.className}`}>
            <div className={styles.inner}>
                <p className={styles.copyright}>© 2025 Wali Sylla</p>
                <div className={styles.links}>
                    <Link
                        href="https://www.linkedin.com/in/wali-sylla-52a464186/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.link}
                    >
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    </Link>
                    <Link
                        href="https://github.com/Wall-E75"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={styles.link}
                    >
                        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
