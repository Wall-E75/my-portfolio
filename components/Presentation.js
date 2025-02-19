import styles from '../styles/Presentation.module.css';
import Projets from './Projets'; 
import Experiences from './Experiences';
import Formations from './Formations';
import Competences from './Competences';

function Presentation() {
  return (
    <>
      <main className={styles.mainPresentation}>
        <h1>Wali Sylla</h1>
        <section className={styles.presentation}></section>
        <section className={styles.projets}>
          <Projets />
        </section>
        <section className={styles.experiences}>
          <Experiences />
        </section>
        <section className={styles.formations}>
          <Formations />
        </section>
        <section className={styles.competences}>
          <Competences />
        </section>
      </main>
    </>
  );
}

export default Presentation;
