import styles from '@styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '@components/layouts/Menu';
import { useVisibility } from "../../context/VisibilityContext";
import ThemeSwitcher from '@components/ui/ThemeSwitcher';


function Header() {
  const { displayComponant } = useVisibility();
  return (
    <>
      <header className={styles.header}>
       
        <div className={styles.logo}>
          <Link href="/#presentation"><FontAwesomeIcon icon={faUser} className={styles.icon} /></Link>
          <ThemeSwitcher />
        </div>
        <div className={styles.menu}>
          {/* <ThemeSwitcher className={styles.icon} /> */}
          <Menu className={styles.icon} />
        </div>
        <nav className={styles.nav}>
      
            <ul className={styles.list}>
                <li className={styles.project} title="projets">
                  <div className={styles.wallPaper}>
                    <Link href="/#projets">Projets</Link>

                  </div>
                </li>
                <li className={styles.competences}>
                  <div className={styles.wallPaper}>
                    <Link href="/#competences">Compétences</Link>

                  </div>
                </li>
                {displayComponant && <li className={styles.experiences}>
                  <div className={styles.wallPaper}>

                    <Link href='/#experiences'>Expériences</Link>
                  </div>
                </li>}
                <li className={styles.formations}>
                  <div className={styles.wallPaper}>
                    <Link href='/#formations'>Formations</Link>
                  </div>
                </li>
                <li className={styles.contact}>
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
