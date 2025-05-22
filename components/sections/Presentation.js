import styles from '@styles/Presentation.module.css';
import { useState, useEffect } from 'react';
import { VisibilityProvider } from '../../context/VisibilityContext';
import { useVisibility } from "../../context/VisibilityContext";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import Buttons from '@components/ui/Buttons';
import Projets from '@components/sections/Projets'; 
import Experiences from '@components/sections/Experiences';
import Formations from '@components/sections/Formations';
import Competences from '@components/sections/Competences';
import Contact from './Contact';
import Buttons from '../ui/Buttons';
import { merriweather, raleway } from '../ui/fonts';

function Presentation() {
  const [isVisible, setIsVisible] = useState(true);
  const { displayComponent, setDisplayComponent} = useVisibility(); //Recupère la valeur de displayComponent et setDisplayComponent
  useEffect(() => {
    // Vérifie la largeur de l'écran
    const handleResize = () => {
     setIsVisible(window.innerWidth > 768);//Si la largeur de l'écran est supérieure à 768px, isVisible est true
    };
    window.addEventListener('resize', handleResize);//Écoute les événements de redimensionnement de la fenêtre
    handleResize();//Vérifie la largeur de l'écran
    return () => window.removeEventListener('resize', handleResize);//Supprime l'écouteur d'événements lors du démontage du composant
  }, []);//[] signifie que le hook useEffect ne s'exécute qu'une seule fois après le premier rendu du composant
 
  // Fonction pour télécharger le CV
  const handleClick = () => {   
    // Crée un élément <a> invisible
    const link = document.createElement('a');    
    link.href = '/CV_Wali_Sylla.pdf'; // URL du fichier à télécharger
    link.download = 'CV_Wali_Sylla.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);//Ajoute l'élément au DOM (nécessaire pour Firefox)
    link.click();//Déclenche le téléchargement
    document.body.removeChild(link);//Supprime l'élément du DOM
  };

  // const showComponent = (display) => {
  //   console.log("click presentaton")
  //   setDisplayComponent(display)
  // }
  

  const presentationContent = (
    <div className={styles.presentationContent}>
      <ul>
        <li><span>ID :</span> Sylla Wali</li>
        <li><span>JOB :</span> Developpeur Web Full Stack</li>
        <li><span>Age :</span> 34 ans</li>
        <li><span>Ville :</span> Paris</li>
      </ul>
    </div> 
  )
  return (
    <>
      <main className={`${styles.mainPresentation} ${raleway.className}`}>
        <section id="presentation" className={styles.presentation}>
          <div className={styles.presentationIntro}>
            <div className={styles.imageContainer}>
              <Image
                src="/photo_de_profil.webp"
                alt="Wali Sylla"
                width={300}
                height={450}
                priority={true}
                style={{borderRadius: '5%'}}
              />
            </div>

         
            <div className={styles.greeting}>
              <h1 className={`${styles.greetingTitle} ${merriweather.className}`}>Salut !</h1>
              <q className={styles.greetingText}>Je suis Wali Sylla, un développeur web fullstack passionné par les nouvelles technologies et les projets innovants.</q>
              {/* <div className={styles.line}></div> */}
              {isVisible && presentationContent}
            </div>
          </div>
          {!isVisible && presentationContent}
          <Buttons 
            className={styles.button}
            title="Télécharger CV"
            text="Télécharger CV"
            icon={faDownload}
            onClick={handleClick} 
          />

        </section>
          
        <section id="projets" className={styles.projets}>
          <Projets />
        </section>
        <section id="competences" className={styles.competences}>
          <Competences />
        </section>
        {!displayComponent && <section id="experiences" className={styles.experiences}>
          <Experiences />
        </section>}
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
