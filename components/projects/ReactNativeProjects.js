import styles from '@styles/technoProject.module.css';
import TemplateProjects from '@components/projects/TemplateProjects';
import { useState } from 'react';
import Link from 'next/link';

function ReactNativeProjects() {
    const [isDeployed, setIsDeployed] = useState(false)
    const projectData = [
        {
            id: 1,
            name: 'Booki',
            description: 'Plateforme de réservation d\'hébergements et d\'activités.',
            image: '/booki_logement.webp',
            alt: 'logo booki',
            techno: 'html, Css',
            github: 'https://github.com/Wall-E75/booki.git',
            link: '',
            isDeployed: false,
        },

        {
            id: 2,
            name: 'OhMyFood',
            description: 'Site de commande de repas en ligne, conçu avec Sass pour une meilleure organisation du CSS et des animations gérées via @keyframes.',
            image: '/ohmyfood_restaurant.webp',
            alt: 'logo oh my food',
            techno: 'html, Css, Saas, keyframe',
            github: 'https://github.com/Wall-E75/ohmyfood.github.io',
            link: 'https://wall-e75.github.io/ohmyfood.github.io/',
            isDeployed: true,
        },

        // {
        //     id: 3,
        //     name: 'projet1',
        //     description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
        //     image: '',
        //     alt: '',
        //     techno: '',
        //     github: '',
        //     link: '',
        //     isDeployed: false,
        // },

    ];

    const projectList = projectData.map((project, index) => {
        return <TemplateProjects key={index} {...project} />
    })
    return (
        <>
        <main className={styles.mainContainer}>
            <h1 className={styles.title}>React Native Projects</h1>
            {projectList}
        </main>
        </>
    );
};

export default ReactNativeProjects;