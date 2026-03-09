import styles from '@styles/Presentation.module.css';
import { useVisibility } from "../../context/VisibilityContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Projets from '@components/sections/Projets';
import Experiences from '@components/sections/Experiences';
import Formations from '@components/sections/Formations';
import Competences from '@components/sections/Competences';
import Contact from './Contact';
import Buttons from '../ui/Buttons';
import NextImageModule from 'next/image';
const Image = NextImageModule.default || NextImageModule; // Solution pour ES Module avec Next.js
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';
function Presentation() {
  const { displayComponent } = useVisibility();
  const { t } = useTranslation('common');
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/CV_Wali_Sylla_Developpeur_Web_JS.pdf';
    link.download = 'CV_Wali_Sylla_Developpeur_Web_JS.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const presentationContent = (
    <div className={styles.presentationContent}>
      <ul>
        <li><span>ID :</span> {t('home.profileData.name')}</li>
        <li><span>Job :</span> {t('home.profileData.job')}</li>
        <li><span>Age :</span> {t('home.profileData.age')}</li>
        <li><span>City :</span> {t('home.profileData.city')}</li>
        <li><span>Mail :</span> {t('home.profileData.email')}</li>
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
              alt="Photo de Wali Sylla"
              width={300}
              height={450}
              priority={true}
              style={{borderRadius: '5%'}}
            />
          </div>
        
          <div className={styles.greeting}>
            <h1 className={`${styles.greetingTitle} ${merriweather.className}`}>{t('home.greeting')}</h1>
            <q className={styles.greetingText}>{t('home.description')}</q>
            {presentationContent}
          </div>
        </div>
        <Buttons
          title="Télécharger CV"
          text={t('home.downloadCV')}
          icon={faDownload}
          onClick={handleClick} 
          variant="accent"
        />

      </section>
      <section id="projets" className={styles.projets}>
        <Projets />
      </section>
      <section id="competences" className={styles.competences}>
        <Competences />
      </section>
      {displayComponent && <section id="experiences" className={styles.experiences}>
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