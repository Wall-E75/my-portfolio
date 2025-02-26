import styles from '../styles/technoProject.module.css';
import { useState } from 'react';
import TemplateProjects from './TemplateProjects';
import Link from 'next/link';
import Image from 'next/image';

function JsVanillaProjects() {
    // const [isDeployed, setIsDeployed] = useState(false)
    const projectData = [
        
        {
            id: '1',
            name: 'Kanap',
            description: 'Site e-commerce de vente de canapé',
            image: '/kanap.webp',
            alt: 'Un canapé',
            techno: 'Html, Css, JavaScript',
            github: '',
            link: 'https://www.canva.com/design/DAGgChl94Js/m_ya7z9_zgDeWf1VVwN-kg/edit',
            isDeployed: false,
        },

        {
            id: '2',
            name: 'projet2',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            image: '/kanap.webp',
            alt: 'Un canapé',
            techno: 'Html, Css, JavaScript',
            github: '',
            link: '',
            isDeployed: false,
        },

        {
            id: '3',
            name: 'projet1',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            image: '/kanap.webp',
            alt: 'Un canapé',
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