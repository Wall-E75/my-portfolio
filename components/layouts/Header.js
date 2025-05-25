import styles from '@styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '@components/layouts/Menu';
import { useVisibility } from "../../context/VisibilityContext";
import ThemeSwitcher from '@components/ui/ThemeSwitcher';
import { raleway } from '../ui/fonts'; 

function Header() {
  const { displayComponant } = useVisibility();
  return (
    <>
      <header className={`${styles.header} ${raleway.className || ''}`}>
        <div className={styles.logo}>
          <Link href="/#presentation" aria-label='Retour à l'accueil>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </Link>
          <ThemeSwitcher />
        </div>
        <div className={styles.menu}>
          <Menu className={styles.icon} />
        </div>

        <nav className={styles.nav} aria-label='Navigation principal'>
            <ul className={styles.list}>
                <li className={styles.project} title="Découvrez mes projets">
                  <div className={styles.wallPaper}>
                    <Link href="/#projets">Projets</Link>
                  </div>
                </li>

                <li className={styles.competences} title='Mes compétences techniques'>
                  <div className={styles.wallPaper}>
                    <Link href="/#competences">Compétences</Link>
                  </div>
                </li>

                {displayComponant && (
                  <li className={styles.experiences}>
                    <div className={styles.wallPaper}>
                      <Link href='/#experiences'>Expériences</Link>
                    </div>
                  </li>
                )}

                <li className={styles.formations} title='Ma formation et mes certifications'>
                  <div className={styles.wallPaper}>
                    <Link href='/#formations'>Formations</Link>
                  </div>
                </li>

                <li className={styles.contact} title='Contactez-moi'>
                  <div className={styles.wallPaper}>
                    <Link href='/#contact'>Contact</Link>
                  </div>
                </li>
            </ul>
        </nav>

      </header>
    </>
  );
}

export default Header;
