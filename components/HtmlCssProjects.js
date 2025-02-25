import styles from '../styles/technoProject.module.css';
import TemplateProjects from './templateProject';
import { useState } from 'react';
import Link from 'next/link';

function HtmlCssProjects() {
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
        return <TemplateProjects key={index} title='JS Vanilla' {...project} />
    })
    return (
        <>
        <main className={styles.mainContainer}>
               {projectList}

        </main>
        </>
    );
};

export default HtmlCssProjects;