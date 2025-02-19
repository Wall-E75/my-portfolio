import styles from '../styles/Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}><Link href="/presentation">Wali</Link></h1>
        <nav className={styles.nav}>
            <ul className={styles.list}>
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
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
