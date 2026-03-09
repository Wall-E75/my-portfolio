import styles from '@styles/Experiences.module.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useVisibility } from "../../context/VisibilityContext";
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';

function Experiences() {
    const { setDisplayComponent } = useVisibility();
    const { t } = useTranslation('common');

    const experienceItems = t('experiences.items', { returnObjects: true });
    const hasExperiences = Array.isArray(experienceItems) && experienceItems.length > 0;

    useEffect(() => {
        setDisplayComponent(hasExperiences);
    }, [hasExperiences]);

    if (!hasExperiences) return null;

    return (
        <>
            <main className={`${styles.main} ${raleway.className}`}>
                <h1 className={`${styles.title} ${merriweather.className}`}>
                    {t('experiences.title')}
                </h1>
                <div className={styles.timeline}>
                    {experienceItems.map((xp, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={`${styles.role} ${merriweather.className}`}>
                                    {xp.role}
                                </h2>
                                <span className={styles.company}>{xp.company}</span>
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.badge}>{xp.type}</span>
                                <span className={styles.period}>
                                    <FontAwesomeIcon icon={faCalendar} />
                                    {xp.period}
                                </span>
                                <span className={styles.location}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {xp.location}
                                </span>
                            </div>
                            {xp.missions ? (
                                <ul className={styles.missions}>
                                    {xp.missions.map((mission, mIndex) => (
                                        <li key={mIndex} className={styles.mission}>
                                            <p className={styles.missionTitle}>{mission.title}</p>
                                            <p className={styles.missionDesc}>{mission.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={styles.description}>{xp.description}</p>
                            )}
                            {xp.stack && (
                                <div className={styles.stack}>
                                    {xp.stack.map((tech, tIndex) => (
                                        <span key={tIndex} className={styles.techBadge}>{tech}</span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Experiences;
