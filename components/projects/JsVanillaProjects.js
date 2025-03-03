import styles from '@styles/technoProject.module.css';
import { useState } from 'react';
import TemplateProjects from '@components/projects/TemplateProjects';
import Link from 'next/link';
import Image from 'next/image';

function JsVanillaProjects() {
    // const [isDeployed, setIsDeployed] = useState(false)
    const projectData = [
        
        {
            id: '1',
            name: 'Kanap',
            description: 'Boutique en ligne spécialisée dans la vente de canapés.',
            image: '/kanap.webp',
            alt: 'Un canapé',
            techno: 'Html, Css, JavaScript',
            github: 'https://github.com/Wall-E75/kanap.git',
            link: '',
            isDeployed: false,
        },

        {
            id: '2',
            name: 'La Panthere',
            description: 'Agence de web design, pour ce site mon travail consisté à optimiser le referencement naturel (SEO), pour une meilleur visibilité en ligne',
            image: '/kanap.webp',
            alt: 'Logo panthere',
            techno: 'SEO',
            github: '',
            link: '',
            isDeployed: false,
        },

        {
            id: '3',
            name: 'Tickethack',
            description: 'Site de réservation de billet de train',
            image: '/kanap.webp',
            alt: 'Un train',
            techno: 'Html, Css, JavaScript',
            github: '',
            link: '',
            isDeployed: false,
        },

    ];

    const projectList = projectData.map((project, index) => {
        return <TemplateProjects key={index}  {...project} />
    })
    return (
        <>
            <main className={styles.mainContainer}>
                {projectList}  

            </main>
        </>
    );
};

export default JsVanillaProjects;