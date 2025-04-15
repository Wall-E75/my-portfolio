import styles from '@styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon } from '@fortawesome/free-solid-svg-icons';
import Menu from '@components/layouts/Menu';

function Header() {
  return (
    <>
      <header className={styles.header}>
       
        <span className={styles.logo}>
          <Link href="/presentation"><FontAwesomeIcon icon={faUser} /></Link>
        </span>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <div className={styles.menu}>
          <Menu />
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
