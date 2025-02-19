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
        <section id="projets" className={styles.projets}>
          <Projets />
        </section>
        <section id="competences" className={styles.competences}>
          <Competences />
        </section>
        <section id="experiences" className={styles.experiences}>
          <Experiences />
        </section>
        <section id="formations" className={styles.formations}>
          <Formations />
        </section>
        
      </main>
    </>
  );
}

export default Presentation;
