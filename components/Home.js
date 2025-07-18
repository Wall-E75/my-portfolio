import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Presentation from '@components/sections/Presentation.js';



function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();//Permet le changement de page

  const handleClick = () => {
    console.log('Clic');
    router.push('/presentation');
  }

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
            {/* <p className={styles.description}>
              {t('home.welcome')}
            </p> */}
          </div>
        </section>
      
      <section id='presentation' className={styles.presentation}>
        <Presentation />
      </section>
      </main>
    </>
  );
}

export default Home;
