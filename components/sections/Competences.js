import styles from '@styles/Competences.module.css';
import Carousel from '../layouts/Carousel';
import { merriweather, raleway } from '../ui/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5,
    faCss3,
    faReact,
    faNodeJs,
    faGithub,
    faSquareJs,
    faJs
} from '@fortawesome/free-brands-svg-icons';

// Icônes classiques (non-marques)
import { 
    faDatabase,
    faSquareCaretUp,
    faWrench // Icône pour "outils"
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

function Competences() {
    const { t } = useTranslation('common');
    const getSkillsData = () => [
        {
            title: t('skills.categories.frontend.title'),
            skills: [
                {
                    name: t('skills.categories.frontend.skills.javascript'),
                    icon: faJs,
                }, 
                {
                    name: t('skills.categories.frontend.skills.html5'),
                    icon: faHtml5,
                }, 
                {
                    name: t('skills.categories.frontend.skills.css3'),
                    icon: faCss3,
                }, 
                {
                    name: t('skills.categories.frontend.skills.react'),
                    icon: faReact,
                },
                {
                    name: t('skills.categories.frontend.skills.nextjs'),
                    icon: faSquareCaretUp,
                },
                {
                    name: t('skills.categories.frontend.skills.reactnative'),
                    icon: faSquareJs,
                },
                {
                    name: t('skills.categories.frontend.skills.tailwind'),
                    icon: '/Tailwind_CSS_Logo.svg',
                }
            ]
        },
        {
            title: t('skills.categories.backend.title'),
            skills: [
                {
                    name: t('skills.categories.backend.skills.nodejs'),
                    icon: faNodeJs,
                },
                {
                    name: t('skills.categories.backend.skills.express'),
                    icon: faNodeJs,
                },
                {
                    name: t('skills.categories.backend.skills.restapi'),
                    icon: faWrench,
                }
            ]
        },
        {
            title: t('skills.categories.database.title'),
            skills: [
                {
                    name: t('skills.categories.database.skills.mongodb'),
                    icon: faDatabase,
                },
                {
                    name: t('skills.categories.database.skills.mongoose'),
                    icon: faDatabase,
                },
                {
                    name: t('skills.categories.database.skills.sql'),
                    icon: faDatabase,
                },
                {
                    name: t('skills.categories.database.skills.postgresql'),
                    icon: faDatabase,
                }
            ]
        },
        {
            title: t('skills.categories.tools.title'),
            skills: [
                {
                    name: t('skills.categories.tools.skills.git'),
                    icon: faGithub,
                },
                {
                    name: t('skills.categories.tools.skills.github'),
                    icon: faGithub,
                },
                {
                    name: t('skills.categories.tools.skills.vscode'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.tools.skills.postman'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.tools.skills.thunderclient'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.tools.skills.figma'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.tools.skills.expo'),
                    icon: faWrench,
                }
            ]
        },
        {
            title: t('skills.categories.other.title'),
            skills: [
                {
                    name: t('skills.categories.other.skills.responsive'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.other.skills.seo'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.other.skills.accessibility'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.other.skills.agile'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.other.skills.scrum'),
                    icon: faWrench,
                },
                {
                    name: t('skills.categories.other.skills.projectmanagement'),
                    icon: faWrench,
                }
            ]
        }
    ];
   
    const skillsData = useMemo(() => getSkillsData(), [t]);
    return (
        <div className={`${styles.main} ${raleway.className}`}>
            <h1 className={`${styles.title} ${merriweather.className}`}>
                {t('skills.title')}
            </h1>
                <div className={styles.skillsIntro}>
                    <q className={styles.skillsText}>
                        <i>{t('skills.intro')}</i>
                    </q>
                </div>

                <div className={styles.skillsContainer}>
                    <Carousel skillsData={skillsData} />
                </div>
        </div>
    );
};

export default Competences;