import styles from '../styles/Presentation.module.css';
import Image from 'next/image';
import Buttons from './Buttons';
import Projets from './Projets'; 
import Experiences from './Experiences';
import Formations from './Formations';
import Competences from './Competences';
import Contact from './Contact';

function Presentation() {
  const handleClick = () => {
    console.log('Clic');    
    // Crée un élément <a> invisible
    const link = document.createElement('a');    
    link.href = '/CV_Wali_Sylla.pdf'; // URL du fichier à télécharger
    link.download = 'CV_Wali_Sylla.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);//Ajoute l'élément au DOM (nécessaire pour Firefox)
    link.click();//Déclenche le téléchargement
    document.body.removeChild(link);//Supprime l'élément du DOM
  };
  return (
    <>
      <main className={styles.mainPresentation}>
        <section id="presentation" className={styles.presentation}>
          <div className={styles.presentationIntro}>
            {/* <Image
              src="/photo_de_profil.webp"
              alt="Wali Sylla"
              width={200}
              height={300}
              className={styles.image}
              style={{borderRadius: '5%', position: 'relative', top: '50px', left: '50px'}}
            /> */}
            <div className={styles.greeting}>
              <h1 className={styles.greetingTitle}>Salut !</h1>
              <q className={styles.greetingText}>Je suis Wali Sylla, un développeur web fullstack passionné par les nouvelles technologies et les projets innovants.</q>
            </div>
          </div>
          <hr />
          <div className={styles.presentationContent}>
            <ul>
              <li><span>ID:</span> Sylla Wali</li>
              <li><span>JOB:</span> Developpeur Web Full Stack</li>
              <li><span>Age:</span> 34 ans</li>
              <li><span>Ville:</span> Paris</li>
            </ul>
          </div> 
          <Buttons 
          text="Télécharger CV"
          onClick={handleClick} />

        </section>
          
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
        <section id="contact" className={styles.contact}>
          <Contact />
        </section>        
      </main>
    </>
  );
}

export default Presentation;
