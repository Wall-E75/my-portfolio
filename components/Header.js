import styles from '../styles/Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Wali</h1>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>Projets</li>
                <li>Compétences</li>
                <li>Expériences</li>
                <li>Formations</li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
