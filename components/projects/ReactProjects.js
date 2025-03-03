import styles from '@styles/technoProject.module.css';
import TemplateProjects from '@components/projects/TemplateProjects';
import { useState } from 'react';
import Link from 'next/link';

function ReactProjects() {
    // const [isDeployed, setIsDeployed] = useState(false)
    const projectData = [
        {
            name: 'projet1',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            github: '',
            link: 'https://www.canva.com/design/DAGgChl94Js/m_ya7z9_zgDeWf1VVwN-kg/edit',
            isDeployed: false,
        },

        {
            name: 'projet2',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            github: '',
            link: '',
            isDeployed: false,
        },

        {
            name: 'projet1',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            github: '',
            link: '',
            isDeployed: false,
        },

    ];

    const projectList = projectData.map((project, index) => {
        return <li key={index} className={styles.project}>
            <h2>{project.name}</h2>
            <p>Description: {project.description}</p>
            <p>GitHub: {project.github}</p>
            {project.isDeployed && <p>Lien vers le site: <Link href={project.link}>{project.link}</Link></p>}
        </li>
    })
    return (
        <>
        <main className={styles.mainContenair}>
            <h1 className={styles.title}>React Projects</h1>
            <ul className={styles.list}>
               {projectList}
                
            </ul>

        </main>
        </>
    );
};

export default ReactProjects;