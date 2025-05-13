import styles from '@styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Menu from '@components/layouts/Menu';
import ThemeSwitcher from '@components/ui/ThemeSwitcher';


function Header() {
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
                    <Link href="/presentation#projets">Projets</Link>

                  </div>
                </li>
                <li className={styles.competences}>
                  <div className={styles.wallPaper}>
                    <Link href="/presentation#competences">Compétences</Link>

                  </div>
                </li>
                <li className={styles.experiences}>
                  <div className={styles.wallPaper}>

                    <Link href='/presentation#experiences'>Expériences</Link>
                  </div>
                </li>
                <li className={styles.formations}>
                  <div className={styles.wallPaper}>
                    <Link href='/presentation#formations'>Formations</Link>
                  </div>
                </li>
                <li className={styles.contact}>
                  <div className={styles.wallPaper}>

                    <Link href='/presentation#contact'>Contact</Link>
                  </div>
                </li>
            </ul>
        </nav>

      </header>
    </>
  );
}

export default Header;
