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
        },

        {
            id: '2',
            name: 'La Panthere',
            description: 'Agence de web design, pour ce site mon travail consistait à optimiser le referencement naturel (SEO), pour une meilleur visibilité en ligne',
            image: '/la_panthere.webp',
            alt: 'Logo panthere',
            techno: 'SEO',
            github: 'https://github.com/Wall-E75/la_panthere.github.io',
            link: 'https://wall-e75.github.io/la_panthere.github.io/',
        },

        {
            id: '3',
            name: 'Tickethack',
            description: 'Site de réservation de billet de train',
            image: '/tickethack.webp',
            alt: 'Un train',
            techno: 'Html, Css, JavaScript',
            github: {
                front: 'https://github.com/Wall-E75/ticketHack-frontend.git',
                back: 'https://github.com/Wall-E75/ticketHack-backend.git'
            },
            link: 'https://ticket-hack-frontend-azure.vercel.app/',
        },

        {
            id: '4',
            name: 'WeatherApp',
            description: 'FullStack: Site météo, permettant de consulter la météo de n\'importe quelle ville à l\'aide d\'une api',
            image: '/weather.avif',
            alt: 'Une representation de la météo avec plusieurs icônes de temps',
            techno: 'Html, Css, JavaScript | NodeJs, Express, MongoDb, Mongoose, Vercel, Webservice',
            github: {
                front: 'https://github.com/Wall-E75/weatherapp-frontend.git',
                back: 'https://github.com/Wall-E75/weatherapp-backend.git'
            },
            link: 'https://weatherapp-frontend-chi.vercel.app',
        },


    ];

    const projectList = projectData.map((project) => {
        return <TemplateProjects 
                    key={project.id}  
                    {...project}
                    front={project.github?.front} 
                    back={project.github?.back}
                />
    })
    return (
        <>
            <main className={styles.mainContainer}>
                <h1 className={styles.themeTitle}>JavaScript Projects</h1>
                {projectList}  

            </main>
        </>
    );
};

export default JsVanillaProjects;