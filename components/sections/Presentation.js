import styles from '@styles/Presentation.module.css';
import NextImageModule from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { merriweather } from '../ui/fonts';
import { useTranslation } from 'next-i18next';
import Buttons from '../ui/Buttons';

const Image = NextImageModule.default || NextImageModule;

function Presentation() {
  const { t } = useTranslation('common');

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/CV_Wali_Sylla_Developpeur_Fullstack.pdf';
    link.download = 'CV_Wali_Sylla_Developpeur_Fullstack.pdf';
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
        <li><span>Mail :</span> <a href={`mailto:${t('home.profileData.email')}`}>{t('home.profileData.email')}</a></li>
      </ul>
    </div>
  );

  return (
    <>
      <div className={styles.presentationIntro}>
        <div className={styles.imageContainer}>
          <Image
            src="/photo_de_profil.webp"
            alt="Photo de Wali Sylla"
            width={300}
            height={450}
            priority={true}
            style={{ borderRadius: '5%' }}
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
    </>
  );
}

export default Presentation;
