import styles from '@styles/technoProject.module.css';
import TemplateProjects from '@components/projects/TemplateProjects';
import { useState } from 'react';
import Link from 'next/link';

function ReactProjects() {
    const [isDeployed, setIsDeployed] = useState(false)
    const projectData = [
        {
            id: 1,
            name: 'La Sauce',
            description: 'Site web réalisé en 10 jours avec une équipe de 3 lors de mes études de developpement web. La sauce est une plateforme de mise en relation entre association et particulier.',
            image: '/la_sauce.webp',
            alt: 'logo la sauce',
            techno: 'FullStack - Front: React, Redux, CSS,  Back: NodeJs, Express, MongoDb, Mongoose, Cloudinary',
            github: {
                front: 'https://github.com/victor-blanchard/assos-frontend.git', 
                back: 'https://github.com/victor-blanchard/assos-backend.git'
                },
            link: 'https://assos-frontend.vercel.app/',
            isDeployed: true,
        },

        // {
        //     id: 2,
        //     name: 'OhMyFood',
        //     description: 'Site de commande de repas en ligne, conçu avec Sass pour une meilleure organisation du CSS et des animations gérées via @keyframes.',
        //     image: '/ohmyfood_restaurant.webp',
        //     alt: 'logo oh my food',
        //     techno: 'html, Css, Saas, keyframe',
        //     github: 'https://github.com/Wall-E75/ohmyfood.github.io',
        //     link: 'https://wall-e75.github.io/ohmyfood.github.io/',
        //     isDeployed: true,
        // },

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
            <h1 className={styles.title}>React Projects</h1>
                {projectList}    
        </main>
        </>
    );
};

export default ReactProjects;