import styles from '@styles/technoProject.module.css';
import TemplateProjects from '@components/projects/TemplateProjects';
import { useState } from 'react';
import { merriweather, raleway } from '../ui/fonts';

export const reactProjectsData = [
        {
            id: 1,
            name: 'La Sauce',
            description: 'Site web réalisé en 10 jours avec une équipe de 3 lors de mes études de developpement web. La sauce est une plateforme de mise en relation entre association et particulier.',
            image: '/la_sauce.webp',
            alt: 'logo la sauce',
            techno: 'FullStack - Front: React, NextJs, Redux, JSX, CSS | Back: NodeJs, Express, MongoDb, Mongoose, Cloudinary',
            github: {
                front: 'https://github.com/victor-blanchard/assos-frontend.git', 
                back: 'https://github.com/victor-blanchard/assos-backend.git'
                },
            link: 'https://assos-frontend.vercel.app/',
            category: 'React'
        },

        {
            id: 2,
            name: 'My Moviz',
            description: 'Site web, permettant d\'afficher les derniers films à l\'aide de l\'API the movie database avec la possibilité d\'ajouter à sa wishlist des films, avec un compteur de vues et permet d\'évaluer chacun des films.',
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
    const [isDeployed, setIsDeployed] = useState(false)

    const projectList = reactProjectData.map((project) => {
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
                Projets React
            </h1>
                {projectList}    
        </main>
        </>
    );
};

export default ReactProjects;