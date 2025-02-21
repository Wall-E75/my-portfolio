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
        {/* <nav className={styles.nav}> */}
        <Menu />
            {/* <ul className={styles.list}>
                <li>
                  <Link href="#projets">Projets</Link>
                </li>
                <li>
                  <Link href="#competences">Compétences</Link>
                </li>
                <li>
                  <Link href='#experiences'>Expériences</Link>
                </li>
                <li>
                  <Link href='#formations'>Formations</Link>
                </li>
            </ul> */}
        {/* </nav> */}
      </header>
    </>
  );
}

export default Header;
