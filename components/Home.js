import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import Presentation from '@components/sections/Presentation.js';

function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.home} ${styles.container}`}>
          <div className={styles.cell1}></div>
          <div className={styles.cell2}></div>

          <div className={styles.titleContainer}>
            <p className={styles.name}>{t('home.name')}</p>
            <h1 className={styles.title}>
              {t('home.job')}
            </h1>
          </div>
        </section>

        <section id='presentation'>
          <Presentation />
        </section>
      </main>
    </>
  );
}

export default Home;
