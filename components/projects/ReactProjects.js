import styles from '@styles/technoProject.module.css';
import TemplateProjects from '@components/projects/TemplateProjects';
import { useState } from 'react';
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';

export const getReactProjectsData = (t) => [
    {
        id: 1,
        name: t('projects.reactProjects.lasauce.name'),
        description: t('projects.reactProjects.lasauce.description'),
        image: '/lasauce.webp',
        alt: 'logo la sauce',
        techno: 'FullStack - Front: React, NextJs, Redux, JSX, CSS, Antd Design | Back: NodeJs, Express, MongoDb, Mongoose, Cloudinary',
        github: {
            front: 'https://github.com/victor-blanchard/assos-frontend.git', 
            back: 'https://github.com/victor-blanchard/assos-backend.git'
            },
        link: 'https://assos-frontend.vercel.app/',
        category: 'React',
    },

    {
        id: 2,
        name: t('projects.reactProjects.mymoviz.name'),
        description: t('projects.reactProjects.mymoviz.description'),
        image: '/moviz.webp',
        alt: 'bande film',
        techno: 'html, Css, React, NextJs, JSX | NodeJs, ExpressJs API, ',
        github: {
            front: 'https://github.com/Wall-E75/mymoviz-frontend.git',
            back: 'https://github.com/Wall-E75/mymoviz-backend.git',
        },
        link: 'https://mymoviz-frontend-theta-pied.vercel.app/',
        category: 'React'
    },

];

function ReactProjects() {
    const { t } = useTranslation('common');
    const [isDeployed, setIsDeployed] = useState(false);

    const projectsData = getReactProjectsData(t);
    const projectList = projectsData.map((project) => {
        return <TemplateProjects 
                    key={project.id} 
                    {...project} 
                    front={project.github?.front} 
                    back={project.github?.back}
                />
    });
    return (
        <>
        <main className={`${styles.mainContainer} ${raleway?.className || ''}`}>
            <h1 className={`${styles.themeTitle} ${merriweather?.className || ''}`}>
                {t('projects.pagesTitles.react')}
            </h1>
                {projectList}    
        </main>
        </>
    );
};

export default ReactProjects;