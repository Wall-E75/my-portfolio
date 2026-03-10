import styles from '@styles/Projets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';

function Projets() {
    const { t } = useTranslation('common');

    const projects = [
        {
            name: t('projects.featured.portfolio.name'),
            description: t('projects.featured.portfolio.description'),
            stack: ['Next.js 15', 'React 19', 'CSS Modules', 'next-i18next'],
            github: 'https://github.com/Wall-E75/my-portfolio',
            link: null,
        },
        {
            name: t('projects.featured.esse.name'),
            description: t('projects.featured.esse.description'),
            stack: ['Next.js 15', 'Sanity CMS', 'Framer Motion'],
            github: null,
            link: 'https://association-esse-first.netlify.app/',
        },
        {
            name: t('projects.featured.lasauce.name'),
            description: t('projects.featured.lasauce.description'),
            stack: ['React', 'Redux', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/victor-blanchard/assos-frontend',
            link: 'https://assos-frontend.vercel.app/',
        },
        {
            name: t('projects.featured.weatherapp.name'),
            description: t('projects.featured.weatherapp.description'),
            stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/Wall-E75/weatherapp-frontend',
            link: 'https://weatherapp-frontend-chi.vercel.app',
        },
    ];

    return (
        <div className={`${styles.main} ${raleway.className}`}>
            <div className={styles.inner}>
                <h1 className={`${styles.title} ${merriweather.className}`}>
                    {t('projects.title')}
                </h1>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <article key={index} className={styles.card}>
                            <h2 className={`${styles.projectName} ${merriweather.className}`}>
                                {project.name}
                            </h2>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.stack}>
                                {project.stack.map((tech, i) => (
                                    <span key={i} className={styles.techBadge}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.links}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FontAwesomeIcon icon={faGithub} /> GitHub
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FontAwesomeIcon icon={faGlobe} /> Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projets;
