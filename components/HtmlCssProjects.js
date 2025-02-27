import styles from '../styles/technoProject.module.css';
import TemplateProjects from './TemplateProjects.js';
import { useState } from 'react';
import Link from 'next/link';

function HtmlCssProjects() {
    // const [isDeployed, setIsDeployed] = useState(false)
    const projectData = [
        {
            id: 1,
            name: 'Booki',
            description: 'Site web de location d\'hebergement',
            image: '/booki_logement.webp',
            alt: 'logo booki',
            techno: 'html, Css',
            github: '',
            link: 'https://www.canva.com/design/DAGgChl94Js/m_ya7z9_zgDeWf1VVwN-kg/edit',
            isDeployed: false,
        },

        {
            id: 2,
            name: 'OhMyFood',
            description: 'Site de commande de repas en ligne, pour ce site, j\ai utiliser Sass afin de structurer mon css et les keyframe pour gerer mes animations.',
            image: '/ohmyfood_restaurant.webp',
            alt: 'logo oh my food',
            techno: 'html, Css, Saas, keyframe',
            github: 'https://github.com/Wall-E75/ohmyfood.github.io',
            link: '',
            isDeployed: false,
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
            <h1 className={styles.themeTitle}>HTML/CSS</h1>
               {projectList}

        </main>
        </>
    );
};

export default HtmlCssProjects;