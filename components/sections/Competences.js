import styles from '@styles/Competences.module.css';
import { merriweather, raleway } from '../ui/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextImageModule from 'next/image';
const Image = NextImageModule.default || NextImageModule;
import {
    faHtml5,
    faCss3,
    faReact,
    faNodeJs,
    faGithub,
    faJs,
    faNpm,
    faLinux
} from '@fortawesome/free-brands-svg-icons';

import {
    faDatabase,
    faServer,
    faCode,
    faLock,
    faShield,
    faFlask,
    faCloud,
    faLanguage,
    faLayerGroup,
    faFileLines,
    faGear,
    faCubes,
    faSitemap,
    faCodeBranch,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

const mainStack = [
    { name: 'JavaScript', icon: faJs },
    { name: 'React / Next.js', icon: faReact },
    { name: 'Node.js / Express', icon: faNodeJs },
];

function Competences() {
    const { t } = useTranslation('common');
    const getSkillsData = () => [
        {
            title: t('skills.categories.frontend.title'),
            skills: [
                { name: t('skills.categories.frontend.skills.javascript'), icon: faJs },
                { name: t('skills.categories.frontend.skills.typescript'), icon: faCode },
                { name: t('skills.categories.frontend.skills.html5'), icon: faHtml5 },
                { name: t('skills.categories.frontend.skills.css3'), icon: faCss3 },
                { name: t('skills.categories.frontend.skills.react'), icon: faReact },
                { name: t('skills.categories.frontend.skills.nextjs'), icon: faCode },
                { name: t('skills.categories.frontend.skills.redux'), icon: faLayerGroup },
                { name: t('skills.categories.frontend.skills.tailwind'), icon: '/Tailwind_CSS_Logo.svg' },
                { name: t('skills.categories.frontend.skills.framermotion'), icon: faCode },
            ]
        },
        {
            title: t('skills.categories.backend.title'),
            skills: [
                { name: t('skills.categories.backend.skills.nodejs'), icon: faNodeJs },
                { name: t('skills.categories.backend.skills.express'), icon: faServer },
                { name: t('skills.categories.backend.skills.restapi'), icon: faCode },
                { name: t('skills.categories.backend.skills.mongodb'), icon: faDatabase },
                { name: t('skills.categories.backend.skills.mongoose'), icon: faDatabase },
                { name: t('skills.categories.backend.skills.postgresql'), icon: faDatabase },
                { name: t('skills.categories.backend.skills.mysql'), icon: faDatabase },
                { name: t('skills.categories.backend.skills.supabase'), icon: faDatabase },
                { name: t('skills.categories.backend.skills.bcrypt'), icon: faLock },
            ]
        },
        {
            title: t('skills.categories.tools.title'),
            skills: [
                { name: t('skills.categories.tools.skills.git'), icon: faCodeBranch },
                { name: t('skills.categories.tools.skills.github'), icon: faGithub },
                { name: t('skills.categories.tools.skills.wsl2'), icon: faLinux },
                { name: t('skills.categories.tools.skills.jest'), icon: faFlask },
                { name: t('skills.categories.tools.skills.npm'), icon: faNpm },
                { name: t('skills.categories.tools.skills.sanity'), icon: faFileLines },
                { name: t('skills.categories.tools.skills.nginx'), icon: faServer },
                { name: t('skills.categories.tools.skills.pm2'), icon: faGear },
                { name: t('skills.categories.tools.skills.cloudinary'), icon: faCloud },
                { name: t('skills.categories.tools.skills.i18n'), icon: faLanguage },
            ]
        },
        {
            title: t('skills.categories.methods.title'),
            skills: [
                { name: t('skills.categories.methods.skills.agile'), icon: faSitemap },
                { name: t('skills.categories.methods.skills.solid'), icon: faCubes },
                { name: t('skills.categories.methods.skills.modular'), icon: faLayerGroup },
                { name: t('skills.categories.methods.skills.sqloptim'), icon: faDatabase },
                { name: t('skills.categories.methods.skills.xss'), icon: faShield },
                { name: t('skills.categories.methods.skills.documentation'), icon: faFileLines },
                { name: t('skills.categories.methods.skills.unittests'), icon: faFlask },
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

            <div className={styles.mainStack}>
                {mainStack.map((tech, i) => (
                    <div key={i} className={styles.mainStackItem}>
                        <FontAwesomeIcon icon={tech.icon} className={styles.mainStackIcon} />
                        <span className={styles.mainStackName}>{tech.name}</span>
                    </div>
                ))}
            </div>

            <div className={styles.skillsContainer}>
                {skillsData.map((category, index) => (
                    <details key={index} className={styles.card}>
                        <summary className={styles.cardSummary}>
                            <span className={styles.cardTitle}>{category.title}</span>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.cardChevron} />
                        </summary>
                        <ul className={styles.skillsList}>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className={styles.skillItem}>
                                    {typeof skill.icon === 'string' ? (
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={16}
                                            height={16}
                                            className={styles.skillSvg}
                                        />
                                    ) : (
                                        <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
                                    )}
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default Competences;
