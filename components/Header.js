import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function Header() {
  return (
    <>
      <header className={styles.header}>
       
        <h1 className={styles.logo}>
          <Link href="/presentation"><FontAwesomeIcon icon={faUser} /></Link>
        </h1>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <div className={styles.menu}>
          <Menu />
        </div>
        <nav className={styles.nav}>
      
            <ul className={styles.list}>
                <li className={styles.project}>
                  <Link href="#projets">Projets</Link>
                </li>
                <li className={styles.competences}>
                  <Link href="#competences">Compétences</Link>
                </li>
                <li className={styles.experiences}>
                  <Link href='#experiences'>Expériences</Link>
                </li>
                <li className={styles.formations}>
                  <Link href='#formations'>Formations</Link>
                </li>
                <li className={styles.contact}>
                  <Link href='#contact'>Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
