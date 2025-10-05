import styles from '@styles/Formations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';

function Formations() {
    const { t } = useTranslation('common');
    return(
        <>
            <main className={`${styles.main} ${raleway.className}`}>
                <h1 className={`${styles.title} ${raleway.className}`}>
                    {t('education.title')}
                </h1>
                <div className={styles.iconContainer}>
                        <FontAwesomeIcon 
                            className={styles.icon} 
                            icon={faGraduationCap} 
                        />
                </div>
                <div className={styles.formationContainer}>
                    <div className={styles.infos}>
                        <h2 className={merriweather.className}>
                            {t('education.diploma.title')}
                        </h2>
                        <p>
                            <strong>{t('education.diploma.year')}</strong> : {t('education.diploma.level')}
                        </p>
                        <p>{t('education.diploma.name')}</p>
                    </div>

                    <div className={styles.infos}>
                        <h2 className={merriweather.className}>
                            {t('education.training.title')}
                        </h2>
                        {t('education.training.items', { returnObjects: true }).map((item, index) => (
                            <p key={index}>
                                <strong>{item.period}</strong> : {item.name}
                            </p>

                        ))}
                    </div>   
                    <div className={styles.infos}>
                        <h2 className={merriweather.className}>
                            {t('education.languages.title')}
                        </h2>
                        {t('education.languages.items', { returnObjects: true }).map((item, index) => (
                            <p key={index}>
                                <strong>{item.language}</strong> : {item.level}
                            </p>

                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Formations;