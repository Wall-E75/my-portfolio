import styles from '@styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '@components/layouts/Menu';
import { useVisibility } from "../../context/VisibilityContext";
import ThemeSwitcher from '@components/ui/ThemeSwitcher';
import LanguageSwitcher from '@components/ui/LanguageSwitcher';
import { raleway } from '../ui/fonts'; 

function Header() {
  const { displayComponent } = useVisibility();
  return (
    <>
      <header className={`${styles.header} ${raleway.className || ''}`}>
        <div className={styles.logo}>
          <Link href="/#presentation" aria-label="Retour à l'accueil">
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </Link>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        
        <div className={styles.menu}>
          <Menu className={styles.icon} />
        </div>

        <nav className={styles.nav} aria-label='Navigation principal'>
            <ul className={styles.list}>
                <li className={styles.project}>
                  <div className={styles.wallPaper}></div>
                    <Link href="/#projets">Projets</Link>
                </li>

                <li className={styles.competences}>
                  <div className={styles.wallPaper}></div>
                    <Link href="/#competences">Compétences</Link>
                </li>

                {displayComponent && (
                  <li className={styles.experiences}>
                      <Link href='/#experiences'>Expériences</Link>
                    <div className={styles.wallPaper}></div>
                  </li>
                )}

                <li className={styles.formations}>
                  <Link href='/#formations'>Formations</Link>
                  <div className={styles.wallPaper}></div>
                </li>

                <li className={styles.contact}>
                  <Link href='/#contact'>Contact</Link>
                  <div className={styles.wallPaper}>
                  </div>
                </li>
            </ul>
        </nav>

      </header>
    </>
  );
}

export default Header;
